module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes as HA exposing (style)
import Html.Events exposing (onClick, onInput)
import Markdown.ElmWithId
import Markdown.Option exposing (Option(..))
import Random
import Strings
import Style exposing (..)
import Tree exposing(Tree)
import ParseWithId
import Tree.Diff as Diff
import Process
import Task

{-|  This version of the demo app has some optimizations
that make the editing process smoother for long documents,
containing a lot of mathematics.

The idea is to to parse the document text when the
document is first opened.  The resulting parse
tree (AST: abstract syntax tree) is stored as
`model.lastAst`.  Each block in the AST carries
a label `(version, id): (Int, Int)`, where
the `id` is unique to each block.
Each time the text changes, a new AST is computed a
with an incremented version number.  The
the function function `Diff.mergeWith equals` is applied
to compute the updated AST.  The effect of this operation
is that the id's of the nodes that have not changed
are themselves unchanged.  In this way, MathJax will
not re-render mathematical text that is unchanged.

To see where these optimizations are applied,
look for the places where functions in the modules
`ParseWithId` and `Markdown.ElmWithId` are called.

-}
main : Program Flags Model Msg
main =
    Browser.element
        { view = view
        , update = update
        , init = init
        , subscriptions = subscriptions
        }

-- MODEL

type alias Model =
    {
      counter : Int
    , seed : Int
    , option : Option
    , sourceText : String
    , lastAst : Tree ParseWithId.MDBlockWithId
    , renderedText : RenderedText Msg
    , message : String
    }

emptyAst : Tree ParseWithId.MDBlockWithId
emptyAst =  Markdown.ElmWithId.parse -1 ExtendedMath ""

emptyRenderedText : RenderedText Msg
emptyRenderedText =  Markdown.ElmWithId.renderHtmlWithExternaTOC emptyAst

-- MSG

type Msg
    = Clear
    | Restart
    | GetContent String
    | GenerateSeed
    | NewSeed Int
    | LoadExample1
    | LoadExample2
    | SelectStandard
    | SelectExtended
    | SelectExtendedMath
    | GotSecondPart (Tree ParseWithId.MDBlockWithId, RenderedText Msg)

type alias Flags =
    {}

renderAstFor : Model -> String -> Cmd Msg
renderAstFor model text =
    let
            newAst = Markdown.ElmWithId.parse model.counter ExtendedMath text
    in
        Process.sleep 10
            |> Task.andThen (\_ -> Process.sleep 100 |> Task.andThen (\_ -> Task.succeed (newAst, Markdown.ElmWithId.renderHtmlWithExternaTOC newAst)))
            |> Task.perform GotSecondPart


renderSecond : Model -> Cmd Msg
renderSecond model =
    renderAstFor model model.sourceText


getFirstPart : String -> String
getFirstPart str =
        String.left 1500 str

initialText = Strings.text1

init : Flags -> ( Model, Cmd Msg )
init flags =
    doInit


doInit : ( Model, Cmd Msg )
doInit =
    let
        lastAst = Markdown.ElmWithId.parse 0 ExtendedMath initialText
        nMath = Markdown.ElmWithId.numberOfMathElements lastAst
        firstAst = if nMath > 10 then
                      Markdown.ElmWithId.parse 1 ExtendedMath (getFirstPart initialText)
                   else
                      lastAst

        model =
            {
              counter = 2
            , seed = 0
            , option = ExtendedMath
            , sourceText = initialText
            , lastAst = lastAst
            , renderedText = Markdown.ElmWithId.renderHtmlWithExternaTOC <| firstAst
            , message = "Starting up, number of math elements = " ++ String.fromInt nMath
            }
    in
    ( model, renderSecond model )

subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GetContent str ->
            let
              newAst_ =  Markdown.ElmWithId.parse model.counter model.option str
              newAst = Diff.mergeWith ParseWithId.equal model.lastAst newAst_
            in
            ( { model
                |  sourceText = str

                -- rendering
                , lastAst = newAst
                , renderedText = Markdown.ElmWithId.renderHtmlWithExternaTOC newAst
                , counter = model.counter + 1

              }
            , Cmd.none
            )

        GenerateSeed ->
            ( model, Random.generate NewSeed (Random.int 1 10000) )

        NewSeed newSeed ->
            ( { model | seed = newSeed }, Cmd.none )

        Clear ->
            ( { model
                |
                  counter = model.counter + 1
                , sourceText = ""
                , lastAst = emptyAst
                , renderedText = emptyRenderedText
                , message = "Cleared"
              }
            , renderAstFor model ""
            )

        Restart ->
            doInit

        LoadExample1 ->
            let
                firstAst =  Markdown.ElmWithId.parse model.counter ExtendedMath (getFirstPart Strings.text1)
                newModel = { model
                               | counter = model.counter + 1
                                 , message = "Loading example 1"
                                 , sourceText = Strings.text1
                                 --, firstAst =  firstAst
                                 , lastAst = Markdown.ElmWithId.parse model.counter ExtendedMath Strings.text1
                                 , renderedText = Markdown.ElmWithId.renderHtmlWithExternaTOC <| firstAst
                               }
            in
            ( newModel , renderSecond newModel)

        LoadExample2 ->
            let
                firstAst =  Markdown.ElmWithId.parse model.counter ExtendedMath (getFirstPart Strings.text2)
                newModel = { model
                               | counter = model.counter + 1
                                 , message = "Loading example 2"
                                 , sourceText = Strings.text2
                                 -- , firstAst =  firstAst
                                 , lastAst = Markdown.ElmWithId.parse model.counter ExtendedMath Strings.text2
                                 , renderedText = Markdown.ElmWithId.renderHtmlWithExternaTOC <| firstAst
                               }
            in
            ( newModel , renderSecond newModel)


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

        GotSecondPart (newAst, newRenderedText) ->
            ({model | lastAst = newAst, renderedText = newRenderedText, counter = model.counter + 1, message = "Got second part"}, Cmd.none)

--
-- VIEW FUNCTIONS
---


view : Model -> Html Msg
view model =
    div Style.outerStyle
        [ display model
        ]

type alias RenderedText msg = {title: Html msg, toc: Html msg, document: Html msg}

display : Model -> Html Msg
display model =
    div []
        [ h2 [ style "margin-left" "20px", style "margin-bottom" "0px", style "margin-top" "0px" ] [ text "Pure Elm Markdown Demo (Experimental)" ]
        , p [style "margin-left" "20px", style "margin-top" "0", style "font-size" "14pt"] [text "Now using MathJax 3"]
        , editor model
        , renderedSource model
        , p [ style "clear" "left", style "margin-left" "20px", style "margin-top" "-20px" ] [
                clearButton 60
              , restartButton 70
              , example1Button 80
              , example2Button 80
              , span [style "margin-left" "30px", style "margin-right" "10px" ] [text "Markdown flavor: "]
              , standardMarkdownButton model 100
              , extendedMarkdownButton model 100
              , extendedMathMarkdownButton model 140
             ]
        , a [ HA.href "https://minilatex.io", style "clear" "left", style "margin-left" "20px", style "margin-top" "0px" ]
            [ text "minilatex.io" ]
        , a [ HA.href "https://package.elm-lang.org/packages/jxxcarlson/elm-markdown/latest/", style "clear" "left", style "margin-left" "20px", style "margin-top" "0px" ]
            [ text "package.elm-lang.org" ]
        , p [] [text model.message]
        ]


label text_ =
    p labelStyle [ text text_ ]


editor : Model -> Html Msg
editor model =
    textarea (editorTextStyle ++ [ onInput GetContent, HA.value model.sourceText ]) []


renderedSource : Model -> Html Msg
renderedSource model =
      div [] [
         div  renderedSourceStyle [ h1 [style "font-size" "14px"] [
            model.renderedText.title],  model.renderedText.document
           ]

       , div tocStyle [model.renderedText.toc]
      ]


-- BUTTONS --


clearButton width =
    button ([ onClick Clear ] ++ buttonStyle colorBlue width) [ text "Clear" ]

restartButton width =
    button ([ onClick Restart ] ++ buttonStyle colorBlue width) [ text "Restart" ]


example1Button width =
    button ([ onClick LoadExample1 ] ++ buttonStyle colorBlue width) [ text "Example 1" ]

example2Button width =
    button ([ onClick LoadExample2 ] ++ buttonStyle colorBlue width) [ text "Example 2" ]

standardMarkdownButton model width =
    button ([ onClick SelectStandard ] ++ buttonStyleSelected (model.option == Standard) colorBlue colorDarkRed width) [ text "Standard" ]


extendedMarkdownButton model width =
    button ([ onClick SelectExtended ] ++ buttonStyleSelected (model.option == Extended) colorBlue colorDarkRed width) [ text "Extended" ]


extendedMathMarkdownButton model width =
    button ([ onClick SelectExtendedMath ] ++ buttonStyleSelected (model.option == ExtendedMath) colorBlue colorDarkRed width) [ text "Extended-Math" ]
