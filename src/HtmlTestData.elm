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


empty : List SmallTestDatum
empty = [

           {
             markdown = "",
             html = "<div></div>",
             example = 0,
             section = "Empty"
             }
       ]

basic : List SmallTestDatum
basic = [

    {
      markdown = "",
      html = "",
      example = 0,
      section = "Empty"
      }

   , {
        markdown = "plain text",
        html = "",
        example = 1,
        section = "Text"
      }

  , {
        markdown = "This **is** a **test** they **say**",
        html = "",
        example = 2,
        section = "Text+inline"
      }

  , {
        markdown = "This **is** a test\nAnd so *is* this",
        html = "",
        example = 3,
        section = "Text+inline"
      }


   , {
        markdown = "$a^2 + b^2 + c^2$",
        html = "",
        example = 4,
        section = "Inline math"
      }

  , {
        markdown = "$$a^2 + b^2 + c^2$$",
        html = "",
        example =5,
        section = "Inline math"
      }

  , {
        markdown = ">> One\nTwo\nThree",
        html = "",
        example =6,
        section = "Inline math"
      }

  , {
     markdown = "# foo\n",
     html = "<h3>foo</h3>\n",
     example = 7,
     section = "ATX headings"
     }
  ]


