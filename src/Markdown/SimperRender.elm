module Markdown.SimperRender exposing (toHtml, toHtmlWithTOC, toHtmlWithExternaTOC)

{-| Render Markdown text to Html using one of the
options defined in the `Option` module.

@docs toHtml, toHtmlWithTOC, toHtmlWithExternaTOC

-}

import Html exposing (Html)
import Markdown.Option exposing (Option(..))
import Markdown.Parse
import Markdown.Render exposing (MarkdownMsg(..))


{-| Parse the input and render it to Html, e.g.,

toHtml ExtendedMath "Pythagoras said: $a^2 + b^2 c^2$."

-}
toHtml : Option -> String -> Html MarkdownMsg
toHtml option str =
    Markdown.Render.toHtml ( 0, 0 ) 0 option str


{-| Like `toHtml`, but constructs a table of contents.
-}
toHtmlWithTOC : Option -> String -> Html MarkdownMsg
toHtmlWithTOC option str =
    str
        |> Markdown.Parse.toMDBlockTree 0 option
        |> Markdown.Render.renderHtmlWithTOC ( 0, 0 ) "Contents"


{-| Like `toHtmlWithTOC`, but constructs returns a record,
one field of which is the rendered document,
anther of which is the rendered table of contents.
-}
toHtmlWithExternaTOC : Option -> String -> { title : Html MarkdownMsg, toc : Html MarkdownMsg, document : Html MarkdownMsg }
toHtmlWithExternaTOC option str =
    str
        |> Markdown.Parse.toMDBlockTree 0 option
        |> Markdown.Render.renderHtmlWithExternalTOC ( 0, 0 ) "Contents"
