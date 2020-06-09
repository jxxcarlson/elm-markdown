module Main exposing (main)

import Browser
import Cmd.Extra exposing (withCmd, withNoCmd)
import Config
import Html exposing (..)
import Html.Attributes as HA exposing (..)
import Html.Events exposing (onClick, onInput)
import Html.Keyed as Keyed
import Http
import Markdown.Option exposing (..)
import Markdown.Render
import Strings
import Style exposing (..)


main : Program Flags Model Msg
main =
    Browser.element
        { view = view
        , update = update
        , init = init
        , subscriptions = subscriptions
        }


type alias Model =
    { content : String
    , counter : Int
    }


type Msg
    = GotText (Result Http.Error String)
    | GetText String
    | MarkdownMsg Markdown.Render.MarkdownMsg


type alias Flags =
    {}


init : Flags -> ( Model, Cmd Msg )
init flags =
    let
        model =
            { content = Strings.initialText
            , counter = 0
            }
    in
    model |> withNoCmd


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GetText fileName ->
            { model | counter = model.counter + 1 }
                |> withCmd (getDocument fileName)

        GotText result ->
            case result of
                Ok content ->
                    { model | content = content } |> withNoCmd

                Err _ ->
                    { model | content = "Error getting file" } |> withNoCmd

        MarkdownMsg _ ->
            ( model, Cmd.none )


getDocument fileName =
    Http.get
        { url = Config.serverUrl ++ "/api/document/" ++ fileName
        , expect = Http.expectString GotText
        }



-- VIEW


view : Model -> Html Msg
view model =
    div outerStyle
        [ display model
        ]


display : Model -> Html Msg
display model =
    div []
        [ renderedSource model
        , p [ style "clear" "left", style "margin-top" "-20px" ]
            [ getFileButton "example1.md"
            , getFileButton "example2.md"
            ]
        ]


label text_ =
    p labelStyle [ text text_ ]


renderedSource : Model -> Html Msg
renderedSource model =
    Keyed.node "div"
        renderedSourceStyle
        [ ( String.fromInt model.counter, Markdown.Render.toHtml ExtendedMath model.content |> Html.map MarkdownMsg ) ]



-- BUTTONS


getFileButton : String -> Html Msg
getFileButton fileName =
    button ([ onClick (GetText fileName) ] ++ buttonStyle colorBlue 100) [ text fileName ]
