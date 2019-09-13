module TestTypes exposing (..)


type alias TestDatum = {
    markdown: String
  , html: String
  , example : Int
  , startLine : Int
  , endLine : Int
  , section : String
  }

type alias SmallTestDatum = {
    markdown: String
  , html: String
  , example : Int
  , section : String
  }

defaultSmallTestDatum =  {
     markdown = "",
     html = "",
     example = 0,
     section = "Empty"
     }