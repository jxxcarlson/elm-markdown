module Test.Helpers exposing (exampleAST, exampleCM, exampleHtml, exampleText, getExample, htmlTest, myHtmlTest, parseStringToHtml, parseStringToString)

import Expect exposing (Expectation)
import Html.String exposing (..)
import Markdown.Option exposing (..)
import ParserTypes
import Test exposing (..)
import Test.Types exposing (..)
import Tree exposing (Tree)


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


exampleAST : List SmallTestDatum -> Int -> Tree ParserTypes.MDBlock
exampleAST testList index =
    ParserTypes.toMDBlockTree ExtendedMath (exampleText testList index)


exampleHtml : List SmallTestDatum -> Int -> String
exampleHtml testList index =
    parseStringToString (exampleText testList index)



-- SHORTHAND --
-- /SHORTHAND --


parseStringToHtml : String -> Html msg
parseStringToHtml str =
    Markdown.String.toHtml ExtendedMath str


parseStringToString : String -> String
parseStringToString str =
    str
        |> parseStringToHtml
        |> Html.String.toString 0


htmlTest : TestDatum -> Test
htmlTest datum =
    let
        label =
            datum.section ++ String.fromInt datum.example
    in
    test label <|
        \_ -> Expect.equal (parseStringToString datum.markdown) datum.html


myHtmlTest : SmallTestDatum -> Test
myHtmlTest datum =
    let
        label =
            datum.section ++ String.fromInt datum.example
    in
    test label <|
        \_ -> Expect.equal (parseStringToString datum.markdown) datum.html
