module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes as HA exposing (style)
import Html.Events exposing (onClick)
import Html.Keyed as Keyed
import Json.Encode


main : Program Flags Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }


type Msg
    = Increment


type alias DocsRoute =
    ( String, Maybe String )


type alias Model =
    { counter : Int }


type alias Flags =
    {}


init : Flags -> ( Model, Cmd Msg )
init flags =
    ( { counter = 0 }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment ->
            ( { model | counter = model.counter + 1 }, Cmd.none )


view : Model -> Html Msg
view model =
    div [ HA.style "margin" "40px" ]
        [ h2 [] [ text "Test: Browser.element" ]
        , div displayStyle [ text (String.fromInt model.counter) ]
        , button ([ onClick Increment ] ++ buttonStyle) [ text "+" ]
        , Keyed.node "p" [] [ ( String.fromInt model.counter, blueText <| variableBlueText model ) ]
        ]


variableBlueText : Model -> String
variableBlueText model =
    "(" ++ String.fromInt model.counter ++ ") This text should be blue."



-- CUSTOM ELEMENT --


blueText : String -> Html msg
blueText content =
    Html.node "blue-text"
        [ HA.property "content" (Json.Encode.string content) ]
        []



-- STYLE --


buttonStyle : List (Html.Attribute msg)
buttonStyle =
    [ style "backgroundColor" "rgb(100,100,100)"
    , style "color" "white"
    , style "width" "50px"
    , style "height" "50px"
    , style "padding-bottom" "8px"
    , style "font-size" "28pt"
    , style "text-align" "center"
    , style "border" "none"
    ]


displayStyle : List (Html.Attribute msg)
displayStyle =
    [ style "backgroundColor" "rgb(50,50,50)"
    , style "color" "red"
    , style "width" "50px"
    , style "height" "42px"
    , style "padding-top" "8px"
    , style "text-align" "center"
    , style "font-size" "32pt"
    , style "border" "none"
    ]
