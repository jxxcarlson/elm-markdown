module MDInline exposing (MDInline(..), parse, string, stringContent)

{-| Module MDInline provides one type and two functions. The
type is MDInline, which is the type of inline Markdown elements
such as italic and bold. The `parse` function parses a string
into an MMinline value, a custom type with parts such as
Paragraph, Line, Italic, Bold, Ordered and Unnumbered lists, etc.

The MDInline.parse function is used in the second of the two
parsing operations. A string is first parsed into a hierarchical
list -- a list of strings paired with an integer level.
The hierarchical list is converted to tree. The parser in This
module is mapped over the nodes of the tree to form a new tree.

The MDInline.string function is used to give a string representation
of the BlockMMTree values.

@docs MDInline, parse, string, stringContent

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


{-| The type for inline Markdown elements
-}
type MDInline
    = OrdinaryText String
    | ItalicText String
    | BoldText String
    | Code String
    | InlineMath String
    | StrikeThroughText String
    | BracketedText String
    | Link String String
    | Image String String
    | Line (List MDInline)
    | Paragraph (List MDInline)
    | Stanza String
    | Error (List MDInline)


{-| String content of MDInline value. Used in ElmWithId.searchAST
-}
stringContent : MDInline -> String
stringContent mmInline =
    case mmInline of
        OrdinaryText str ->
            str

        ItalicText str ->
            str

        BoldText str ->
            str

        Code str ->
            str

        InlineMath str ->
            str

        StrikeThroughText str ->
            str

        BracketedText str ->
            str

        Link a b ->
            b

        Image a b ->
            a

        Line arg ->
            List.map string arg |> String.join " "

        Paragraph arg ->
            List.map string arg |> List.map indentLine |> String.join "\n"

        Stanza arg ->
            arg

        Error arg ->
            List.map string arg |> String.join " "


{-| String representation of an MDInline value
-}
string : MDInline -> String
string mmInline =
    case mmInline of
        OrdinaryText str ->
            "Text [" ++ str ++ "]"

        ItalicText str ->
            "Italic [" ++ str ++ "]"

        BoldText str ->
            "Bold [" ++ str ++ "]"

        Code str ->
            "Code [" ++ str ++ "]"

        InlineMath str ->
            "InlineMath [" ++ str ++ "]"

        StrikeThroughText str ->
            "StrikeThroughText [" ++ str ++ "]"

        BracketedText str ->
            "Bracketed [" ++ str ++ "]"

        Link a b ->
            "Link [" ++ a ++ "](" ++ b ++ ")"

        Image a b ->
            "Image [" ++ a ++ "](" ++ b ++ ")"

        Line arg ->
            "Line [" ++ (List.map string arg |> String.join " ") ++ "]"

        Paragraph arg ->
            "Paragraph [" ++ (List.map string arg |> List.map indentLine |> String.join "\n") ++ "]"

        Stanza arg ->
            "Stanza [\n" ++ arg ++ "\n]"

        Error arg ->
            "Ordinary [" ++ (List.map string arg |> String.join " ") ++ "]"


render : MDInline -> String
render mmInline =
    case mmInline of
        OrdinaryText str ->
            str

        ItalicText str ->
            "<i>" ++ str ++ "</i>"

        BoldText str ->
            "<b>" ++ str ++ "</b>"

        Code str ->
            "<code>" ++ str ++ "</code>"

        InlineMath str ->
            "$" ++ str ++ "$"

        StrikeThroughText str ->
            "<strikethrough>" ++ str ++ "</strikethrough>"

        BracketedText str ->
            "[" ++ str ++ "]"

        Link a b ->
            "Link [" ++ a ++ "](" ++ b ++ ")"

        Image a b ->
            "Image [" ++ a ++ "](" ++ b ++ ")"

        Line arg ->
            List.map render arg |> String.join " "

        Paragraph arg ->
            "<p>\n" ++ (List.map render arg |> List.map indentLine |> String.join "\n") ++ "\n</p>"

        Stanza arg ->
            "<p class=mm.inline>\n" ++ arg ++ "</p>"

        Error arg ->
            "Ordinary [" ++ (List.map string arg |> String.join " ") ++ "]"


indentLine : String -> String
indentLine s =
    "  " ++ s


type alias PrefixedString =
    { prefix : String, text : String }


{-| MDInline parser
-}
parse : Option -> String -> MDInline
parse option str =
    str
        |> String.split "\n"
        |> wrap
        |> List.map (parseLine option)
        |> Paragraph



-- wrap : List String -> List String


wrap strList =
    List.foldl wrapper { currentString = "", lst = [] } strList
        |> (\acc -> acc.currentString :: acc.lst)
        |> List.reverse


type alias WrapAccumulator =
    { currentString : String, lst : List String }


wrapper : String -> WrapAccumulator -> WrapAccumulator
wrapper str acc =
    if acc.currentString == "" then
        { currentString = str, lst = [] }

    else if endsWithPunctuation acc.currentString then
        { currentString = str, lst = acc.currentString :: acc.lst }

    else
        { acc | currentString = acc.currentString ++ " " ++ str }


endsWithPunctuation : String -> Bool
endsWithPunctuation str =
    String.right 1 str == "."


parseLine : Option -> String -> MDInline
parseLine option str =
    run (inlineList option) str
        |> resolveInlineResult


{-| This is the dispatcher for the inline element parsers
for the different flavors of Markdown.
-}
inline : Option -> Parser MDInline
inline option =
    case option of
        Standard ->
            inlineStandard

        Extended ->
            inlineExtended

        ExtendedMath ->
            inlineExtendedMath


{-|

> run inline "$a^5 = 1$"
> Ok (InlineMath ("a^5 = 1"))

> run inline "_abc_"
> Ok (ItalicText "abc")

> run inline "hahaha"
> Ok (OrdinaryText "hahaha")

-}
inlineExtendedMath : Parser MDInline
inlineExtendedMath =
    oneOf [ code, image, link, boldText, italicText, strikeThroughText, inlineMath, ordinaryTextExtendedMath ]


inlineExtended : Parser MDInline
inlineExtended =
    oneOf [ code, image, link, boldText, italicText, strikeThroughText, ordinaryTextExtended ]


inlineStandard : Parser MDInline
inlineStandard =
    oneOf [ code, image, link, boldText, italicText, ordinaryTextStandard ]



-- THE GUTS --


{-|

> run (parseUntil ";;") "a b c;;"
> Ok ("a b c") : Result (List P.DeadEnd) String

-}
parseUntil : String -> Parser String
parseUntil end =
    chompUntil (Token end (Expecting <| "Expecting '" ++ end ++ "' in parseUntil")) |> getChompedString


parseWhile : (Char -> Bool) -> Parser String
parseWhile accepting =
    chompWhile accepting |> getChompedString



--
-- INLINE
--


{-| Characters that have a special meaning in standard markdown

omits the closing square bracket `]` because on its own it is a regular character.
It only gets special meaning when it closes a corresponding opening square bracket

-}
isSpecialCharacter : Char -> Bool
isSpecialCharacter c =
    c == '`' || c == '[' || c == '*' || c == '\n'


ordinaryTextParser : (Char -> Bool) -> Parser MDInline
ordinaryTextParser validStart =
    let
        -- a regular character must not be a ']' and must be a valid starting character
        isRegular c =
            not (c == ']') && validStart c
    in
    chompIf validStart (Expecting "expecting regular character to begin ordinary text line")
        |. chompWhile isRegular
        |> mapChompedString (\s _ -> OrdinaryText s)


{-|

> run ordinaryText "abc"
> Ok (OrdinaryText "abc")

-}
ordinaryTextExtendedMath : Parser MDInline
ordinaryTextExtendedMath =
    let
        validStart c =
            not (c == '~' || c == '$' || isSpecialCharacter c)
    in
    ordinaryTextParser validStart


ordinaryTextExtended : Parser MDInline
ordinaryTextExtended =
    let
        validStart c =
            not (c == '~' || isSpecialCharacter c)
    in
    ordinaryTextParser validStart


ordinaryTextStandard : Parser MDInline
ordinaryTextStandard =
    let
        validStart =
            not << isSpecialCharacter
    in
    ordinaryTextParser validStart


image : Parser MDInline
image =
    (succeed PrefixedString
        |. symbol (Token "![" (Expecting "Expecting '![' to begin image block"))
        |= parseWhile (\c -> c /= ']')
        |. symbol (Token "](" (Expecting "Expecting '](' in image block"))
        |= parseWhile (\c -> c /= ')')
        |. symbol (Token ")" (Expecting "Expecting ')' to end image block"))
        |. chompWhile (\c -> c == '\n')
    )
        -- xxx
        |> map (\ps -> Image ps.prefix ps.text)


{-|

> run italicText "_abc_"
> Ok (ItalicText "abc")

-}
link : Parser MDInline
link =
    (succeed PrefixedString
        |. symbol (Token "[" (Expecting "expecting '[' to begin label"))
        |= parseWhile (\c -> c /= ']')
        |. symbol (Token "]" (Expecting "expecting ']' to end first part of label"))
        |= oneOf [ linkUrl, terminateBracket ]
        |. spaces
    )
        |> map (\ps -> linkOrBracket ps)


linkOrBracket : PrefixedString -> MDInline
linkOrBracket ps =
    case ps.text of
        " " ->
            BracketedText ps.prefix

        _ ->
            Link ps.text ps.prefix


linkUrl : Parser String
linkUrl =
    succeed identity
        |. symbol (Token "(" (Expecting "expecting '(' to begin link url"))
        |= parseWhile (\c -> c /= ')')
        |. symbol (Token ")" (Expecting "expecting ')' to end link url"))
        |. spaces


terminateBracket : Parser String
terminateBracket =
    (succeed ()
     -- |. symbol (Token " " DummyExpectation)
    )
        |> map (\_ -> " ")


strikeThroughText : Parser MDInline
strikeThroughText =
    (succeed ()
        |. symbol (Token "~~" (Expecting "expecting '~~' to begin strikethrough"))
        |. chompWhile (\c -> c /= '~')
        |. symbol (Token "~~" (Expecting "expecting '~~' to end strikethrough"))
        |. spaces
    )
        |> getChompedString
        |> map (String.dropLeft 2)
        |> map (String.replace "~~" "")
        |> map StrikeThroughText


boldText : Parser MDInline
boldText =
    (succeed ()
        |. symbol (Token "**" (Expecting "expecting '**' to begin bold text"))
        |. chompWhile (\c -> c /= '*')
        |. symbol (Token "**" (Expecting "expecting '**' to end bold text"))
        |. spaces
    )
        |> getChompedString
        |> map (String.dropLeft 2)
        |> map (String.replace "**" "")
        |> map BoldText


italicText : Parser MDInline
italicText =
    (succeed ()
        |. symbol (Token "*" (Expecting "Expecting '*' to begin italic text"))
        |. chompWhile (\c -> c /= '*')
        |. symbol (Token "*" (Expecting "Expecting '*' to end italic text"))
        |. spaces
    )
        |> getChompedString
        |> map (String.replace "*" "")
        |> map ItalicText


{-|

> run inlineMath "$a^5 = 3$"
> Ok (InlineMath ("a^5 = 3"))

-}
inlineMath : Parser MDInline
inlineMath =
    (succeed ()
        |. symbol (Token "$" (Expecting "Expecting '$' to begin inline math"))
        |. chompWhile (\c -> c /= '$')
        |. symbol (Token "$" (Expecting "Expecting '$' to end inline math"))
        |. chompWhile (\c -> c == ' ')
    )
        |> getChompedString
        |> map String.trim
        |> map (String.dropLeft 1)
        |> map (String.dropRight 1)
        |> map InlineMath


code : Parser MDInline
code =
    (succeed ()
        |. symbol (Token "`" (Expecting "Expecting '``' to begin inline code"))
        |. chompWhile (\c -> c /= '`')
        |. symbol (Token "`" (Expecting "Expecting '``' to end inline code"))
        |. chompWhile (\c -> c /= ' ')
    )
        |> getChompedString
        |> map String.trim
        |> map (String.dropLeft 1)
        |> map (String.dropRight 1)
        |> map Code


{-|

    > MDInline.parse "*foo* hahaha: hohoho, $a^6 + 2$"
    MMInlineList [ItalicText ("foo "),OrdinaryText ("hahaha: hohoho, "),InlineMath ("a^6 + 2")]

-}
inlineList : Option -> Parser (List MDInline)
inlineList option =
    many (inline option)


resolveInlineResult : Result (List (DeadEnd Context Problem)) (List MDInline) -> MDInline
resolveInlineResult result =
    case result of
        Ok res_ ->
            res_ |> Line

        Err list ->
            decodeInlineError list


decodeInlineError : List (DeadEnd Context Problem) -> MDInline
decodeInlineError errorList =
    let
        errorMessage =
            List.map displayDeadEnd errorList
                |> String.join ";;\n\n"
    in
    OrdinaryText errorMessage


errorString : List (DeadEnd Context Problem) -> String
errorString errorList =
    List.map displayDeadEnd errorList
        |> String.join "\n"


displayDeadEnd : DeadEnd Context Problem -> String
displayDeadEnd deadend =
    case deadend.problem of
        Expecting error ->
            error



---
-- HELPERS
--


joinMMInlineLists : MDInline -> MDInline -> MDInline
joinMMInlineLists a b =
    case ( a, b ) of
        ( Line aList, Line bList ) ->
            Line (aList ++ bList)

        ( _, _ ) ->
            Line []


many : Parser a -> Parser (List a)
many p =
    loop [] (manyHelp p)


manyHelp : Parser a -> List a -> Parser (Step (List a) (List a))
manyHelp p vs =
    oneOf
        [ succeed (\v -> Loop (v :: vs))
            |= p
        , succeed ()
            |> map (\_ -> Done (List.reverse vs))
        ]
