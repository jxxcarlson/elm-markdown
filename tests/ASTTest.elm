module ASTTest exposing (suite)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Test exposing (..)
import BlockType exposing(..)
import Parser.Advanced exposing(run)
import Markdown.Option exposing(..)
import Parse
import ASTTestData exposing(..)


suite : Test
suite =
    describe "AST parsing" [ basic ]


parseString str =
    Parse.toMDBlockTree ExtendedMath str |> Parse.stringOfMDBlockTree

astTest : (String, String, String) -> Test
astTest input  =
    let
        (label, str, astSTring) = input
    in
     test label <|
       \_ -> Expect.equal (parseString str) astSTring

basicTestData : List (String, String, String)
basicTestData =
    [
       ("emptyDoc",  emptyDoc, emptyDocAST)
      ,("inlineBasic", inlineBasic,inlineBasicAST)
      ,("blockBasic", blockBasic, blockBasicAST)
    ]


basic =
    describe "Basic AST parsing"
        (List.map astTest basicTestData)
