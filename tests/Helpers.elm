module Helpers exposing (exampleAST, exampleCM, exampleHtml, exampleText, getExample, htmlTest, myHtmlTest, parseStringToHtml, parseStringToString)

import Html.String
import Html exposing (Html)
import Markdown.Option exposing (MarkdownOption(..), OutputOption(..))
import Markdown.Parse exposing (MDBlock, toMDBlockTree)
import Markdown.Render
import ParserTypes
import Tree exposing (Tree)
import Test exposing (Test, test)
import Expect


getExample : List SmallTestDatum -> Int -> SmallTestDatum
getExample testList index =
    testList
        |> List.drop index
        |> List.head
        |> Maybe.withDefault defaultSmallTestDatum


exampleText : List SmallTestDatum -> Int -> String
exampleText testList index =
    getExample testList index |> .markdown


exampleCM : List SmallTestDatum -> Int -> String
exampleCM testList index =
    getExample testList index |> .html


exampleAST : List SmallTestDatum -> Int -> Tree MDBlock
exampleAST testList index =
    toMDBlockTree ExtendedMath (exampleText testList index)



-- SHORTHAND --
-- /SHORTHAND --
myHtmlTest : SmallTestDatum -> Test
myHtmlTest datum =
    let
        label =
            datum.section ++ String.fromInt datum.example
    in
    test label <|
        \_ -> Expect.equal (parseStringToString datum.markdown) datum.html


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
