module HtmlTest exposing (..)


import Expect exposing (Expectation)
import Test exposing (..)
import TestHelpers as TH
import HtmlTestData exposing(..)


suite : Test
suite =
    describe "End-to-end testing" [ basic ]


basic =
    describe "Basic HTML test"
        (List.map TH.myHtmlTest HtmlTestData.empty)
