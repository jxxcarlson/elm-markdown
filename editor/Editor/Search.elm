module Editor.Search exposing (search)

import Buffer exposing (Buffer, lines)
import Position exposing (Position)


{-| Return a list of pairs (k, s), where s
-}



-- searchHits : String -> String -> List (Position, Position)


search : String -> Buffer -> List ( Position, Position )
search key buffer =
    searchHits key (lines buffer)


{-|

    searchHits "AB" ["about this, we know", "that Babs is the best in the lab", "a stitch in time saves nine"]
    --> [({ column = 0, line = 0 },{ column = 5, line = 0 }),({ column = 29, line = 1 },{ column = 32, line = 1 })]

-}



-- searchHits : String -> List String -> List ( Position, Position )


searchHits key lines_ =
    let
        width =
            String.length key

        expand : ( Int, List Int ) -> List ( Int, Int )
        expand ( i, list ) =
            list |> List.map (\item -> ( i, item ))

        makePositions : ( Int, Int ) -> ( Position, Position )
        makePositions ( line, column ) =
            ( Position line column, Position line (column + width) )
    in
    List.indexedMap (\i line -> ( i, String.indexes key line )) lines_
        |> List.map expand
        |> List.concat
        |> List.map makePositions



--
--
--{-|
--
--    positions (5, "This is about our lab.", ["about", "lab"])
--    --> [({ column = 8, line = 5 },{ column = 13, line = 5 }),({ column = 18, line = 5 },{ column = 21, line = 5 })]
--
---}
--positions : ( Int, String, List String ) -> List ( Position, Position )
--positions ( line, source, hits ) =
--    List.map (\hit -> stringIndices hit source) hits
--        |> List.concat
--        |> List.map (\( start, end ) -> ( Position line start, Position line end ))
--
--
--{-|
--
--    stringIndices "ab" "This is about our lab."
--    --> [(8,10),(19,21)] : List ( Int, Int )
--
---}
--stringIndices : String -> String -> List ( Int, Int )
--stringIndices key source =
--    let
--        n =
--            String.length key
--    in
--    String.indices key source
--        |> List.map (\i -> ( i, i + n ))
--
--
--{-|
--
--    matches "ab" "abc, hoorAy, yada, Blab about it"
--    ["abc,","blab","about"] : List String
--
---}
--matches : String -> String -> List Int
--matches key str =
--    str
--        |> String.words
--        |> List.filter (\word -> key == word)
--
--
--{-|
--
--    indexedFilterMap (\i x -> i >= 1 && i <= 3) [0,1,2,3,4,5,6]
--    --> [(1,1),(2,2),(3,3)]
--
---}
--indexedFilterMap : (Int -> a -> Bool) -> List a -> List ( Int, a )
--indexedFilterMap filter list =
--    list
--        |> List.indexedMap (\k item -> ( k, item ))
--        |> List.filter (\( i, item ) -> filter i item)
