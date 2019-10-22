module Main exposing (main)

import Browser
import Browser.Dom as Dom
import Html exposing (..)
import Html.Attributes as HA exposing (style)
import Html.Events exposing (onClick, onInput)
import Markdown.ElmWithId
import Markdown.Option exposing (Option(..))
import Random
import CustomElement.CodeEditor as Editor
import Markdown.ElmWithId as ElmWithId
import Strings
import Tree exposing(Tree)
import ParseWithId
import Tree.Diff as Diff
import Process
import Task exposing(Task)
import Style

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
emptyRenderedText =  Markdown.ElmWithId.renderHtmlWithExternaTOC "Contents" emptyAst

-- MSG

type Msg
    = NoOp
    | Clear
    | Restart
    | GetContent String
    | ProcessLine String
    | SetViewPortForElement (Result Dom.Error (Dom.Element, Dom.Viewport))

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
            |> Task.andThen (\_ -> Process.sleep 100
            |> Task.andThen (\_ -> Task.succeed (newAst, Markdown.ElmWithId.renderHtmlWithExternaTOC "Contents" newAst)))
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
            , renderedText = Markdown.ElmWithId.renderHtmlWithExternaTOC "Contents" <| firstAst
            , message = "Starting up, number of math elements = " ++ String.fromInt nMath
            }
    in
    ( model, Cmd.batch[resetViewportOfEditor, resetViewportOfRenderedText, renderSecond model] )

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
                , renderedText = Markdown.ElmWithId.renderHtmlWithExternaTOC "Contents" newAst
                , counter = model.counter + 1

              }
            , Cmd.none
            )
        ProcessLine str ->
          let
             id = (case ElmWithId.searchAST str model.lastAst of
                 Nothing -> "??"
                 Just id_ -> id_ |>  ParseWithId.stringOfId)

          in
             ({ model | message = "str = " ++ String.left 20 str ++ " -- Clicked on id: " ++ id},
               setViewportForElement id
              )


        SetViewPortForElement result ->
            case result of
                Ok (element, viewport) ->
                      (model, setViewPortForSelectedLine element viewport)
                Err _ -> ( { model | message = model.message ++ ", doc VP ERROR" }, Cmd.none )

        GenerateSeed ->
            ( model, Random.generate NewSeed (Random.int 1 10000) )

        NewSeed newSeed ->
            ( { model | seed = newSeed }, Cmd.none )

        NoOp -> (model, Cmd.none)

        Clear ->
            ( { model
                |
                  counter = model.counter + 1
                , sourceText = ""
                , lastAst = emptyAst
                , renderedText = emptyRenderedText
                , message = "Cleared"
              }
            , Cmd.batch [resetViewportOfRenderedText, resetViewportOfEditor, renderAstFor model ""]
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
                                 , renderedText = Markdown.ElmWithId.renderHtmlWithExternaTOC "Contents" <| firstAst
                               }
            in
            ( newModel , Cmd.batch [resetViewportOfRenderedText, resetViewportOfEditor, renderSecond newModel])

        LoadExample2 ->
            let
                firstAst =  Markdown.ElmWithId.parse model.counter ExtendedMath (getFirstPart Strings.text2)
                newModel = { model
                               | counter = model.counter + 1
                                 , message = "Loading example 2"
                                 , sourceText = Strings.text2
                                 -- , firstAst =  firstAst
                                 , lastAst = Markdown.ElmWithId.parse model.counter ExtendedMath Strings.text2
                                 , renderedText = Markdown.ElmWithId.renderHtmlWithExternaTOC "Contents" <| firstAst
                               }
            in
            ( newModel , Cmd.batch [resetViewportOfRenderedText, resetViewportOfEditor, renderSecond newModel])


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

-- VIEWPORT


resetViewportOfRenderedText : Cmd Msg
resetViewportOfRenderedText =
  Task.attempt (\_ -> NoOp) (Dom.setViewportOf "_rendered_text_" 0 0)

resetViewportOfEditor : Cmd Msg
resetViewportOfEditor =
  Task.attempt (\_ -> NoOp) (Dom.setViewportOf "_editor_" 0 0)




-- NEW STUFF

setViewportForElement : String -> Cmd Msg
setViewportForElement id =
    Dom.getViewportOf "_rendered_text_"
      |> Task.andThen (\vp -> getElementWithViewPort vp id)
      |> Task.attempt SetViewPortForElement

getElementWithViewPort : Dom.Viewport -> String -> Task Dom.Error (Dom.Element, Dom.Viewport)
getElementWithViewPort vp id =
    Dom.getElement id
      |> Task.map (\el -> (el, vp))



setViewPortForSelectedLine : Dom.Element -> Dom.Viewport -> Cmd Msg
setViewPortForSelectedLine element viewport =
    let

        y =
            viewport.viewport.y + element.element.y - element.element.height - 100
    in
    Task.attempt (\_ -> NoOp) (Dom.setViewportOf "_rendered_text_" 0 y)


--setViewPortForSelectedLine : Dom.Element -> Dom.Viewport -> Cmd Msg
--setViewPortForSelectedLine element viewport =
--    let
--        y =  viewport.viewport.y + element.element.y - element.element.height - 100
--    in
--    Task.attempt (\_ -> NoOp) (Dom.setViewportOf "_rendered_text_" 0 y)
--


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
        , p [style "margin-left" "20px", style "margin-top" "0", style "font-size" "14pt"] [text "MathJax 3. Click in gutter to sync"]
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
        , span [style "margin-left" "50px"] [text <|  model.message]

        ]


label text_ =
    p Style.labelStyle [ text text_ ]


editor : Model -> Html Msg
editor model =
        Editor.codeEditor
            [ Editor.editorValue (model.sourceText)
            , Editor.onEditorChanged GetContent
            , Editor.onGutterClicked ProcessLine

            ]
            []
            |> (\x -> Html.div
               (Style.editorTextStyle ++ [  HA.id "_editor_", HA.style "width" "400px", HA.style "height" "500px", HA.style "overflow" "scroll" ]) [ x ])


--    textarea (editorTextStyle ++ [ onInput GetContent, HA.value model.sourceText ]) []


renderedSource : Model -> Html Msg
renderedSource model =
      div [] [
         div  (Style.renderedSourceStyle ++ [HA.id "_rendered_text_"]) [ h1 [style "font-size" "14px"] [
            model.renderedText.title],  model.renderedText.document
           ]

       , div Style.tocStyle [model.renderedText.toc]
      ]


-- BUTTONS --


clearButton width =
    button ([ onClick Clear ] ++ Style.buttonStyle Style.colorBlue width) [ text "Clear" ]

restartButton width =
    button ([ onClick Restart ] ++ Style.buttonStyle Style.colorBlue width) [ text "Restart" ]


example1Button width =
    button ([ onClick LoadExample1 ] ++ Style.buttonStyle Style.colorBlue width) [ text "Example 1" ]

example2Button width =
    button ([ onClick LoadExample2 ] ++ Style.buttonStyle Style.colorBlue width) [ text "Example 2" ]

standardMarkdownButton model width =
    button ([ onClick SelectStandard ] ++ Style.buttonStyleSelected (model.option == Standard) Style.colorBlue Style.colorDarkRed width) [ text "Standard" ]


extendedMarkdownButton model width =
    button ([ onClick SelectExtended ] ++ Style.buttonStyleSelected (model.option == Extended) Style.colorBlue Style.colorDarkRed width) [ text "Extended" ]


extendedMathMarkdownButton model width =
    button ([ onClick SelectExtendedMath ] ++ Style.buttonStyleSelected (model.option == ExtendedMath) Style.colorBlue Style.colorDarkRed width) [ text "Extended-Math" ]

