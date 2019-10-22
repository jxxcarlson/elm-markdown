module Markdown.ElmWithId exposing (parse, renderHtml, renderHtmlWithTOC, renderHtmlWithExternaTOC, searchAST, numberOfMathElements)

{-| Use this module if you need to edit math + markdown _and_
require optimizations for speed and a smooth editing experience.

The
function `parse` yields a syntax tree (AST: abstract syntax tree). The functions `renderHtml`,
`renderHtmlWithTOC`, and `renderHtmlWithExternaTOC` render the
AST in various forms, as described below.


## Optimizations

The idea of the optimizations used in `app-demo-optimized`
(see the repo)
is to parse the document text when the
document is first opened. The resulting parse
tree is stored as
`model.lastAst`. Each block in the AST carries
a label `(version, id): (Int, Int)`, where
the `id` is unique to each block.
Each time the text changes, a new AST is computed
with an incremented version number. The
function `Diff.mergeWith equals` is applied to
the old and new ASTs
to compute an updated AST. The updated AST
is identical to the new AST except for the id's.
The id of a node in the updated AST is
the same as in the old AST if and only if the type, level,
and content of the node has not changed.
This information is used to signal MathJax not
to re-render mathematical text that is unchanged.

To see where these optimizations are applied,
look for the places in `app-demo-optimized/Main.elm`
where functions in the modules
`ParseWithId` and `Markdown.ElmWithId` are called.

@docs parse, renderHtml, renderHtmlWithTOC, renderHtmlWithExternaTOC, searchAST, numberOfMathElements

-}

import BlockType exposing (BalancedType(..), BlockType(..), MarkdownType(..))
import Html exposing (Html)
import Html.Attributes as HA exposing (style)
import Html.Keyed as Keyed
import Json.Encode
import MDInline exposing (MDInline(..))
import Markdown.Option exposing (Option(..))
import ParseWithId
    exposing
        ( BlockContent(..)
        , Id
        , MDBlock(..)
        , MDBlockWithId(..)
        , idOfBlock
        , project
        , projectedStringOfBlockContent
        , stringOfId
        )
import Prefix
import Tree exposing (Tree)


typeOfMDBlock : MDBlock -> BlockType
typeOfMDBlock (MDBlock bt _ _) =
    bt


isHeading : MDBlock -> Bool
isHeading block =
    case typeOfMDBlock block of
        MarkdownBlock (Heading _) ->
            True

        _ ->
            False


typeOfMDBlockWithId : MDBlockWithId -> BlockType
typeOfMDBlockWithId (MDBlockWithId _ bt _ _) =
    bt


isHeadingWithId : MDBlockWithId -> Bool
isHeadingWithId block =
    case typeOfMDBlockWithId block of
        MarkdownBlock (Heading _) ->
            True

        _ ->
            False


isMathWithId : MDBlockWithId -> Bool
isMathWithId block =
    case typeOfMDBlockWithId block of
        BalancedBlock DisplayMath ->
            True

        _ ->
            False


id0 =
    ( -1, -1 )


{-| Parse the input and render it to Html, e.g.,

toHtml ExtendedMath "Pythagoras said: $a^2 + b^2 c^2$."

-}
toHtml : Int -> Option -> String -> Html msg
toHtml version option str =
    str
        |> parse version option
        |> renderHtml


{-| Given a version number, an option defining
a flavor of Markdown, and a text string,
return a parse tree.
-}
parse : Int -> Option -> String -> Tree MDBlockWithId
parse version option str =
    ParseWithId.toMDBlockTree version option str


{-| Search the AST for nodes whose label contains the
given string, returning the Id of the first node found,
if any.
-}
searchAST : String -> Tree MDBlockWithId -> Maybe Id
searchAST str ast =
    ast
        |> Tree.flatten
        |> List.filter (\block -> String.contains (Prefix.truncate str) (stringContentFromBlock block))
        |> List.head
        |> Maybe.map ParseWithId.idOfBlock



--- XXX


stringContentFromBlock : MDBlockWithId -> String
stringContentFromBlock (MDBlockWithId _ _ _ c) =
    case c of
        T str ->
            str

        M mdInline ->
            MDInline.stringContent mdInline |> Prefix.truncate


masterId =
    HA.id "__RENDERED_TEXT__"


{-| Render a parse tree to Html.
-}
renderHtml : Tree MDBlockWithId -> Html msg
renderHtml blockTreeWithId =
    blockTreeWithId
        |> Tree.children
        |> List.map mmBlockTreeToHtml
        |> (\x -> Html.div [ masterId ] x)


toHtmlWithTOC : Int -> Option -> String -> String -> Html msg
toHtmlWithTOC version option heading str =
    let
        ast : Tree MDBlockWithId
        ast =
            ParseWithId.toMDBlockTree version option str

        toc : Html msg
        toc =
            tableOfContentsAsHtml heading (Tree.map project ast)

        bodyAST : List (Tree MDBlockWithId)
        bodyAST =
            ast |> Tree.children

        headOfBodyAST =
            List.head bodyAST |> Maybe.map (Tree.map project)

        html =
            bodyAST |> List.map mmBlockTreeToHtml

        title =
            List.head html |> Maybe.withDefault (Html.div [] [])

        body =
            List.drop 1 html

        separator =
            Html.hr [ HA.style "padding-bottom" "2px", HA.style "background-color" "#aaa", HA.style "border-width" "0" ] []

        spacing =
            Html.div [ HA.style "padding-bottom" "40px" ] []
    in
    case Maybe.map (isHeading << Tree.label) headOfBodyAST of
        Just True ->
            Html.div [ masterId ] (title :: separator :: toc :: separator :: spacing :: body)

        _ ->
            Html.div [ masterId ] (separator :: toc :: separator :: spacing :: title :: body)


{-| Like `renderHtml`, but constructs a table of contents.
-}
renderHtmlWithTOC : String -> Tree MDBlockWithId -> Html msg
renderHtmlWithTOC heading ast =
    let
        toc : Html msg
        toc =
            tableOfContentsAsHtml heading (Tree.map project ast)

        bodyAST : List (Tree MDBlockWithId)
        bodyAST =
            ast |> Tree.children

        headOfBodyAST =
            List.head bodyAST |> Maybe.map (Tree.map project)

        html =
            bodyAST |> List.map mmBlockTreeToHtml

        title =
            List.head html |> Maybe.withDefault (Html.div [] [])

        body =
            List.drop 1 html

        separator =
            Html.hr [ HA.style "padding-bottom" "2px", HA.style "background-color" "#aaa", HA.style "border-width" "0" ] []

        spacing =
            Html.div [ HA.style "padding-bottom" "40px" ] []
    in
    case Maybe.map (isHeading << Tree.label) headOfBodyAST of
        Just True ->
            Html.div [ masterId ] (title :: separator :: toc :: separator :: spacing :: body)

        _ ->
            Html.div [ masterId ] (separator :: toc :: separator :: spacing :: title :: body)


{-| Like `renderHtmlWithTOC`, but transforms a parser three into a record,
with fields for the document title, the table of contents, and the body
of the document.
-}
renderHtmlWithExternaTOC : String -> Tree MDBlockWithId -> { title : Html msg, toc : Html msg, document : Html msg }
renderHtmlWithExternaTOC heading ast =
    let
        toc : Html msg
        toc =
            tableOfContentsAsHtml heading (Tree.map project ast)

        bodyAST =
            ast |> Tree.children

        html =
            bodyAST |> List.map mmBlockTreeToHtml

        title =
            List.head html |> Maybe.withDefault (Html.div [] [])

        body =
            List.drop 1 html

        separator =
            Html.hr [ HA.style "padding-bottom" "2px", HA.style "background-color" "#aaa", HA.style "border-width" "0" ] []

        spacing =
            Html.div [ HA.style "padding-bottom" "40px" ] []
    in
    { title = Html.div [] [ title ]
    , toc = Html.div [] [ toc ]
    , document = Html.div [ HA.id "__RENDERED_TEXT__" ] body
    }



-- NOTE XXX


mmBlockTreeToHtml : Tree MDBlockWithId -> Html msg
mmBlockTreeToHtml tree =
    if Tree.children tree == [] then
        let
            (MDBlockWithId id bt lev content) =
                Tree.label tree
        in
        case bt of
            BalancedBlock DisplayMath ->
                Keyed.node "spanXXX"
                    []
                    [ ( stringOfId id, renderBlock id (MDBlock bt lev content) ) ]

            _ ->
                Html.span [] [ renderBlock id (MDBlock bt lev content) ]

    else
        case Tree.label tree of
            MDBlockWithId _ (MarkdownBlock TableRow) _ _ ->
                Html.tr [ HA.class "mm-table-row" ]
                    (List.map mmBlockTreeToHtml (Tree.children tree))

            MDBlockWithId id (MarkdownBlock Table) _ _ ->
                Keyed.node "table"
                    [ HA.class "mm-table", HA.id (stringOfId id) ]
                    [ ( stringOfId id, Html.div [] (List.map mmBlockTreeToHtml (Tree.children tree)) ) ]

            MDBlockWithId id (MarkdownBlock Plain) _ _ ->
                Html.div [ HA.class "mm-plain", HA.id (stringOfId id) ] (List.map mmBlockTreeToHtml (Tree.children tree))

            MDBlockWithId id (MarkdownBlock _) _ _ ->
                Keyed.node "div"
                    []
                    [ ( stringOfId id
                      , Html.div [ HA.id (stringOfId id) ]
                            [ renderBlock id (project (Tree.label tree))
                            , Html.div [ idAttr id ] (List.map mmBlockTreeToHtml (Tree.children tree))
                            ]
                      )
                    ]

            MDBlockWithId id (BalancedBlock DisplayMath) level content ->
                Keyed.node "div" [ HA.id (stringOfId id) ] [ ( stringOfId id, displayMathText (projectedStringOfBlockContent content) ) ]

            MDBlockWithId id (BalancedBlock Verbatim) _ _ ->
                Html.pre [ HA.id (stringOfId id) ] [ Html.text "OUF: Verbatim!" ]

            MDBlockWithId id (BalancedBlock DisplayCode) _ _ ->
                Html.div [ HA.id (stringOfId id) ] [ Html.text "OUF: Code!" ]


tableOfContentsAsBlocks : Tree MDBlock -> List MDBlock
tableOfContentsAsBlocks blockTree =
    blockTree
        |> Tree.flatten
        |> List.filter isHeading


{-| Count the number of display math element blocks in the parse tree
-}
numberOfMathElements : Tree MDBlockWithId -> Int
numberOfMathElements blockTree =
    blockTree
        |> Tree.flatten
        |> List.filter isMathWithId
        |> List.length


tableOfContentsAsHtml : String -> Tree MDBlock -> Html msg
tableOfContentsAsHtml heading blockTree =
    blockTree
        |> tableOfContentsAsBlocks
        |> renderTableOfContents heading


renderTableOfContents : String -> List MDBlock -> Html msg
renderTableOfContents heading blockList =
    let
        contentHeading =
            MDBlock (MarkdownBlock (Heading 1)) 1 (M (Paragraph [ Line [ OrdinaryText heading ] ]))
    in
    blockList
        |> List.drop 1
        |> (\x -> contentHeading :: x)
        |> List.map renderHeadingForTOC
        |> (\x -> Html.div tocStyle x)


tocStyle =
    [ HA.style "font-size" "x-small"
    , HA.style "margin-left" "15px"
    , HA.style "color" "#555"
    , HA.id "toc"
    ]


renderHeadingForTOC : MDBlock -> Html msg
renderHeadingForTOC heading =
    case heading of
        MDBlock (MarkdownBlock (Heading k)) level blockContent ->
            renderTOCHeading id0 k blockContent

        _ ->
            Html.span [] []


renderBlockWithId : MDBlockWithId -> Html msg
renderBlockWithId (MDBlockWithId id bt lev content) =
    Keyed.node "div" [] [ ( stringOfId id, renderBlock id (MDBlock bt lev content) ) ]


idAttr : Id -> Html.Attribute msg
idAttr id =
    HA.id (stringOfId id)


renderBlock : Id -> MDBlock -> Html msg
renderBlock id block =
    case block of
        MDBlock (MarkdownBlock Root) _ _ ->
            Html.div [ idAttr id ] []

        MDBlock (MarkdownBlock Plain) level blockContent ->
            renderBlockContent id blockContent

        MDBlock (MarkdownBlock Blank) level blockContent ->
            renderBlockContent id blockContent

        MDBlock (MarkdownBlock (Heading k)) level blockContent ->
            renderHeading id k blockContent

        MDBlock (MarkdownBlock Quotation) level blockContent ->
            renderQuotation id blockContent

        MDBlock (MarkdownBlock Poetry) level blockContent ->
            renderPoetry id blockContent

        MDBlock (MarkdownBlock UListItem) level blockContent ->
            renderUListItem id level blockContent

        MDBlock (MarkdownBlock (OListItem index)) level blockContent ->
            renderOListItem id index level blockContent

        MDBlock (MarkdownBlock HorizontalRule) level blockContent ->
            Html.hr [ idAttr id, HA.class "mm-thematic-break" ] []

        MDBlock (MarkdownBlock BlockType.Image) level blockContent ->
            renderBlockContent id blockContent

        MDBlock (BalancedBlock DisplayMath) level blockContent ->
            case blockContent of
                T str ->
                    Html.div [ idAttr id ] [ displayMathText str ]

                _ ->
                    displayMathText ""

        MDBlock (BalancedBlock Verbatim) level blockContent ->
            case blockContent of
                T str ->
                    Html.pre [ idAttr id ] [ Html.text str ]

                _ ->
                    displayMathText ""

        MDBlock (BalancedBlock DisplayCode) level blockContent ->
            case blockContent of
                T str ->
                    Html.pre [ idAttr id ] [ Html.code [] [ Html.text str ] ]

                _ ->
                    displayMathText ""

        MDBlock (MarkdownBlock TableCell) level blockContent ->
            Html.td [ HA.class "mm-table-cell" ] [ renderBlockContent id blockContent ]

        MDBlock (MarkdownBlock TableRow) level blockContent ->
            Html.tr [ HA.class "mm-table-row" ] [ renderBlockContent id blockContent ]

        MDBlock (MarkdownBlock Table) level blockContent ->
            Html.table [ HA.class "mm-table" ] [ renderBlockContent id blockContent ]


unWrapParagraph : MDInline -> List MDInline
unWrapParagraph mmInline =
    case mmInline of
        Paragraph element ->
            element

        _ ->
            []


renderUListItem : Id -> Int -> BlockContent -> Html msg
renderUListItem id k blockContent =
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
        , idAttr id
        ]
        [ renderBlockContent id <| prependToParagraph (OrdinaryText label) blockContent ]


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


renderOListItem : Id -> Int -> Int -> BlockContent -> Html msg
renderOListItem id index k blockContent =
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
        , idAttr id
        ]
        [ renderBlockContent id (prependToParagraph (OrdinaryText label) blockContent) ]


renderHeading : Id -> Int -> BlockContent -> Html msg
renderHeading id k blockContent =
    let
        name =
            nameFromBlockContent blockContent
    in
    case k of
        1 ->
            Html.h1 [ HA.id name ] [ renderBlockContent id blockContent ]

        2 ->
            Html.h2 [ HA.id name ] [ renderBlockContent id blockContent ]

        3 ->
            Html.h3 [ HA.id name ] [ renderBlockContent id blockContent ]

        4 ->
            Html.h4 [ HA.id name ] [ renderBlockContent id blockContent ]

        _ ->
            Html.h5 [ HA.id name ] [ renderBlockContent id blockContent ]


renderTOCHeading : Id -> Int -> BlockContent -> Html msg
renderTOCHeading id k blockContent =
    let
        name =
            "#" ++ nameFromBlockContent blockContent
    in
    case k of
        1 ->
            Html.a [ HA.href name, HA.style "font-size" "13pt" ] [ renderBlockContent id blockContent ]

        2 ->
            Html.a [ HA.href name, HA.class "toc-level-0", HA.style "display" "block" ] [ renderBlockContent id blockContent ]

        3 ->
            Html.a [ HA.href name, HA.class "toc-level-1", HA.style "display" "block" ] [ renderBlockContent id blockContent ]

        4 ->
            Html.a [ HA.href name, HA.class "toc-level-2", HA.style "display" "block" ] [ renderBlockContent id blockContent ]

        _ ->
            Html.a [ HA.href name, HA.class "toc-level-3", HA.style "display" "block" ] [ renderBlockContent id blockContent ]


renderQuotation : Id -> BlockContent -> Html msg
renderQuotation id blockContent =
    Html.div
        [ HA.class "mm-quotation" ]
        [ renderBlockContent id blockContent ]


renderPoetry : Id -> BlockContent -> Html msg
renderPoetry id blockContent =
    Html.div
        [ HA.class "mm-poetry" ]
        [ renderBlockContent id blockContent ]


renderBlockContent : Id -> BlockContent -> Html msg
renderBlockContent id blockContent =
    case blockContent of
        M mmInline ->
            renderToHtmlMsg id mmInline

        T str ->
            Html.span [ idAttr id ] [ Html.text str ]


nameFromBlockContent : BlockContent -> String
nameFromBlockContent blockContent =
    case blockContent of
        M (Paragraph [ Line [ OrdinaryText str ] ]) ->
            String.trim str

        _ ->
            ""


renderToHtmlMsg : Id -> MDInline -> Html msg
renderToHtmlMsg id mmInline =
    case mmInline of
        OrdinaryText str ->
            Html.span [ idAttr id, HA.class "ordinary" ] [ Html.text str ]

        ItalicText str ->
            Html.em [] [ Html.text str ]

        BoldText str ->
            Html.strong [] [ Html.text str ]

        Code str ->
            Html.code [ idAttr id ] [ Html.text str ]

        InlineMath str ->
            inlineMathText id str

        StrikeThroughText str ->
            strikethrough str

        BracketedText str ->
            Html.span [ HA.class "bracketed" ] [ Html.text <| "[" ++ str ++ "]" ]

        Link url label ->
            Html.a [ HA.href url ] [ Html.text (label ++ " ") ]

        MDInline.Image label_ url ->
            let
                labelParts =
                    List.take 2 (String.split "::" label_)

                ( label, class ) =
                    case ( List.head labelParts, List.head (List.drop 1 labelParts) ) of
                        ( Just label__, Just class__ ) ->
                            ( label__, "mm-image-" ++ class__ )

                        ( Just label__, Nothing ) ->
                            ( label__, "mm-image" )

                        ( _, _ ) ->
                            ( "image", "mm-image" )
            in
            Html.img [ idAttr id, HA.src url, HA.class class ] [ Html.text label ]

        Line arg ->
            let
                joined =
                    joinLine id arg
            in
            if List.length joined == 1 then
                List.head joined |> Maybe.withDefault (Html.span [] [ Html.text "" ])

            else
                Html.span [ HA.class "line" ] joined

        Paragraph arg ->
            Html.p [ idAttr id, HA.class "mm-paragraph" ] (List.map (renderToHtmlMsg id) arg)

        Stanza arg ->
            renderStanza id arg

        Error arg ->
            Html.p [] (List.map (renderToHtmlMsg id) arg)


renderStanza : Id -> String -> Html msg
renderStanza id arg =
    let
        lines =
            String.split "\n" arg

        poetryLine line =
            Html.div [] [ Html.text line ]
    in
    Html.div [ idAttr id, HA.class "mm-poetry" ] (List.map poetryLine lines)


joinLine : Id -> List MDInline -> List (Html msg)
joinLine id items =
    let
        folder : MDInline -> ( List String, List (Html msg) ) -> ( List String, List (Html msg) )
        folder item ( accString, accElement ) =
            case item of
                OrdinaryText str ->
                    ( str :: accString, accElement )

                _ ->
                    if accString /= [] then
                        let
                            content =
                                String.join "" accString

                            span =
                                Html.span [ HA.class "innerJoin" ] [ Html.text content ]
                        in
                        ( [], renderToHtmlMsg id item :: span :: accElement )

                    else
                        ( [], renderToHtmlMsg id item :: accElement )

        flush : ( List String, List (Html msg) ) -> List (Html msg)
        flush ( accString, accElement ) =
            if accString /= [] then
                let
                    content =
                        String.join "" accString

                    span =
                        Html.span [] [ Html.text content ]
                in
                span :: accElement

            else
                accElement
    in
    List.foldl folder ( [], [] ) items
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


inlineMathText : Id -> String -> Html msg
inlineMathText id str =
    Html.span [ idAttr id ] [ mathText <| "$ " ++ String.trim str ++ " $ " ]


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
