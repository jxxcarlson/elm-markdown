port module Main exposing (main)

{-| A simple Platform.worker program with
a simple command-line interface:

`$ sh make.sh` -- (1)
`$ chmod u+x cli; alias cli='./cli'` -- (2)
`$ cli 77` -- (3)
`232`

1.  Compile Main.elm to `./run/main.js` and
    copy `src/cli.js` to `./run/cli.js`

2.  Make `cli` executable and make an alias for it
    to avoid awkward typing.

3.  Try it out. The program `cli.js` communicates
    with runtime for the `Platform.worker` program.
    The worker accepts input, computes some output,
    and send the output back through ports.

To do something more interesting, replace
the `transform` function in `Main.elm`.

-}

import Markdown.Option exposing (..)
import Markdown.Parse as Parse exposing (MDBlockWithId(..))
import Platform exposing (Program)
import Tree



--
--toMDBlockTree : Int -> Option -> Document -> Tree MDBlockWithId
--toMDBlockTree version option document =
--


type alias InputType =
    String


type alias OutputType =
    List String


port get : (InputType -> msg) -> Sub msg


port put : OutputType -> Cmd msg


main : Program Flags Model Msg
main =
    Platform.worker
        { init = init
        , update = update
        , subscriptions = subscriptions
        }


type alias Model =
    ()


type Msg
    = Input InputType


type alias Flags =
    ()


init : Flags -> ( Model, Cmd Msg )
init _ =
    ( (), Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Input kIn ->
            let
                kOut =
                    transform kIn
            in
            ( model, put kOut )


subscriptions : Model -> Sub Msg
subscriptions _ =
    get Input



{- Below is the input-to-output transformation.
   It could be anything.  Here we have something
   simple for demonstration purposes.
-}


transform : InputType -> OutputType
transform str =
    Parse.toMDBlockTree 0 ExtendedMath str
        |> Tree.flatten
        |> List.map Debug.toString
