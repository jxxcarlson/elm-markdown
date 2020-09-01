module Markdown.LaTeXPostProcess exposing (fixItemLists)

import Markdown.Paragraphs as Paragraphs
import Parser exposing (..)


fixItemLists : String -> String
fixItemLists str =
    str
        ++ "\n\n"
        |> Paragraphs.get
        |> machine
        |> List.map render
        |> String.join "\n\n"


render : Item -> String
render item =
    case item of
        S str ->
            str

        BeginItemList ->
            "\\begin{itemize}"

        EndItemList ->
            "\\end{itemize}"


type Context
    = CArg String
    | List


type Item
    = S String
    | BeginItemList
    | EndItemList


type ParagraphType
    = NormalParagraph
    | ItemParagraph


machine : List String -> List Item
machine stringList =
    let
        initialState =
            { paragraphs = stringList, register = InRunningText, items = [] }
    in
    loop initialState nextMachineState
        |> List.reverse


type Register
    = InItemList
    | InRunningText


type alias MachineState =
    { paragraphs : List String
    , register : Register
    , items : List Item
    }


nextMachineState : MachineState -> Step MachineState (List Item)
nextMachineState ms =
    case List.head ms.paragraphs of
        Nothing ->
            case ms.register of
                InRunningText ->
                    Done ms.items

                InItemList ->
                    Done (EndItemList :: ms.items)

        Just str ->
            case ( paragraphType str, ms.register ) of
                ( NormalParagraph, InRunningText ) ->
                    Loop
                        { ms
                            | paragraphs = List.drop 1 ms.paragraphs
                            , items = S str :: ms.items
                        }

                ( ItemParagraph, InRunningText ) ->
                    Loop
                        { ms
                            | paragraphs = List.drop 1 ms.paragraphs
                            , items = S str :: BeginItemList :: ms.items
                            , register = InItemList
                        }

                ( NormalParagraph, InItemList ) ->
                    Loop
                        { ms
                            | paragraphs = List.drop 1 ms.paragraphs
                            , items = S str :: EndItemList :: ms.items
                            , register = InRunningText
                        }

                ( ItemParagraph, InItemList ) ->
                    Loop
                        { ms
                            | paragraphs = List.drop 1 ms.paragraphs
                            , items = S str :: ms.items
                            , register = InItemList
                        }


type Step state a
    = Loop state
    | Done a


loop : state -> (state -> Step state a) -> a
loop s nextState =
    case nextState s of
        Loop s_ ->
            loop s_ nextState

        Done b ->
            b



-- HELPERS


paragraphType : String -> ParagraphType
paragraphType str =
    case run getItem str of
        Ok () ->
            ItemParagraph

        Err _ ->
            NormalParagraph


getItem : Parser ()
getItem =
    succeed ()
        |. spaces
        |. symbol "\\item "
