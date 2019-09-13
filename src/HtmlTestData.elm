module HtmlTestData exposing (..)

import Parse
import Markdown.Option exposing(..)
import Tree exposing (Tree)
import TestHelpers

import TestTypes exposing(..)

commonMark : List TestDatum
commonMark = [

    {
      markdown =  " ### foo\n  ## foo\n   # foo\n"
    , html = "<h3>foo</h3>\n<h2>foo</h2>\n<h1>foo</h1>\n"
    , example = 38
    , startLine = 841
    , endLine = 849
    , section = "ATX headings"
    }

  ]


basic : List SmallTestDatum
basic = [

    {
      markdown = "",
      html = "",
      example = 1,
      section = "Empty"
      }


  , {
     markdown = "# foo\n",
     html = "<h3>foo</h3>\n",
     example = 2,
     section = "ATX headings"
     }
  ]


