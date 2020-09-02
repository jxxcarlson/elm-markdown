module Markdown.Data exposing (MarkdownData, init, render, update)

import Html exposing (Html)
import Markdown.Option
import Markdown.Render exposing (MarkdownMsg)


type alias MarkdownData =
    { source : String }


init : Int -> String -> MarkdownData
init version content =
    { source = content }


update : Int -> String -> MarkdownData -> MarkdownData
update version content data =
    { data | source = content }


render : String -> MarkdownData -> List (Html MarkdownMsg)
render _ data =
    Markdown.Render.toHtml_ Markdown.Option.ExtendedMath data.source
