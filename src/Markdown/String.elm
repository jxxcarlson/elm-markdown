module Markdown.String exposing (..)


{-| Render Markdown text to Html using one of the
options defined in the `Option` module.

@docs toHtml

-}

import Parse exposing (BlockContent(..), MDBlock(..))
import BlockType exposing (BalancedType(..), BlockType(..), MarkdownType(..))
import Html.String as Html exposing (Html)
import Html.String.Attributes as HA exposing (style)
import Json.Encode
import MDInline exposing (MDInline(..))
import Markdown.Option exposing (Option(..))
import Tree exposing (Tree)


{-| Render output of the parser to Html, e.g.,

toHtml ExtendedMath "Pythagoras said: $a^2 + b^2 c^2$."

-}
toHtml : Option -> String -> Html msg
toHtml option str =
  let
      ast : Tree MDBlock
      ast = Parse.toMDBlockTree option str

      toc : Html msg
      toc = tableOfContentsAsHtml ast

      bodyAST = ast |> Tree.children
      html = bodyAST |> List.map mmBlockTreeToHtml
      title = List.head html |> Maybe.withDefault (Html.div [] [])
      body = List.drop 1 html

      separator = Html.hr [HA.style "padding-bottom" "2px", HA.style "background-color" "#aaa", HA.style "border-width" "0"] []
      spacing =  Html.div [HA.style "padding-bottom" "40px"] []


  in
    case Maybe.map (Parse.isHeading << Tree.label) (List.head bodyAST) of
        Just True ->
           Html.div [] (title::separator::toc::separator::spacing::body)
        _ ->
           Html.div [] (separator::toc::separator::spacing::title::body)


mmBlockTreeToHtml : Tree MDBlock -> Html msg
mmBlockTreeToHtml tree =
    if Tree.children tree == [] then
        renderBlock (Tree.label tree)

    else
        case Tree.label tree of
            MDBlock (MarkdownBlock TableRow) _ _ ->
                Html.tr [ HA.class "mm-table-row" ]
                    (List.map mmBlockTreeToHtml (Tree.children tree))

            MDBlock (MarkdownBlock Table) _ _ ->
                Html.table [ HA.class "mm-table" ]
                    (List.map mmBlockTreeToHtml (Tree.children tree))

            _ ->
                Html.div []
                    [ renderBlock (Tree.label tree)
                    , Html.div [] (List.map mmBlockTreeToHtml (Tree.children tree))
                    ]


tableOfContentsAsBlocks : Tree MDBlock -> List MDBlock
tableOfContentsAsBlocks blockTree =
    blockTree
      |> Tree.flatten
      |> List.filter Parse.isHeading

tableOfContentsAsHtml : Tree MDBlock -> Html msg
tableOfContentsAsHtml blockTree =
    blockTree
      |> tableOfContentsAsBlocks
      |> renderTableOfContents

renderTableOfContents  : List MDBlock -> Html msg
renderTableOfContents blockList =
   let
       contentHeading = MDBlock (MarkdownBlock (Heading 1)) 1 (M (Paragraph [Line [OrdinaryText ("Contents")]]))
   in
     blockList
       |> List.drop 1
       |> (\x -> contentHeading :: x)
       |> List.map renderHeadingForTOC
       |> (\x -> Html.div tocStyle x)


tocStyle = [HA.style "font-size" "x-small"
  , HA.style "margin-left" "15px"
  , HA.style "color" "#555"
  , HA.id "toc"
 ]
renderHeadingForTOC : MDBlock -> Html msg
renderHeadingForTOC heading =
    case heading of
        MDBlock (MarkdownBlock (Heading k)) level blockContent ->
                    renderTOCHeading k blockContent
        _ ->  Html.span [] []

renderBlock : MDBlock -> Html msg
renderBlock block =
    case block of
        MDBlock (MarkdownBlock Root) _ _ ->
            Html.div [] []

        MDBlock (MarkdownBlock Plain) level blockContent ->
            renderBlockContent blockContent

        MDBlock (MarkdownBlock Blank) level blockContent ->
            renderBlockContent blockContent

        MDBlock (MarkdownBlock (Heading k)) level blockContent ->
            renderHeading k blockContent

        MDBlock (MarkdownBlock Quotation) level blockContent ->
            renderQuotation blockContent

        MDBlock (MarkdownBlock Poetry) level blockContent ->
            renderPoetry blockContent

        MDBlock (MarkdownBlock UListItem) level blockContent ->
            renderUListItem level blockContent

        MDBlock (MarkdownBlock (OListItem index)) level blockContent ->
            renderOListItem index level blockContent

        MDBlock (MarkdownBlock HorizontalRule) level blockContent ->
            Html.hr [ HA.class "mm-thematic-break" ] []

        MDBlock (MarkdownBlock BlockType.Image) level blockContent ->
            renderBlockContent blockContent

        MDBlock (BalancedBlock DisplayMath) level blockContent ->
            case blockContent of
                T str ->
                    displayMathText str

                _ ->
                    displayMathText ""

        MDBlock (BalancedBlock Verbatim) level blockContent ->
            case blockContent of
                T str ->
                    Html.pre [] [ Html.text str ]

                _ ->
                    displayMathText ""

        MDBlock (BalancedBlock DisplayCode) level blockContent ->
            case blockContent of
                T str ->
                    Html.pre [] [ Html.code [] [ Html.text str ] ]

                _ ->
                    displayMathText ""

        MDBlock (MarkdownBlock TableCell) level blockContent ->
            Html.td [ HA.class "mm-table-cell" ] [ renderBlockContent blockContent ]

        MDBlock (MarkdownBlock TableRow) level blockContent ->
            Html.tr [ HA.class "mm-table-row" ] [ renderBlockContent blockContent ]

        MDBlock (MarkdownBlock Table) level blockContent ->
            Html.table [ HA.class "mm-table" ] [ renderBlockContent blockContent ]


unWrapParagraph : MDInline -> List MDInline
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


prependToParagraph : MDInline -> BlockContent -> BlockContent
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
  let
      name = nameFromBlockContent blockContent
  in
    case k of
        1 ->
           Html.h1 [HA.id name] [ renderBlockContent blockContent ]

        2 ->
           Html.h2 [HA.id name] [ renderBlockContent blockContent ]

        3 ->
            Html.h3 [HA.id name] [ renderBlockContent blockContent ]

        4 ->
            Html.h4 [HA.id name] [ renderBlockContent blockContent ]

        _ ->
            Html.h5 [HA.id name] [ renderBlockContent blockContent ]

renderTOCHeading : Int -> BlockContent -> Html msg
renderTOCHeading k blockContent =
  let
      name = "#" ++ (nameFromBlockContent blockContent)
  in
    case k of
        1 ->
           Html.h1 [HA.style "font-size" "13pt"] [ renderBlockContent blockContent ]

        2 ->
           Html.a [HA.href name, HA.class "toc-level-0", HA.style "display" "block"] [ renderBlockContent blockContent ]

        3 ->
            Html.a [HA.href name, HA.class "toc-level-1", HA.style "display" "block"] [ renderBlockContent blockContent ]

        4 ->
            Html.a [HA.href name, HA.class "toc-level-2", HA.style "display" "block"] [ renderBlockContent blockContent ]

        _ ->
            Html.a [HA.href name, HA.class "toc-level-3", HA.style "display" "block"] [ renderBlockContent blockContent ]


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

nameFromBlockContent : BlockContent -> String
nameFromBlockContent blockContent =
    case blockContent of
        M (Paragraph [Line [OrdinaryText (str)]]) -> String.trim str
        _ -> ""


renderToHtmlMsg : MDInline -> Html msg
renderToHtmlMsg mmInline =
    case mmInline of
        OrdinaryText str ->
            Html.span [HA.class "ordinary"] [ Html.text str ]

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
            Html.span [HA.class "bracketed"] [ Html.text <| "[" ++ str ++ "]" ]

        Link url label ->
            Html.a [ HA.href url ] [ Html.text (label ++ " ")]

        MDInline.Image label url ->
            Html.img [ HA.src url, HA.class "mm-image" ] [ Html.text label ]

        Line arg ->
            let
                joined = joinLine arg
             in
              if List.length joined == 1 then
                List.head joined |> Maybe.withDefault (Html.span [] [Html.text ""])
              else
                 Html.span [HA.class "line"] joined

        Paragraph arg ->
            Html.p [ HA.class "mm-paragraph" ] (List.map renderToHtmlMsg arg)

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


joinLine : List MDInline -> List (Html msg)
joinLine items =
    let
        folder : MDInline -> (List String, List (Html msg)) -> (List String, List (Html msg))
        folder item (accString, accElement) =
            case item of
                OrdinaryText str ->
                   (str::accString, accElement)

                _ ->
                    if accString /= [] then
                       let
                          content = String.join "" accString
                          span = Html.span [HA.class "innerJoin"] [Html.text content]
                       in
                        ([], (renderToHtmlMsg item) :: span :: accElement)
                     else
                        ([], (renderToHtmlMsg item) :: accElement)

        flush : (List String, List (Html msg)) -> List (Html msg)
        flush (accString, accElement) =
            if accString /= [] then
               let
                 content = String.join "" accString
                 span = Html.span [] [Html.text content]
               in
                 span :: accElement
               else
                 accElement

    in
    List.foldl folder ([], []) items
      |> flush
      |> List.reverse


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
        [ HA.class "mm-math", HA.property "content" (Json.Encode.string content) ]
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
