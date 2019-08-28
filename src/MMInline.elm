module MMInline exposing (MMInline(..), inlineList, parse, parseLine, render, string, wrap)

import Parser.Advanced exposing (..)
import Option exposing(Option(..))


type alias Parser a =
    Parser.Advanced.Parser Context Problem a


type Context
    = Definition String
    | List
    | Record


type Problem
    = Expecting String


type MMInline
    = OrdinaryText String
    | ItalicText String
    | BoldText String
    | Code String
    | InlineMath String
    | StrikeThroughText String
    | BracketedText String
    | Link String String
    | Image String String
    | Line (List MMInline)
    | Paragraph (List MMInline)
    | Error (List MMInline)

string : MMInline -> String
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

        Error arg ->
            "Ordinary [" ++ (List.map string arg |> String.join " ") ++ "]"


render : MMInline -> String
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

        Error arg ->
            "Ordinary [" ++ (List.map string arg |> String.join " ") ++ "]"


indentLine : String -> String
indentLine s =
    "  " ++ s


type alias PrefixedString =
    { prefix : String, text : String }


parse : Option -> String -> MMInline
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

    else if endsWithPumctuation acc.currentString then
        { currentString = str, lst = acc.currentString :: acc.lst }

    else
        { acc | currentString = acc.currentString ++ " " ++ str }


endsWithPumctuation : String -> Bool
endsWithPumctuation str =
    List.member (String.right 1 str) [ "." ]


parseLine : Option -> String -> MMInline
parseLine option str =
    run (inlineList option) str
        |> resolveInlineResult


inline : Option -> Parser MMInline
inline option =
    case option of
        Standard -> inlineStandard
        Extended -> inlineExtended
        ExtendedMath -> inlineExtendedMath


{-|

> run inline "$a^5 = 1$"
> Ok (InlineMath ("a^5 = 1"))

> run inline "_abc_"
> Ok (ItalicText "abc")

> run inline "hahaha"
> Ok (OrdinaryText "hahaha")

-}
inlineExtendedMath : Parser MMInline
inlineExtendedMath =
    oneOf [ code, image, link, boldText, italicText, strikeThroughText, inlineMath, ordinaryTextExtendedMath ]

inlineExtended : Parser MMInline
inlineExtended =
    oneOf [ code, image, link, boldText, italicText, strikeThroughText, ordinaryTextExtended ]

inlineStandard : Parser MMInline
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


{-|

> run ordinaryText "abc"
> Ok (OrdinaryText "abc")

-}
ordinaryTextExtendedMath : Parser MMInline
ordinaryTextExtendedMath =
    (succeed ()
        |. chompIf (\c -> not <| List.member c [ '`', '~', '[', '$', '*', '\n' ]) (Expecting "expecting regular character to begin ordinary text line")
        |. chompWhile (\c -> not <| List.member c [ '`', '~', '[', ']', '$', '*', '\n' ])
    )
        |> getChompedString
        |> map OrdinaryText

ordinaryTextExtended : Parser MMInline
ordinaryTextExtended =
    (succeed ()
        |. chompIf (\c -> not <| List.member c [ '`', '~', '[', '*', '\n' ]) (Expecting "expecting regular character to begin ordinary text line")
        |. chompWhile (\c -> not <| List.member c [ '`', '~', '[', ']', '*', '\n' ])
    )
        |> getChompedString
        |> map OrdinaryText

ordinaryTextStandard : Parser MMInline
ordinaryTextStandard =
    (succeed ()
        |. chompIf (\c -> not <| List.member c [ '`', '[',  '*', '\n' ]) (Expecting "expecting regular character to begin ordinary text line")
        |. chompWhile (\c -> not <| List.member c [ '`', '[', ']', '*', '\n' ])
    )
        |> getChompedString
        |> map OrdinaryText

image : Parser MMInline
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
link : Parser MMInline
link =
    (succeed PrefixedString
        |. symbol (Token "[" (Expecting "expecting '[' to begin link"))
        |= parseWhile (\c -> c /= ']')
        |. symbol (Token "]" (Expecting "expecting ']' to end first part of link"))
        |= oneOf [ linkLabel, terminateBracket ]
        |. spaces
    )
        |> map (\ps -> linkOrBracket ps)


linkOrBracket : PrefixedString -> MMInline
linkOrBracket ps =
    case ps.text of
        " " ->
            BracketedText ps.prefix

        _ ->
            Link ps.text ps.prefix


linkLabel : Parser String
linkLabel =
    succeed identity
        |. symbol (Token "(" (Expecting "expecting '(' to begin link label"))
        |= parseWhile (\c -> c /= ')')
        |. symbol (Token ")" (Expecting "expecting ')' to end link label"))
        |. spaces


terminateBracket : Parser String
terminateBracket =
    (succeed ()
     -- |. symbol (Token " " DummyExpectation)
    )
        |> map (\_ -> " ")


strikeThroughText : Parser MMInline
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


boldText : Parser MMInline
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


italicText : Parser MMInline
italicText =
    (succeed ()
        |. symbol (Token "*" (Expecting "Expecting '*' to begin italic text"))
        |. chompWhile (\c -> c /= '*')
        |. symbol (Token "*" (Expecting "Expecting '*' to end italic text"))
        |. spaces
    )
        |> getChompedString
        |> map (String.replace "*" "")
        |> map String.trim
        |> map ItalicText


{-|

> run inlineMath "$a^5 = 3$"
> Ok (InlineMath ("a^5 = 3"))

-}
inlineMath : Parser MMInline
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


code : Parser MMInline
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

    > MMInline.parse "*foo* hahaha: hohoho, $a^6 + 2$"
    MMInlineList [ItalicText ("foo "),OrdinaryText ("hahaha: hohoho, "),InlineMath ("a^6 + 2")]

-}
inlineList : Option -> Parser (List MMInline)
inlineList option =
    many (inline option)


resolveInlineResult : Result (List (DeadEnd Context Problem)) (List MMInline) -> MMInline
resolveInlineResult result =
    case result of
        Ok res_ ->
            res_ |> Line

        Err list ->
            decodeInlineError list


decodeInlineError : List (DeadEnd Context Problem) -> MMInline
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


joinMMInlineLists : MMInline -> MMInline -> MMInline
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
