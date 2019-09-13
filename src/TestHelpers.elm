module TestHelpers exposing (..)

import Expect exposing (Expectation)
import Test exposing (..)
import TestTypes exposing(..)
import Markdown.Option exposing(..)
import Markdown.String
import Html.String exposing(..)
import Parse
import Tree exposing(Tree)

getExample :  List SmallTestDatum -> Int -> SmallTestDatum
getExample  testList index =
   testList
      |> List.drop (index - 1)
      |> List.head
      |> Maybe.withDefault defaultSmallTestDatum

exampleText :  List SmallTestDatum -> Int -> String
exampleText  testList index =
   getExample  testList index |> .markdown


exampleAST : List SmallTestDatum -> Int -> Tree Parse.MDBlock
exampleAST testList index =
    Parse.toMDBlockTree ExtendedMath (exampleText  testList index)

exampleHtml : List SmallTestDatum -> Int -> String
exampleHtml testList index =
    parseStringToString (exampleText  testList index)

-- SHORTHAND --



-- /SHORTHAND --

parseStringToHtml : String -> Html msg
parseStringToHtml str =
    Markdown.String.toHtml ExtendedMath str

parseStringToString : String -> String
parseStringToString str =
    str
      |> parseStringToHtml
      |> (Html.String.toString 0)


htmlTest : TestDatum -> Test
htmlTest datum  =
    let
        label = datum.section ++ String.fromInt datum.example
    in
     test label <|
       \_ -> Expect.equal (parseStringToString datum.markdown) datum.html


myHtmlTest : SmallTestDatum -> Test
myHtmlTest datum  =
    let
        label = datum.section ++ String.fromInt datum.example
    in
     test label <|
       \_ -> Expect.equal (parseStringToString datum.markdown) datum.html

