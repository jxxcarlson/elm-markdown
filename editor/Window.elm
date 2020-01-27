module Window exposing
    ( Window
    , getOffset
    , identity
    , identity_
    , scroll
    , scrollToIncludeCursor
    , select
    , shift
    , shiftPosition
    , shiftPosition_
    , shiftPosition__
    )

import Position exposing (Position)


type alias Window =
    { first : Int, last : Int }


select : Window -> List String -> List String
select window strings =
    strings
        |> indexedFilterMap (\i x -> i >= window.first && i <= window.last)


{-|

    indexedFilterMap (\i x -> i >= 1 && i <= 3) [0,1,2,3,4,5,6]
    --> [1,2,3] : List number

-}
indexedFilterMap : (Int -> a -> Bool) -> List a -> List a
indexedFilterMap filter list =
    list
        |> List.indexedMap (\k item -> ( k, item ))
        |> List.filter (\( i, item ) -> filter i item)
        |> List.map Tuple.second


{-|

    Offset is <= 0

-}
getOffset : Window -> Int -> Int
getOffset window lineNumber_ =
    min (window.last - window.first - lineNumber_) 0


shiftPosition : Window -> Int -> Int -> Position
shiftPosition window line column =
    { line = line + window.first, column = column }


shiftPosition_ : Window -> Position -> Position
shiftPosition_ window pos =
    { line = pos.line + window.first, column = pos.column }


shiftPosition__ : Window -> Position -> Position
shiftPosition__ window pos =
    let
        l =
            pos.line - window.first
    in
    if l < 0 then
        pos

    else
        { line = pos.line - window.first, column = pos.column }


identity : Window -> Int -> Int -> Position
identity window line column =
    { line = line, column = column }


identity_ : Window -> Position -> Position
identity_ window pos =
    pos


shift : Int -> Window -> Window
shift k w =
    { w | first = w.first + k, last = w.last + k }


scroll : Int -> Window -> Window
scroll k window =
    let
        index =
            window.first + k
    in
    case ( index < 0, index >= window.first && index <= window.last ) of
        ( True, _ ) ->
            window

        ( False, True ) ->
            window

        ( False, False ) ->
            { window | first = window.first + k, last = window.last + k }


scrollToIncludeCursor : Position -> Window -> Window
scrollToIncludeCursor cursor window =
    let
        line =
            cursor.line

        offset =
            if line >= window.last then
                line - window.last

            else if line <= window.first then
                line - window.first

            else
                0
    in
    { window | first = window.first + offset, last = window.last + offset }
