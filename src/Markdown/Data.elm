module Markdown.Data exposing (MarkdownData, init, render, update)

{-| Markdown.Data exposes types and functions which are used by
UMUI, a universal markup interface. With UMUI, one can
easily switch between markup languages, e.g. the Math+Markdown
in jxxcarlson/elm-markdown and MiniLaTeX, the subset of
LaTeX defined in jxxcarlson/meenylatex.

For an example of how UMUI is used, see the [Github repo](https://github.com/jxxcarlson/umui).
Here is a [demo app](https://jxxcarlson.github.io/app/umui/)

To use UMUI, one must expose one data type, here given
by `MarkdownData`, and three functions which operate on it:
`init`, `update`, and `render`.

@docs MarkdownData, init, render, update

-}

import Html exposing (Html)
import Markdown.Option
import Markdown.Render exposing (MarkdownMsg)


{-| -}
type alias MarkdownData =
    { source : String }


{-| -}
init : Int -> String -> MarkdownData
init version content =
    { source = content }


{-| -}
update : Int -> String -> MarkdownData -> MarkdownData
update version content data =
    { data | source = content }


{-| -}
render : String -> MarkdownData -> List (Html MarkdownMsg)
render _ data =
    Markdown.Render.toHtml_ Markdown.Option.ExtendedMath data.source
