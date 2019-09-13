module BlockType exposing
    ( BalancedType(..)
    , BlockType(..)
    , Level
    , Line
    , MarkdownType(..)
    , get
    , isBalanced
    , isMarkDown
    , isOListItem
    , level
    , prefixOfBlockType
    , stringOfBlockType
    )

{-| The BlockType module provides a parser that
inspects lines and determines the kind of block
they belong to (its BlockType). This parser is not
used directly, but rather is called by the function

    get : Option -> Line -> ( Level, Maybe BlockType )

which computes a tuple consisting of the Level and
BlockType of a Line. A Line is an alias for a Sting
and Level, which is an alias for Int, is a measure
of indentation: the number of leading spaces divided
by 3, where division is integer division.

-}

import Markdown.Option exposing (Option(..))
import Parser.Advanced exposing (..)


type alias Parser a =
    Parser.Advanced.Parser Context Problem a


type Context
    = Definition String
    | List
    | Record


type Problem
    = Expecting String


type alias Level =
    Int


type alias Line =
    String


type BlockType
    = BalancedBlock BalancedType
    | MarkdownBlock MarkdownType


type BalancedType
    = DisplayCode
    | Verbatim
    | DisplayMath


type MarkdownType
    = Root
    | UListItem
    | OListItem Int
    | Heading Int
    | HorizontalRule
    | Quotation
    | Poetry
    | Plain
    | Image
    | Blank
    | TableCell
    | TableRow
    | Table


get : Option -> Line -> ( Level, Maybe BlockType )
get option str =
    if str == "\n" then
        ( 0, Just (MarkdownBlock Blank) )

    else
        case run (parse option) (dropLeadingBlanks str) of
            Ok result ->
                ( level str, Just result )

            Err _ ->
                ( 0, Just (MarkdownBlock Plain) )



-- PARSER BLOCKTYPE --


{-| The top-level parse function dispatches
work to parserStandard or parseExtended
according to the given option
-}
parse : Option -> Parser BlockType
parse option =
    case option of
        Standard ->
            parseStandard

        _ ->
            parseExtended


parseStandard : Parser BlockType
parseStandard =
    oneOf
        [ tableBlock
        , imageBlock
        , mathBlock
        , unorderedListItemBlock
        , orderedListItemBlock
        , quotationBlock
        , codeBlock
        , headingBlock
        , horizontalRuleBlock
        ]


parseExtended : Parser BlockType
parseExtended =
    oneOf
        [ imageBlock
        , mathBlock
        , unorderedListItemBlock
        , orderedListItemBlock
        , quotationBlock
        , poetryBlock
        , backtrackable verbatimBlock
        , codeBlock
        , tableBlock
        , headingBlock
        , horizontalRuleBlock
        ]



-- PARSERS --


tableBlock : Parser BlockType
tableBlock =
    (succeed ()
        |. symbol (Token "| " (Expecting "expecting '| ' to begin poetry block"))
    )
        |> map (\_ -> MarkdownBlock TableRow)


poetryBlock : Parser BlockType
poetryBlock =
    (succeed ()
        |. symbol (Token ">> " (Expecting "expecting '>> ' to begin poetry block"))
    )
        |> map (\_ -> MarkdownBlock Poetry)


quotationBlock : Parser BlockType
quotationBlock =
    (succeed ()
        |. symbol (Token "> " (Expecting "expecting '> ' to begin quotation"))
    )
        |> map (\_ -> MarkdownBlock Quotation)


orderedListItemBlock : Parser BlockType
orderedListItemBlock =
    (succeed ()
        |. parseWhile (\c -> c == ' ')
        |. chompIf (\c -> Char.isDigit c) (Expecting "Expecting digit to begin ordered list item")
        |. chompWhile (\c -> Char.isDigit c)
        |. symbol (Token ". " (Expecting "expecting period"))
    )
        |> map (\_ -> MarkdownBlock (OListItem 0))


horizontalRuleBlock : Parser BlockType
horizontalRuleBlock =
    (succeed ()
        |. spaces
        |. symbol (Token "___" (Expecting "Expecting at least three underscores to begin thematic break"))
    )
        |> map (\x -> MarkdownBlock HorizontalRule)


headingBlock : Parser BlockType
headingBlock =
    (succeed identity
        |. spaces
        |. symbol (Token "#" (Expecting "Expecting '#' to begin heading block"))
        |= parseWhile (\c -> c == '#')
    )
        |> map (\s -> MarkdownBlock (Heading (String.length s + 1)))



-- tableBlock : Parse BlockType
-- tableBlock =
--     (succeed identity
--         |. spaces
--         |. symbol (Token "|" (Expecting "Expecting '|' to begin table block"))
--     )
--         |> map (\s -> MarkdownBlock TableBlock)


codeBlock : Parser BlockType
codeBlock =
    succeed (BalancedBlock DisplayCode)
        |. symbol (Token "```" (Expecting "Expecting four ticks to begin verbatim block"))


verbatimBlock : Parser BlockType
verbatimBlock =
    succeed (BalancedBlock Verbatim)
        |. symbol (Token "````" (Expecting "Expecting four ticks to begin verbatim block"))


mathBlock : Parser BlockType
mathBlock =
    succeed (BalancedBlock DisplayMath)
        |. symbol (Token "$$" (Expecting "Expecting four ticks to begin verbatim block"))


imageBlock : Parser BlockType
imageBlock =
    succeed (MarkdownBlock Image)
        |. symbol (Token "![" (Expecting "Expecting '![' to begin image block"))


unorderedListItemBlock : Parser BlockType
unorderedListItemBlock =
    succeed (MarkdownBlock UListItem)
        |. symbol (Token "- " (Expecting "Expecting '-' to begin list item"))


parseWhile : (Char -> Bool) -> Parser String
parseWhile accepting =
    chompWhile accepting |> getChompedString



-- HELPER FUNCTIONS --


prefixOfBalancedType : BalancedType -> String
prefixOfBalancedType bt =
    case bt of
        DisplayCode ->
            "```"

        Verbatim ->
            "````"

        DisplayMath ->
            "$$"


prefixOfBlockType : BlockType -> String -> String
prefixOfBlockType bt line =
    case bt of
        BalancedBlock bb ->
            prefixOfBalancedType bb

        MarkdownBlock mdb ->
            prefixOfMarkdownType mdb line


prefixOfMarkdownType : MarkdownType -> String -> String
prefixOfMarkdownType mdt line =
    let
        runPrefix : Parser String -> String -> String
        runPrefix prefixParser str =
            case run prefixParser str of
                Ok prefix ->
                    prefix

                Err _ ->
                    ""
    in
    case mdt of
        Root ->
            ""

        UListItem ->
            runPrefix uListPrefix line

        OListItem _ ->
            runPrefix oListPrefix line

        Heading k ->
            String.repeat k "#" ++ " "

        HorizontalRule ->
            "___"

        Quotation ->
            "> "

        Poetry ->
            ">> "

        Plain ->
            ""

        Image ->
            ""

        TableCell ->
            ""

        TableRow ->
            ""

        Table ->
            ""

        Blank ->
            ""


oListPrefix : Parser String
oListPrefix =
    (getChompedString <|
        succeed identity
            |= chompUntil (Token "." (Expecting "expecting '.' to begin OListItem block"))
    )
        |> map (\x -> x ++ ". ")


uListPrefix : Parser String
uListPrefix =
    (getChompedString <|
        succeed identity
            |= chompUntil (Token "-" (Expecting "expecting '-' to begin UListItem block"))
    )
        |> map
            (\s -> s ++ "- ")


isBalanced : BlockType -> Bool
isBalanced bt =
    case bt of
        BalancedBlock _ ->
            True

        MarkdownBlock _ ->
            False


isOListItem : BlockType -> Bool
isOListItem blockType =
    case blockType of
        MarkdownBlock (OListItem _) ->
            True

        _ ->
            False


isMarkDown : BlockType -> Bool
isMarkDown bt =
    case bt of
        BalancedBlock _ ->
            False

        MarkdownBlock _ ->
            True


numberOfLeadingBlanks : Parser Int
numberOfLeadingBlanks =
    (succeed ()
        |. chompWhile (\c -> c == ' ')
    )
        |> getChompedString
        |> map String.length


{-|

    run leadingString "   xyz"
    --> Ok ("   x") : Result (List (DeadEnd Context Problem)) String

-}
leadingString : Parser String
leadingString =
    getChompedString <|
        succeed ()
            |. chompWhile (\c -> c == ' ')
            |. chompIf (\c -> c /= ' ') (Expecting "expecting non-blank character after run of blanks")



--|> map String.trim


getNumberOfLeadingBlanks : String -> Int
getNumberOfLeadingBlanks str =
    run numberOfLeadingBlanks str
        |> Result.toMaybe
        |> Maybe.withDefault 0


dropLeadingBlanks : String -> String
dropLeadingBlanks str =
    String.dropLeft (getNumberOfLeadingBlanks str) str


level : Line -> Int
level ln =
    run numberOfLeadingBlanks ln
        |> Result.toMaybe
        |> Maybe.map (\l -> l // 3)
        |> Maybe.withDefault 0



-- STRING REPRESENTATIONS --


stringOfBlockType : BlockType -> String
stringOfBlockType bt =
    case bt of
        BalancedBlock bt_ ->
            stringOfBalancedType bt_

        MarkdownBlock mt ->
            stringOfMarkDownType mt


stringOfBalancedType : BalancedType -> String
stringOfBalancedType bt =
    case bt of
        DisplayCode ->
            "DisplayCode"

        Verbatim ->
            "Verbatim"

        DisplayMath ->
            "DisplayMath"


stringOfMarkDownType : MarkdownType -> String
stringOfMarkDownType mt =
    case mt of
        Root ->
            "Root"

        UListItem ->
            "UListItem"

        OListItem _ ->
            "OListItem"

        Heading _ ->
            "Heading"

        HorizontalRule ->
            "HorizontalRule"

        Poetry ->
            "Poetry"

        Quotation ->
            "Quotation"

        Plain ->
            "Plain"

        Image ->
            "Image"

        TableCell ->
            "TableCell"

        TableRow ->
            "TableRow"

        Table ->
            "Table"

        Blank ->
            "Blank"
