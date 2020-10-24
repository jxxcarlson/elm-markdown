module Markdown.LaTeX exposing (export)

{-| Use `Markdown.LaTeX.export someText` to convert Markdown text to [MiniLaTeX](https://demo.minilatex.app/). Imperfect but serviceable.
The app in `./Demos/simple` illustrates the use of this function.

[Live demo](https://jxxcarlson.github.io/app/mathMarkdownSimple/).

@docs export

-}

import BlockType exposing (BalancedType(..), BlockType(..), Language(..), Level, MarkdownType(..))
import Dict
import HtmlEntity
import MDInline exposing (MDInline(..))
import Markdown.LaTeXPostProcess as LaTeXPostProcess
import Markdown.Option exposing (MarkdownOption(..), OutputOption(..))
import Markdown.Parse as Parse
    exposing
        ( BlockContent(..)
        , Id
        , MDBlock(..)
        , MDBlockWithId(..)
        , projectedStringOfBlockContent
        )
import Tree exposing (Tree)


{-| -}
export : String -> String
export str =
    str
        |> Parse.toMDBlockTree 0 ExtendedMath
        |> fromAST ( 0, 0 )


{-| Render to String from a parse tree
-}
fromAST : Id -> Tree MDBlockWithId -> String
fromAST selectedId blockTreeWithId =
    blockTreeWithId
        |> Tree.children
        |> List.map (mmBlockTreeToLaTeX selectedId)
        |> String.join "\n\n"
        |> LaTeXPostProcess.fixItemLists


{-| Use `String` so that user clicks on elements in the rendered text can be detected.
-}
type MarkdownMsg
    = IDClicked String


mmBlockTreeToLaTeX : Id -> Tree MDBlockWithId -> String
mmBlockTreeToLaTeX selectedId tree =
    if Tree.children tree == [] then
        -- Render leaf blocks
        let
            (MDBlockWithId id bt lev content) =
                Tree.label tree
        in
        case bt of
            BalancedBlock DisplayMath ->
                renderBlock selectedId id (MDBlock bt lev content)

            _ ->
                renderBlock selectedId id (MDBlock bt lev content)

    else
        case Tree.label tree of
            MDBlockWithId id (MarkdownBlock TableRow) _ _ ->
                List.map (mmBlockTreeToLaTeX selectedId) (Tree.children tree) |> String.join " & "

            MDBlockWithId id (MarkdownBlock Table) _ _ ->
                env "tabular"
                    ((List.map (mmBlockTreeToLaTeX selectedId) (Tree.children tree) |> String.join " \\\\\n")
                        |> String.trim
                    )

            MDBlockWithId id (MarkdownBlock Plain) _ _ ->
                List.map (mmBlockTreeToLaTeX selectedId) (Tree.children tree) |> String.join "\n"

            MDBlockWithId id (MarkdownBlock _) _ _ ->
                List.map (mmBlockTreeToLaTeX selectedId) (Tree.children tree) |> String.join "\n"

            MDBlockWithId id (BalancedBlock DisplayMath) level content ->
                displayMathText (projectedStringOfBlockContent content)

            MDBlockWithId id (BalancedBlock Verbatim) _ _ ->
                "OUF: Verbatim!"

            MDBlockWithId id (BalancedBlock (DisplayCode lang)) _ _ ->
                "OUF: Code!"


renderBlock : Id -> Id -> MDBlock -> String
renderBlock selectedId id block =
    case block of
        MDBlock (MarkdownBlock Root) _ _ ->
            "ROOT"

        MDBlock (MarkdownBlock Plain) level blockContent ->
            renderBlockContent selectedId id level blockContent

        MDBlock (MarkdownBlock Blank) level blockContent ->
            renderBlockContent selectedId id level blockContent

        MDBlock (MarkdownBlock (Heading k)) level blockContent ->
            renderHeading selectedId id k level blockContent

        MDBlock (MarkdownBlock Quotation) level blockContent ->
            renderQuotation selectedId id level blockContent

        MDBlock (MarkdownBlock Poetry) level blockContent ->
            renderPoetry selectedId id level blockContent

        MDBlock (MarkdownBlock UListItem) level blockContent ->
            renderUListItem selectedId id level blockContent

        MDBlock (MarkdownBlock (OListItem index)) level blockContent ->
            renderOListItem selectedId id index level blockContent

        MDBlock (MarkdownBlock HorizontalRule) level blockContent ->
            "\\hrule"

        MDBlock (MarkdownBlock BlockType.Image) level blockContent ->
            renderBlockContent selectedId id level blockContent

        MDBlock (BalancedBlock DisplayMath) level blockContent ->
            case blockContent of
                T str ->
                    displayMathText str

                _ ->
                    displayMathText ""

        MDBlock (BalancedBlock Verbatim) level blockContent ->
            case blockContent of
                T str ->
                    env "verbatim" str

                _ ->
                    displayMathText ""

        MDBlock (BalancedBlock (DisplayCode lang)) level blockContent ->
            case blockContent of
                T str ->
                    let
                        langStr = BlockType.stringOfLanguage lang ++ "\n"
                        str_ = String.replace langStr "" str
                    in
                    env "verbatim" str_

                _ ->
                    displayMathText ""

        MDBlock (MarkdownBlock TableCell) level blockContent ->
            " " ++ renderBlockContent selectedId id level blockContent

        MDBlock (MarkdownBlock TableRow) level blockContent ->
            renderBlockContent selectedId id level blockContent

        MDBlock (MarkdownBlock Table) level blockContent ->
            renderBlockContent selectedId id level blockContent

        MDBlock (MarkdownBlock (ExtensionBlock info)) level blockContent ->
            case String.trim info of
                "svg" ->
                    "SVG: not implemented"

                "invisible" ->
                    ""

                _ ->
                    renderAsVerbatim info selectedId id level blockContent


renderAsVerbatim : String -> Id -> Id -> Int -> BlockContent -> String
renderAsVerbatim info selectedId id level blockContent =
    case blockContent of
        M (OrdinaryText str) ->
            env "verbatim" str

        _ ->
            ""


renderOListItem : Id -> Id -> Int -> Level -> BlockContent -> String
renderOListItem selectedId id index level blockContent =
    "\\item " ++ renderBlockContent selectedId id level blockContent


renderUListItem : Id -> Id -> Level -> BlockContent -> String
renderUListItem selectedId id level blockContent =
    "\\item " ++ renderBlockContent selectedId id level blockContent


renderHeading : Id -> Id -> Int -> Level -> BlockContent -> String
renderHeading selectedId id k level blockContent =
    let
        name =
            nameFromBlockContent blockContent
    in
    case k of
        1 ->
            macro "section" (renderBlockContent selectedId id level blockContent)

        2 ->
            macro "subsection" (renderBlockContent selectedId id level blockContent)

        3 ->
            macro "subsubsection" (renderBlockContent selectedId id level blockContent)

        4 ->
            macro "subsubsubsection" (renderBlockContent selectedId id level blockContent)

        _ ->
            macro "subheading" (renderBlockContent selectedId id level blockContent)


renderTOCHeading : Id -> Id -> Int -> Level -> BlockContent -> String
renderTOCHeading selectedId id k level blockContent =
    let
        name =
            nameFromBlockContent blockContent
    in
    "TOC heading: " ++ name


renderQuotation : Id -> Id -> Level -> BlockContent -> String
renderQuotation selectedId id level blockContent =
    env "quotation" (renderBlockContent selectedId id level blockContent)


renderPoetry : Id -> Id -> Level -> BlockContent -> String
renderPoetry selectedId id level blockContent =
    env "poetry" (renderBlockContent selectedId id level blockContent)


renderBlockContent : Id -> Id -> Level -> BlockContent -> String
renderBlockContent selectedId id level blockContent =
    case blockContent of
        M mmInline ->
            renderToLaTeX selectedId id level mmInline

        T str ->
            str


nameFromBlockContent : BlockContent -> String
nameFromBlockContent blockContent =
    case blockContent of
        M (Paragraph [ Line [ OrdinaryText str ] ]) ->
            String.trim str

        _ ->
            ""


renderToLaTeX : Id -> Id -> Level -> MDInline -> String
renderToLaTeX selectedId id level mmInline =
    case mmInline of
        OrdinaryText str ->
            str

        ItalicText str ->
            macro "italic" str

        BoldText str ->
            macro "strong" str

        Code str ->
            macro "code" str

        InlineMath str ->
            inlineMathText id str

        StrikeThroughText str ->
            macro "strike" str

        HtmlEntity str ->
            "htmlEntity:" ++ str

        HtmlEntities list ->
            -- (List.map htmlEntity list |> String.join "") ++ " "
            "htmlEntity: not implemented"

        BracketedText str ->
            "[" ++ str ++ "]"

        Link url label ->
            macro2 "href" url label

        ExtensionInline op arg ->
            macro op arg

        MDInline.Image label_ url ->
            macro3 "image" url label_ ""

        Line arg ->
            let
                joined =
                    joinLine selectedId id level arg
                        |> String.join "\n"
            in
            joined

        Paragraph arg ->
            let
                mapper : MDInline -> String
                mapper =
                    \m -> renderToLaTeX selectedId id level m
            in
            List.map mapper arg
                |> String.join "\n"

        Stanza arg ->
            renderStanza id arg

        Error arg ->
            "Error"


renderStanza : Id -> String -> String
renderStanza id arg =
    env "poetry" arg


joinLine : Id -> Id -> Level -> List MDInline -> List String
joinLine selectedId id level items =
    let
        folder : MDInline -> ( List String, List String ) -> ( List String, List String )
        folder item ( accString, accElement ) =
            case item of
                OrdinaryText str ->
                    case isPunctuation (String.left 1 str) of
                        True ->
                            ( str :: accString, accElement )

                        False ->
                            ( (" " ++ str) :: accString, accElement )

                _ ->
                    if accString /= [] then
                        let
                            content =
                                String.join "" accString

                            span =
                                content
                        in
                        ( [], renderToLaTeX selectedId id level item :: span :: accElement )

                    else
                        ( [], renderToLaTeX selectedId id level item :: accElement )

        flush : ( List String, List String ) -> List String
        flush ( accString, accElement ) =
            if accString /= [] then
                let
                    content =
                        String.join "" accString

                    span =
                        content
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


strikethrough : String -> String
strikethrough str =
    macro "strike" str



-- HELPERS


htmlEntity : String -> String
htmlEntity str =
    Maybe.withDefault ("(" ++ str ++ ")") <| Dict.get str HtmlEntity.dict


env : String -> String -> String
env name body =
    "\\begin{" ++ name ++ "}\n" ++ body ++ "\n\\end{" ++ name ++ "}"


macro : String -> String -> String
macro name arg =
    "\\" ++ name ++ "{" ++ arg ++ "}"


macro2 : String -> String -> String -> String
macro2 name arg1 arg2 =
    "\\" ++ name ++ "{" ++ arg1 ++ "}" ++ "{" ++ arg2 ++ "}"


macro3 : String -> String -> String -> String -> String
macro3 name arg1 arg2 arg3 =
    "\\" ++ name ++ "{" ++ arg1 ++ "}" ++ "{" ++ arg2 ++ "}" ++ "{" ++ arg3 ++ "}"



-- MATH --


inlineMathText : Id -> String -> String
inlineMathText id str =
    "$ " ++ String.trim str ++ " $ "


displayMathText : String -> String
displayMathText str =
    let
        str2 =
            String.trim str
    in
    "$$\n" ++ str2 ++ "\n$$"
