module Experiment exposing (isDollar, isRightBracket, isTilde)


isTilde : Char -> Bool
isTilde c =
    case c of
        '~' ->
            True

        _ ->
            False


isDollar : Char -> Bool
isDollar c =
    case c of
        '$' ->
            True

        _ ->
            False


isRightBracket : Char -> Bool
isRightBracket c =
    case c of
        ']' ->
            True

        _ ->
            False
