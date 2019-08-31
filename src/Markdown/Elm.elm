module Markdown.Elm exposing (toHtml)

{-| Render Markdown text to Html using one of the
options defined in the `Option` module.

@docs toHtml

-}

import Block exposing (BlockContent(..), MMBlock(..))
import BlockType exposing (BalancedType(..), BlockType(..), MarkdownType(..))
import Html exposing (Html)
import Html.Attributes as HA exposing (style)
import Json.Encode
import MMInline exposing (MMInline(..))
import Option exposing (Option(..))
import Tree exposing (Tree)


{-| Render output of the parser to Html, e.g.,

toHtml ExtendedMath "Pythagoras said: $a^2 + b^2 c^2$."

-}
toHtml : Option -> String -> Html msg
toHtml option str =
    Block.parseToMMBlockTree option str |> mmBlockTreeToHtml3


mmBlockTreeToHtml : Tree MMBlock -> Html msg
mmBlockTreeToHtml tree =
    Tree.foldl (\block elements -> renderBlock block :: elements) [] tree
        |> (\x -> Html.div [] (List.reverse x))


mmBlockTreeToHtml2 : Tree MMBlock -> Html msg
mmBlockTreeToHtml2 tree =
    if Tree.children tree == [] then
        Html.span [] [ renderBlock (Tree.label tree) ]

    else
        Html.div []
            [ renderBlock (Tree.label tree)
            , Html.div [] (List.map mmBlockTreeToHtml2 (Tree.children tree))
            ]


mmBlockTreeToHtml3 : Tree MMBlock -> Html msg
mmBlockTreeToHtml3 tree =
    if Tree.children tree == [] then
        Html.span [ HA.class "no-children" ] [ renderBlock (Tree.label tree) ]

    else
        case Tree.label tree of
            MMBlock (MarkdownBlock TableRow) _ _ ->
                Html.tr [ HA.class "mm-table-row" ]
                    (List.map mmBlockTreeToHtml3 (Tree.children tree))

            MMBlock (MarkdownBlock Table) _ _ ->
                Html.tr [ HA.class "mm-table" ]
                    (List.map mmBlockTreeToHtml3 (Tree.children tree))

            _ ->
                Html.div []
                    [ renderBlock (Tree.label tree)
                    , Html.div [] (List.map mmBlockTreeToHtml3 (Tree.children tree))
                    ]


renderBlock : MMBlock -> Html msg
renderBlock block =
    case block of
        MMBlock (MarkdownBlock Root) _ _ ->
            Html.div [] []

        MMBlock (MarkdownBlock Plain) level blockContent ->
            renderBlockContent blockContent

        MMBlock (MarkdownBlock Blank) level blockContent ->
            renderBlockContent blockContent

        MMBlock (MarkdownBlock (Heading k)) level blockContent ->
            renderHeading k blockContent

        MMBlock (MarkdownBlock Quotation) level blockContent ->
            renderQuotation blockContent

        MMBlock (MarkdownBlock Poetry) level blockContent ->
            renderPoetry blockContent

        MMBlock (MarkdownBlock UListItem) level blockContent ->
            renderUListItem level blockContent

        MMBlock (MarkdownBlock (OListItem index)) level blockContent ->
            renderOListItem index level blockContent

        MMBlock (MarkdownBlock HorizontalRule) level blockContent ->
            Html.hr [ HA.class "mm-thematic-break" ] []

        MMBlock (MarkdownBlock BlockType.Image) level blockContent ->
            renderBlockContent blockContent

        MMBlock (BalancedBlock DisplayMath) level blockContent ->
            case blockContent of
                T str ->
                    displayMathText str

                _ ->
                    displayMathText ""

        MMBlock (BalancedBlock Verbatim) level blockContent ->
            case blockContent of
                T str ->
                    Html.pre [] [ Html.text str ]

                _ ->
                    displayMathText ""

        MMBlock (BalancedBlock DisplayCode) level blockContent ->
            case blockContent of
                T str ->
                    Html.pre [] [ Html.code [] [ Html.text str ] ]

                _ ->
                    displayMathText ""

        MMBlock (MarkdownBlock TableCell) level blockContent ->
            Html.td [ HA.class "mm-table-cell" ] [ renderBlockContent blockContent ]

        MMBlock (MarkdownBlock TableRow) level blockContent ->
            Html.tr [ HA.class "mm-table-row" ] [ renderBlockContent blockContent ]

        MMBlock (MarkdownBlock Table) level blockContent ->
            Html.table [ HA.class "mm-table" ] [ renderBlockContent blockContent ]


unWrapParagraph : MMInline -> List MMInline
unWrapParagraph mmInline =
    case mmInline of
        Paragraph element ->
            element

        _ ->
            []


renderUListItem : Int -> BlockContent -> Html msg
renderUListItem k blockContent =
    let
        margin =
            String.fromInt (18 * k)
                ++ "px"

        label =
            case k of
                1 ->
                    "• "

                2 ->
                    "◊ "

                3 ->
                    "† "

                4 ->
                    "‡ "

                _ ->
                    "N. "
    in
    Html.li
        [ style "margin-left" margin
        , HA.class "mm-olist-item"
        ]
        [ renderBlockContent <| prependToParagraph (OrdinaryText label) blockContent ]


prependToParagraph : MMInline -> BlockContent -> BlockContent
prependToParagraph head tail =
    case tail of
        T _ ->
            tail

        M mmInLine ->
            case mmInLine of
                Paragraph lst ->
                    M (Paragraph (head :: lst))

                _ ->
                    tail


renderOListItem : Int -> Int -> BlockContent -> Html msg
renderOListItem index k blockContent =
    let
        margin =
            String.fromInt (18 * k)
                ++ "px"

        label =
            case k of
                1 ->
                    String.fromInt index ++ ". "

                2 ->
                    alphabet index ++ ". "

                3 ->
                    romanNumeral index ++ ". "

                4 ->
                    String.fromInt index ++ ". "

                _ ->
                    "N. "
    in
    Html.li
        [ style "margin-left" margin
        , HA.class "mm-olist-item"
        ]
        [ renderBlockContent (prependToParagraph (OrdinaryText label) blockContent) ]


renderHeading : Int -> BlockContent -> Html msg
renderHeading k blockContent =
    case k of
        1 ->
            Html.h1 [] [ renderBlockContent blockContent ]

        2 ->
            Html.h2 [] [ renderBlockContent blockContent ]

        3 ->
            Html.h3 [] [ renderBlockContent blockContent ]

        4 ->
            Html.h4 [] [ renderBlockContent blockContent ]

        _ ->
            Html.h5 [] [ renderBlockContent blockContent ]


renderQuotation : BlockContent -> Html msg
renderQuotation blockContent =
    Html.div
        [ HA.class "mm-quotation" ]
        [ renderBlockContent blockContent ]


renderPoetry : BlockContent -> Html msg
renderPoetry blockContent =
    Html.div
        [ HA.class "mm-poetry" ]
        [ renderBlockContent blockContent ]


renderBlockContent : BlockContent -> Html msg
renderBlockContent blockContent =
    case blockContent of
        M mmInline ->
            renderToHtmlMsg mmInline

        T str ->
            Html.div [] [ Html.text str ]


renderToHtmlMsg : MMInline -> Html msg
renderToHtmlMsg mmInline =
    case mmInline of
        OrdinaryText str ->
            Html.span [] [ Html.text str ]

        ItalicText str ->
            Html.em [] [ Html.text str ]

        BoldText str ->
            Html.strong [] [ Html.text str ]

        Code str ->
            Html.code [] [ Html.text str ]

        InlineMath str ->
            inlineMathText str

        StrikeThroughText str ->
            strikethrough str

        BracketedText str ->
            Html.span [] [ Html.text <| "[" ++ str ++ "]" ]

        Link url label ->
            Html.a [ HA.href url ] [ Html.text label ]

        MMInline.Image label url ->
            Html.img [ HA.src url, HA.class "mm-image" ] [ Html.text label ]

        Line arg ->
            Html.span [] (joinLine arg)

        Paragraph arg ->
            Html.p [] (List.map renderToHtmlMsg arg)

        Stanza arg ->
            renderStanza arg

        Error arg ->
            Html.p [] (List.map renderToHtmlMsg arg)


renderStanza : String -> Html msg
renderStanza arg =
    let
        lines =
            String.split "\n" arg

        poetryLine line =
            Html.div [] [ Html.text line ]
    in
    Html.div [ HA.class "mm-poetry" ] (List.map poetryLine lines)


joinLine : List MMInline -> List (Html msg)
joinLine items =
    let
        folder : MMInline -> List (Html msg) -> List (Html msg)
        folder item acc =
            case item of
                OrdinaryText str ->
                    if isPunctuation (String.left 1 str) then
                        renderToHtmlMsg item :: acc

                    else
                        Html.span [ style "margin-left" "5px" ] [ renderToHtmlMsg item ] :: acc

                _ ->
                    Html.span [ style "margin-left" "5px" ] [ renderToHtmlMsg item ] :: acc
    in
    List.foldl folder [] items |> List.reverse


isPunctuation : String -> Bool
isPunctuation str =
    List.member str [ ".", ",", ";", ":", "?", "!" ]


strikethrough : String -> Html msg
strikethrough str =
    Html.span [ HA.class "mm-strike-through" ] [ Html.text str ]



-- MATH --


mathText : String -> Html msg
mathText content =
    Html.node "math-text"
        [ HA.class "mm-display-math", HA.property "content" (Json.Encode.string content) ]
        []


inlineMathText : String -> Html msg
inlineMathText str =
    mathText <| "$ " ++ String.trim str ++ " $ "


displayMathText : String -> Html msg
displayMathText str =
    let
        str2 =
            String.trim str
    in
    mathText <| "$$\n" ++ str2 ++ "\n$$"



-- HELPERS --


alphabet : Int -> String
alphabet k =
    let
        alpha =
            [ "a"
            , "b"
            , "c"
            , "d"
            , "e"
            , "f"
            , "g"
            , "h"
            , "i"
            , "j"
            , "k"
            , "l"
            , "m"
            , "n"
            , "o"
            , "p"
            , "q"
            , "r"
            , "s"
            , "t"
            , "u"
            , "v"
            , "w"
            , "x"
            , "y"
            , "z"
            ]
    in
    List.drop (k - 1) alpha |> List.head |> Maybe.withDefault "zz"


romanNumeral : Int -> String
romanNumeral k =
    let
        alpha =
            [ "i"
            , "ii"
            , "iii"
            , "iv"
            , "v"
            , "vi"
            , "vii"
            , "viii"
            , "ix"
            , "x"
            , "xi"
            , "xii"
            , "xiii"
            , "xiv"
            , "xv"
            , "xvi"
            , "xvii"
            , "xviii"
            , "xix"
            , "xx"
            , "xxi"
            , "xxii"
            , "xxiii"
            , "xiv"
            , "xv"
            , "xvi"
            ]
    in
    List.drop (k - 1) alpha |> List.head |> Maybe.withDefault "zz"
