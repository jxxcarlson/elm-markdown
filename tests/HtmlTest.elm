module HtmlTest exposing (..)

import Test exposing (..)
import Test.Helpers as TH
import Test.HtmlData


suite : Test
suite =
    describe "End-to-end testing" [ basic ]


basic =
    describe "Basic HTML test"
        (List.map TH.myHtmlTest Test.HtmlData.working)
