module Markdown.Elm exposing (toHtml, toHtmlWithTOC, toHtmlWithExternaTOC)

{-| Render Markdown text to Html using one of the
options defined in the `Option` module.

@docs toHtml, toHtmlWithTOC, toHtmlWithExternaTOC

-}

import Html exposing (Html)
import Markdown.ElmWithId
import Markdown.Option exposing (Option(..))
import Markdown.Parse


{-| Parse the input and render it to Html, e.g.,

toHtml ExtendedMath "Pythagoras said: $a^2 + b^2 c^2$."

-}
toHtml : Option -> String -> Html msg
toHtml option str =
    Markdown.ElmWithId.toHtml 0 option str


{-| Like `toHtml`, but constructs a table of contents.
-}
toHtmlWithTOC : Option -> String -> Html msg
toHtmlWithTOC option str =
    str
        |> Markdown.Parse.toMDBlockTree 0 option
        |> Markdown.ElmWithId.renderHtmlWithTOC "Contents"


{-| Like `toHtmlWithTOC`, but constructs returns a record,
one field of which is the rendered document,
anther of which is the rendered table of contents.
-}
toHtmlWithExternaTOC : Option -> String -> { title : Html msg, toc : Html msg, document : Html msg }
toHtmlWithExternaTOC option str =
    str
        |> Markdown.Parse.toMDBlockTree 0 option
        |> Markdown.ElmWithId.renderHtmlWithExternaTOC "Contents"
