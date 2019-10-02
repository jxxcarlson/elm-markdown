module Treee.Diff exposing (Diff(..), Equality, Patch(..), diff)

import Tree exposing (Tree)


type alias Equality a =
    a -> a -> Bool


type Diff a
    = Keep (Tree a)
    | Patch (Patch a)


type Patch a
    = Insert (Tree a)
    | Delete (Tree a)
    | Replace (Tree a) (Tree a)
    | Copy a (List (Diff a))


diff : Equality a -> Tree a -> Tree a -> Diff a
diff eq left right =
    if eq (Tree.label left) (Tree.label right) then
        diffHelp eq
            { left = Tree.children left
            , right = Tree.children right
            , tree = left
            , done = []
            , isAllKeep = True
            }
            []

    else
        Patch (Replace left right)


type alias Acc a =
    { left : List (Tree a)
    , right : List (Tree a)
    , tree : Tree a
    , done : List (Diff a)
    , isAllKeep : Bool
    }


diffHelp : Equality a -> Acc a -> List (Acc a) -> Diff a
diffHelp eq acc stack =
    case ( acc.left, acc.right ) of
        ( [], [] ) ->
            let
                p =
                    if acc.isAllKeep then
                        Keep acc.tree

                    else
                        Patch (Copy (Tree.label acc.tree) (List.reverse acc.done))
            in
            case stack of
                [] ->
                    p

                newAcc :: rest ->
                    diffHelp eq { newAcc | done = p :: newAcc.done, isAllKeep = acc.isAllKeep && newAcc.isAllKeep } rest

        ( [], r :: restR ) ->
            diffHelp eq { acc | right = restR, done = Patch (Insert r) :: acc.done, isAllKeep = False } stack

        ( l :: restL, [] ) ->
            diffHelp eq { acc | left = restL, done = Patch (Delete l) :: acc.done, isAllKeep = False } stack

        ( l :: restL, r :: restR ) ->
            if eq (Tree.label l) (Tree.label r) then
                diffHelp eq
                    { left = Tree.children l
                    , right = Tree.children r
                    , tree = l
                    , done = []
                    , isAllKeep = True
                    }
                    ({ acc | left = restL, right = restR } :: stack)

            else
                diffHelp eq
                    { acc
                        | left = restL
                        , right = restR
                        , done = Patch (Replace l r) :: acc.done
                        , isAllKeep = False
                    }
                    stack