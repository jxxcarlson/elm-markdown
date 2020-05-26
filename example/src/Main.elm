module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes as HA
import Markdown.Option exposing (..)
import Markdown.Render exposing (MarkdownMsg(..), MarkdownOutput(..))


main : Program Flags Model Msg
main =
    Browser.element
        { view = view
        , update = update
        , init = init
        , subscriptions = subscriptions
        }


type alias Model =
    { sourceText : String
    }


type Msg
    = NoOp
    | MarkdownMsg Markdown.Render.MarkdownMsg


type alias Flags =
    {}


init : Flags -> ( Model, Cmd Msg )
init flags =
    ( { sourceText = "Test: $a^2 + b^2 = c^2$\n\n&forall; x: A &sup; B" }, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        MarkdownMsg _ ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    Html.div [ HA.style "margin" "50px" ]
        [ Markdown.Render.toHtml ExtendedMath model.sourceText
            |> Html.map MarkdownMsg
        ]
