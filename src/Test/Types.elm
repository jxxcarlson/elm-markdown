module Test.Types exposing (TestDatum, SmallTestDatum, defaultSmallTestDatum)


type alias TestDatum =
    { markdown : String
    , html : String
    , example : Int
    , startLine : Int
    , endLine : Int
    , section : String
    }


type alias SmallTestDatum =
    { markdown : String
    , html : String
    , example : Int
    , section : String
    }


defaultSmallTestDatum : SmallTestDatum
defaultSmallTestDatum =
    { markdown = ""
    , html = ""
    , example = 0
    , section = "Empty"
    }
