module Treee.DiffExample exposing (..)

import Tree exposing (Tree, singleton, tree)

t1 =  (tree "root"
        [ tree "folder"
            [ singleton "foo"
            , singleton "bar"
            ]
        , singleton "yeah"
        ]
    )

t2 =   (tree "root"
        [ tree "folder"
            [ singleton "foo" ]
        , tree "folder2"
            [ singleton "nice" ]
        ]
    )

