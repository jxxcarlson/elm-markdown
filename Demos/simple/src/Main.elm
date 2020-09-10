module Main exposing (main)

import Browser
import File.Download as Download
import Html exposing (Html, a, button, div, h1, h2, p, span, text, textarea)
import Html.Attributes as HA exposing (style)
import Html.Events exposing (onClick, onInput)
import Html.Keyed as Keyed
import Markdown.LaTeX
import Markdown.Option exposing (MarkdownOption(..), OutputOption(..))
import Markdown.Render exposing (MarkdownMsg, MarkdownOutput)
import Placeholders
import Style exposing (buttonStyle, buttonStyleSelected, colorBlue, colorDarkRed, editorTextStyle, outerStyle, renderedSourceStyle, tocStyle)


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
    , option : MarkdownOption
    }


type Msg
    = Clear
    | GetContent String
    | ResetText
    | SelectStandard
    | SelectExtended
    | SelectExtendedMath
    | MarkdownMsg MarkdownMsg
    | ExportToLaTeX


type alias Flags =
    {}


init : Flags -> ( Model, Cmd Msg )
init _ =
    let
        model =
            { sourceText = Placeholders.initialText
            , counter = 0
            , option = ExtendedMath
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

        ResetText ->
            ( { model
                | counter = model.counter + 1
                , sourceText = Placeholders.initialText
              }
            , Cmd.none
            )

        SelectStandard ->
            ( { model
                | option = Standard
              }
            , Cmd.none
            )

        SelectExtended ->
            ( { model
                | option = Extended
              }
            , Cmd.none
            )

        SelectExtendedMath ->
            ( { model
                | option = ExtendedMath
              }
            , Cmd.none
            )

        MarkdownMsg _ ->
            ( model, Cmd.none )

        ExportToLaTeX ->
            let
                laTeXContent =
                    Markdown.LaTeX.export model.sourceText
            in
            ( model, download laTeXContent )


download : String -> Cmd msg
download latexContent =
    Download.string "exported.tex" "application/x-latex" latexContent



--
-- VIEW FUNCTIONS
---


view : Model -> Html Msg
view model =
    div outerStyle
        [ display model
        ]


display : Model -> Html Msg
display model =
    let
        rt : MarkdownOutput
        rt =
            Markdown.Render.withOptions model.option (ExternalTOC "Contents") ( 0, 0 ) 0 model.sourceText
    in
    div []
        [ h2 [ style "margin-left" "20px", style "margin-bottom" "0px", style "margin-top" "0px" ] [ text "Pure Elm Math+Markdown Demo" ]
        , editor model
        , renderedSource rt model
        , p [ style "clear" "left", style "margin-left" "20px", style "margin-top" "-20px" ]
            [ clearButton 60
            , exportToLaTeXButton 100
            , span [ style "margin-left" "30px", style "margin-right" "10px" ] [ text "Markdown flavor: " ]
            , extendedMarkdownButton model 100
            , extendedMathMarkdownButton model 140
            ]
        , a [ HA.href "https://minilatex.io", style "clear" "left", style "margin-left" "20px", style "margin-top" "0px" ] [ text "minilatex.io" ]
        , a [ HA.href "https://package.elm-lang.org/packages/jxxcarlson/elm-markdown/latest/", style "clear" "left", style "margin-left" "20px", style "margin-top" "0px" ] [ text "package.elm-lang.org" ]
        ]


editor : Model -> Html Msg
editor model =
    textarea (editorTextStyle ++ [ onInput GetContent, HA.value model.sourceText ]) []


renderedSource : MarkdownOutput -> Model -> Html Msg
renderedSource rt model =
    let
        token =
            String.fromInt model.counter
    in
    div []
        [ Keyed.node "div"
            renderedSourceStyle
            [ ( token ++ "-xx"
              , h1 [ style "font-size" "14px" ]
                    [ Markdown.Render.title rt ]
              )
            , ( token, Markdown.Render.document rt )
            ]
        , div tocStyle [ Markdown.Render.toc rt ]
        ]
        |> Html.map MarkdownMsg



-- BUTTONS --


clearButton : Int -> Html Msg
clearButton width =
    button (onClick Clear :: buttonStyle colorBlue width) [ text "Clear" ]


resetTextButton : Int -> Html Msg
resetTextButton width =
    button (onClick ResetText :: buttonStyle colorBlue width) [ text "Reset" ]


exportToLaTeXButton : Int -> Html Msg
exportToLaTeXButton width =
    button ([ onClick ExportToLaTeX ] ++ buttonStyle colorBlue width) [ text "To LaTeX" ]


extendedMarkdownButton : Model -> Int -> Html Msg
extendedMarkdownButton model width =
    button (onClick SelectExtended :: buttonStyleSelected (model.option == Extended) colorBlue colorDarkRed width) [ text "Extended" ]


extendedMathMarkdownButton : Model -> Int -> Html Msg
extendedMathMarkdownButton model width =
    button (onClick SelectExtendedMath :: buttonStyleSelected (model.option == ExtendedMath) colorBlue colorDarkRed width) [ text "Extended-Math" ]
