module Main exposing (main)

import Browser
import Html exposing (Html, text, div, p, textarea, button)
import Html.Attributes exposing (style, value)
import Html.Events exposing (onClick, onInput)
import Html.Keyed as Keyed
import Markdown.Option exposing (MarkdownOption(..), OutputOption(..))
import Markdown.Render
import Placeholders exposing (initialText)
import Style exposing (colorBlue, buttonStyle, outerStyle, editorTextStyle, renderedSourceStyle)


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
    , counter : Int
    , seed : Int
    }


type Msg
    = Clear
    | GetContent String
    | RestoreText
    | MarkdownMsg Markdown.Render.MarkdownMsg


type alias Flags =
    {}


init : Flags -> ( Model, Cmd Msg )
init _ =
    let
        model =
            { sourceText = initialText
            , counter = 0
            , seed = 0
            }
    in
    ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GetContent str ->
            ( { model
                | sourceText = str
                , counter = model.counter + 1
              }
            , Cmd.none
            )

        Clear ->
            ( { model
                | sourceText = ""
                , counter = model.counter + 1
              }
            , Cmd.none
            )

        RestoreText ->
            ( { model
                | counter = model.counter + 1
                , sourceText = initialText
              }
            , Cmd.none
            )

        MarkdownMsg _ ->
            ( model, Cmd.none )


-- VIEW


view : Model -> Html Msg
view model =
    div outerStyle
        [ display model
        ]


display : Model -> Html Msg
display model =
    div []
        [ editor model
        , renderedSource model
        , p [ style "clear" "left", style "margin-top" "-20px" ] [ clearButton 60, restoreTextButton 80 ]
        ]


editor : Model -> Html Msg
editor model =
    textarea (editorTextStyle ++ [ onInput GetContent, value model.sourceText ]) []


renderedSource : Model -> Html Msg
renderedSource model =
    Keyed.node "div"
        renderedSourceStyle
        [ ( String.fromInt model.counter, Markdown.Render.toHtml ExtendedMath model.sourceText |> Html.map MarkdownMsg ) ]


-- BUTTONS


clearButton : Int -> Html Msg
clearButton width =
    button (onClick Clear :: buttonStyle colorBlue width) [ text "Clear" ]


restoreTextButton : Int -> Html Msg
restoreTextButton width =
    button (onClick RestoreText :: buttonStyle colorBlue width) [ text "Reset" ]
