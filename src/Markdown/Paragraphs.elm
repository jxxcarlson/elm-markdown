module Markdown.Paragraphs exposing (get)

import Parser.Advanced exposing (..)


type alias PParser a =
    Parser.Advanced.Parser Context Problem a


type Context
    = CArg String
    | List


type Problem
    = ChompUntilTwoNewLines
    | ExpectingItem


{-|

        > paragraphs "a\n\n\nb\n\nc\n\n\n"
        ["a","b","c"] : List String

-}
get : String -> List String
get str =
    case Parser.Advanced.run (many paragraph) str of
        Ok list ->
            list

        Err _ ->
            []


paragraph : PParser String
paragraph =
    succeed identity
        |= getChompedString (chompUntil (Token "\n\n" ChompUntilTwoNewLines))
        |. spaces


{-|

    > run parseMany"$$ a == b $$\n\nAnd also:\n\n\\begin{foo}bar\\end{foo}  "
    Ok [Paragraph ("$$ a == b $$"),Paragraph ("And also:"),OuterBlock "foo" "bar"]

-}
parseMany : PParser (List String)
parseMany =
    many paragraph


many : PParser a -> PParser (List a)
many p =
    loop [] (manyHelp p)


manyHelp : PParser a -> List a -> PParser (Step (List a) (List a))
manyHelp p vs =
    oneOf
        [ succeed (\v -> Loop (v :: vs))
            |= p

        --|. spaces
        , succeed ()
            |> map (\_ -> Done (List.reverse vs))
        ]
