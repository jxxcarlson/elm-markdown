module HtmlTestData exposing (..)

type alias TestDatum = {
    markdown: String
  , html: String
  , example : Int
  , startLine : Int
  , endLine : Int
  , section : String
  }


basic : List TestDatum
basic = [

    {
      markdown =  " ### foo\n  ## foo\n   # foo\n"
    , html = "<h3>foo</h3>\n<h2>foo</h2>\n<h1>foo</h1>\n"
    , example = 38
    , startLine = 841
    , endLine = 849
    , section = "ATX headings"
    }

  ]
