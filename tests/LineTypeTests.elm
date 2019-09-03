module LineTypeTests exposing (lineTypeTests)

import BlockType exposing (..)
import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Option
import Parser.Advanced exposing (run)
import Test exposing (..)


parse =
    BlockType.parse Option.ExtendedMath


lineTypeTests =
    describe "BlockType.parse"
        [ test "code block" <|
            \_ ->
                "```foo" |> run parse |> Expect.equal (Ok (BalancedBlock DisplayCode))
        , test "verbatim block" <|
            \_ ->
                "````foo" |> run parse |> Expect.equal (Ok (BalancedBlock Verbatim))
        , test "display math block" <|
            \_ ->
                "$$\n" |> run parse |> Expect.equal (Ok (BalancedBlock DisplayMath))
        , test "image block" <|
            \_ ->
                "![yada]" |> run parse |> Expect.equal (Ok (MarkdownBlock Image))
        , test "unordered list item" <|
            \_ ->
                "- One" |> run parse |> Expect.equal (Ok (MarkdownBlock UListItem))
        , test "ordered list item" <|
            \_ ->
                "2. foo" |> run parse |> Expect.equal (Ok (MarkdownBlock (OListItem 0)))
        , test "quotation" <|
            \_ ->
                "> foo" |> run parse |> Expect.equal (Ok (MarkdownBlock Quotation))
        , test "poetry" <|
            \_ -> ">> Twas the night ..." |> run parse |> Expect.equal (Ok (MarkdownBlock Poetry))
        , test "Heading level 1" <|
            \_ ->
                "# Introduction" |> run parse |> Expect.equal (Ok (MarkdownBlock (Heading 1)))
        , test "Heading level 2" <|
            \_ ->
                "## Insects" |> run parse |> Expect.equal (Ok (MarkdownBlock (Heading 2)))
        , test "Thematic break" <|
            \_ ->
                "___" |> run parse |> Expect.equal (Ok (MarkdownBlock HorizontalRule))
        ]
