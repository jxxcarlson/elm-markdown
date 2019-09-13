module HtmlTest exposing (..)

import Expect exposing (Expectation)
import Test exposing (..)
import Markdown.Option exposing(..)
import Markdown.String
import Html.String exposing(..)
import HtmlTestData exposing(..)


suite : Test
suite =
    describe "End-to-end testing" [ basic ]


--parseString str =
--    Parse.toMDBlockTree ExtendedMath str |> Parse.stringOfMDBlockTree
--
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




basic =
    describe "Basic HTML test"
        (List.map htmlTest HtmlTestData.basic)
