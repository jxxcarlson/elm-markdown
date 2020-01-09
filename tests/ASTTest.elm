module ASTTest exposing (suite)

import Expect exposing (Expectation)
import Markdown.Option exposing (..)
import ParserTypes
import Test exposing (..)
import Test.ASTData exposing (..)


suite : Test
suite =
    describe "AST parsing" [ basic ]


parseString str =
    ParserTypes.toMDBlockTree ExtendedMath str |> ParserTypes.stringOfMDBlockTree


astTest : ( String, String, String ) -> Test
astTest input =
    let
        ( label, str, astSTring ) =
            input
    in
    test label <|
        \_ -> Expect.equal (parseString str) astSTring


basicTestData : List ( String, String, String )
basicTestData =
    [ ( "emptyDoc", emptyDoc, emptyDocAST )
    , ( "inlineBasic", inlineBasic, inlineBasicAST )
    , ( "blockBasic", blockBasic, blockBasicAST )
    ]


basic =
    describe "Basic AST parsing"
        (List.map astTest basicTestData)
