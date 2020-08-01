module LineTypeTests exposing (lineTypeTests)

import Expect
import BlockType exposing(BalancedType(..)
    , BlockType(..)
    , Language(..)
    , Line
    , MarkdownType(..))
import Markdown.Option exposing(MarkdownOption(..), OutputOption(..))
import Test exposing (describe, test)

parseLine : Line -> Maybe BlockType
parseLine line =
     BlockType.get ExtendedMath line |> Tuple.second 



parse =
    BlockType.parse ExtendedMath


lineTypeTests =
    describe "BlockType.parse"
        [ test "code block" <|
                \_ ->
                 "```elm" |> parseLine |>  Expect.equal (Just (BalancedBlock <| DisplayCode ElmLang))

          , test "verbatim block" <|
                \_ ->
                 "````foo" |> parseLine |>  Expect.equal (Just (BalancedBlock Verbatim))

          , test "display math block" <|
                  \_ ->
                       "$$\n" |> parseLine |>  Expect.equal (Just (BalancedBlock DisplayMath))

         , test "image block" <|
                  \_ ->
                       "![yada]" |> parseLine |>  Expect.equal (Just (MarkdownBlock Image))

        , test "unordered list item" <|
                  \_ ->
                       "- One" |> parseLine |>  Expect.equal (Just (MarkdownBlock UListItem))

        , test "ordered list item" <|
                          \_ ->
                               "2. foo" |> parseLine |>  Expect.equal (Just (MarkdownBlock (OListItem 0)))

        , test "quotation" <|
                          \_ ->
                               "> foo" |> parseLine |>  Expect.equal (Just (MarkdownBlock Quotation))

        , test "poetry" <|
                          \_ -> ">> Twas the night ..." |> parseLine |>  Expect.equal (Just (MarkdownBlock Poetry))

        , test "Heading level 1" <|
                          \_ ->
                               "# Introduction" |> parseLine |>  Expect.equal (Just (MarkdownBlock (Heading 1)))

       , test "Heading level 2" <|
                          \_ ->
                               "## Insects" |> parseLine |>  Expect.equal (Just (MarkdownBlock (Heading 2)))

      , test "Thematic break" <|
                          \_ ->
                               "___" |> parseLine |>  Expect.equal (Just (MarkdownBlock HorizontalRule))


        ]
