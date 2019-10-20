module Prefix exposing (get, replace)

import Parser.Advanced exposing (..)
import String.Extra


type alias Parser a =
    Parser.Advanced.Parser Context Problem a


type Context
    = Definition String
    | List
    | Record


type Problem
    = Expecting String

get : String -> String
get str =
    case  run parsePrefix str of
        Ok str_ -> str_
        Err _ -> ""

replace : String -> String -> String
replace prefix str =
    String.dropLeft (String.length prefix) str

parsePrefix : Parser String
parsePrefix =
    oneOf [heading, unorderedListItem]



headingBlock1 : Parser String
headingBlock1 =
  getChompedString <|
    (succeed identity
        |. spaces
        |. symbol (Token "#" (Expecting "Expecting '#' to begin heading block"))
        |= parseWhile (\c -> c == '#')
    )

headingBlock2 : Parser String
headingBlock2 =
  getChompedString <|
    (succeed identity
        |. spaces
        |. symbol (Token "##" (Expecting "Expecting '##' to begin level 2 heading block"))
        |= parseWhile (\c -> c == '#')
    )

headingBlock3 : Parser String
headingBlock3 =
  getChompedString <|
    (succeed identity
        |. spaces
        |. symbol (Token "###" (Expecting "Expecting '###' to begin level 3 heading block"))
        |= parseWhile (\c -> c == '#')
    )

heading : Parser String
heading = oneOf [headingBlock1, headingBlock2, headingBlock3]

unorderedListItem : Parser String
unorderedListItem =
  getChompedString <|
    (succeed identity
        |. spaces
        |. symbol (Token "-" (Expecting "Expecting '-' to begin item"))
    )



parseWhile : (Char -> Bool) -> Parser String
parseWhile accepting =
    chompWhile accepting |> getChompedString

