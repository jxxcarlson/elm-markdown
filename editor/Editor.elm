module Editor exposing
    ( embedded, init
    , load, update, insert
    , Editor, EditorConfig, EditorMsg
    , getBuffer, getState, getSource, getCursor, getWrapOption, getSelectedText, getFontSize, lineAt, lineAtCursor
    , setSelectedText, setHeight, setWidth
    , placeInClipboard
    , scrollToLine, scrollToString
    , getWidth, transformConfig
    )

{-| Use this module to embed a text editor in an Elm app.


## Contents

  - Embedding the Editor
  - Using the Editor
  - Types
  - Getters
  - Clipboard
  - Scroll


## Embedding the Editor

@docs embedded, init


## Using the editor

@docs load, update, insert


## Types

@docs Editor, EditorConfig, EditorMsg


## Getters

@docs getBuffer, getState, getSource, getCursor, getWrapOption, getSelectedText, getFontSize, lineAt, lineAtCursor


## Setters

@docs setSelectedText, setHeight, setWidth


## Clipboard

@docs placeInClipboard


## Scroll

@docs scrollToLine, scrollToString

-}

import Buffer exposing (Buffer)
import Debounce exposing (Debounce)
import Editor.Config exposing (Config, WrapOption(..), WrapParams)
import Editor.History
import Editor.Model exposing (InternalState)
import Editor.Styles
import Editor.Update
import Editor.View
import Editor.Wrap
import Html exposing (Attribute, Html, div)
import Html.Attributes as HA exposing (style)
import Position exposing (Position)
import RollingList


{-| Example:

    type Msg
        = EditorMsg EditorMsg
        | LogErr String
        ...

-}
type alias EditorMsg =
    Editor.Update.Msg


{-| Embed the editor in an app like this:

    type alias Model =
        { editor : Editor
        , ...
        }

-}
type Editor
    = Editor
        { buffer : Buffer
        , state : InternalState
        }


{-| Get the buffer (mostly for tests)
-}
getBuffer : Editor -> Buffer
getBuffer (Editor data) =
    data.buffer


{-| Get the state (mostly for tests)
-}
getState : Editor -> InternalState
getState (Editor data) =
    data.state



-- GETTERS --


{-| -}
getFontSize : Editor -> Float
getFontSize (Editor data) =
    data.state.config.fontProportion * data.state.config.lineHeight


{-| Get the options for wrapping text. See the example for `insert`.
-}
getWrapOption : Editor -> WrapOption
getWrapOption (Editor data) =
    data.state.config.wrapOption


{-| Return the the line at the given position
-}
lineAt : Position -> Editor -> Maybe String
lineAt position (Editor data) =
    Buffer.lineAt position data.buffer


{-| Return the the line at the given position
-}
lineAtCursor : Editor -> String
lineAtCursor (Editor data) =
    Buffer.lineAt data.state.cursor data.buffer
        |> Maybe.withDefault "invalid cursor"


{-| Return the current source text
-}
getSource : Editor -> String
getSource (Editor data) =
    Buffer.toString data.buffer


{-| Get the cursor position. See the example for `insert`.
-}
getCursor : Editor -> Position
getCursor (Editor data) =
    data.state.cursor


{-| -}
getSelectedText : Editor -> Maybe String
getSelectedText (Editor data) =
    data.state.selectedText


{-| -}
getSmallConfig : InternalState -> Config
getSmallConfig s =
    s.config



-- SETTERS --


{-| -}
setSelectedText : String -> Editor -> Editor
setSelectedText str (Editor data) =
    let
        is =
            data.state
    in
    Editor { data | state = { is | selectedText = Just str } }



-- CONFIG --


{-| A typical configuration:

    config : EditorConfig Msg
    config =
        { editorMsg = EditorMsg
        , sliderMsg = SliderMsg
        , editorStyle = editorStyle
        , width = 500
        , lines = 30
        , lineHeight = 16.0
        , showInfoPanel = True
        , wrapParams = { maximumWidth = 55, optimalWidth = 50, stringWidth = String.length }
        , wrapOption = DontWrap
        }

-}
type alias EditorConfig a =
    { editorMsg : EditorMsg -> a
    , width : Float
    , height : Float
    , lineHeight : Float
    , showInfoPanel : Bool
    , wrapParams : { maximumWidth : Int, optimalWidth : Int, stringWidth : String -> Int }
    , wrapOption : WrapOption
    , fontProportion : Float
    , lineHeightFactor : Float
    }


{-| XXX: Changed
-}
transformConfig : EditorConfig a -> Config
transformConfig c =
    let
        fontWidth =
            c.fontProportion * c.lineHeight

        multiplier =
            1.4
    in
    { --- lines = floor <| c.height / c.lineHeight
      showInfoPanel = c.showInfoPanel
    , wrapParams = { maximumWidth = floor (multiplier * c.width / fontWidth - 5), optimalWidth = floor (multiplier * c.width / fontWidth - 10), stringWidth = String.length }
    , wrapOption = c.wrapOption
    , height = c.height
    , width = c.width
    , lineHeight = c.lineHeight
    , fontProportion = c.fontProportion
    , lineHeightFactor = c.lineHeightFactor
    }



-- EMBEDDED EDITOR --


{-| Embed the editor in the host app:

    view : Model -> Html Msg
    view model =
        div [ HA.style "margin" "60px" ]
            [ ...
            , Editor.embedded config model.editor
            , ...
            ]

-}
embedded : EditorConfig a -> Editor -> Html a
embedded editorConfig editor =
    let
        styleConfig =
            { editorWidth = editorConfig.width
            , editorHeight = editorConfig.height
            , lineHeight = editorConfig.lineHeight
            , fontProportion = editorConfig.fontProportion
            }

        height_ =
            editorConfig.height - 37
    in
    div []
        [ Editor.Styles.editorStyles styleConfig
        , view (innerStyle height_) editor
            |> Html.map editorConfig.editorMsg
        ]


innerStyle h =
    [ style "height" (String.fromFloat h ++ "px")
    , style "border" "solid"
    , style "border-width" "0.5px"
    , style "border-color" "#aaa"
    , HA.attribute "id" "__inner_editor__"
    , style "overflow-y" "scroll"
    , style "height" (String.fromFloat h ++ "px")
    ]


lines : EditorConfig msg -> Int
lines editorConfig =
    floor <| editorConfig.height / editorConfig.lineHeight


{-| XXX: Changed

Initialize the embedded editor:

    init : () -> ( Model, Cmd Msg )
    init () =
        ( { editor = Editor.init config AppText.jabberwocky
          , ...
          }
        , Cmd.none
        )

-}
init : EditorConfig a -> String -> Editor
init editorConfig text =
    Editor
        { buffer = Buffer.init text
        , state =
            { config = transformConfig editorConfig
            , topLine = 0
            , cursor = Position 0 0
            , selection = Nothing
            , selectedText = Nothing
            , clipboard = ""
            , currentLine = Nothing
            , dragging = False
            , history = Editor.History.empty
            , searchTerm = ""
            , searchHitIndex = 0
            , replacementText = ""
            , canReplace = False
            , searchResults = RollingList.fromList []
            , showHelp = True
            , showInfoPanel = editorConfig.showInfoPanel
            , showGoToLinePanel = False
            , showSearchPanel = False
            , savedBuffer = Buffer.fromString ""
            , debounce = Debounce.init
            }
        }


getWidth : Editor -> Float
getWidth (Editor data) =
    data.state.config.width


{-| Set width of editor in pixels
-}
setWidth : Float -> Editor -> Editor
setWidth w (Editor data) =
    let
        oldConfig =
            data.state.config

        newConfig =
            { oldConfig | width = w }

        oldState =
            data.state

        newState =
            { oldState | config = newConfig }
    in
    Editor { data | state = newState }


{-| Set height of editor in pixels
-}
setHeight : Float -> Editor -> Editor
setHeight h (Editor data) =
    let
        oldConfig =
            data.state.config

        newConfig =
            { oldConfig | height = h }

        oldState =
            data.state

        newState =
            { oldState | config = newConfig }
    in
    Editor { data | state = newState }


initialState editorConfig =
    { config = transformConfig editorConfig
    , scrolledLine = 0
    , cursor = Position 0 0
    , selection = Nothing
    , selectedText = Nothing
    , clipboard = ""
    , currentLine = Nothing
    , dragging = False
    , history = Editor.History.empty
    , searchTerm = ""
    , replacementText = ""
    , canReplace = False
    , searchResults = RollingList.fromList []
    , showHelp = True
    , showInfoPanel = editorConfig.showInfoPanel
    , showGoToLinePanel = False
    , showSearchPanel = False
    , savedBuffer = Buffer.fromString ""
    , debounce = Debounce.init
    }



-- UPDATE --


{-| Respond to updates in the editor:

    update : Msg -> Model -> ( Model, Cmd Msg )
    update msg model =
        case msg of
            EditorMsg editorMsg ->
                let
                    ( editor, cmd ) =
                        Editor.update editorMsg model.editor
                in
                ( { model | editor = editor }, Cmd.map EditorMsg cmd )

            ...

-}
update : EditorMsg -> Editor -> ( Editor, Cmd EditorMsg )
update msg (Editor data) =
    let
        ( is, b, cmd ) =
            Editor.Update.update data.buffer msg data.state
    in
    ( Editor { state = is, buffer = b }, cmd )



-- VIEW --


{-| xxx
-}
view : List (Attribute EditorMsg) -> Editor -> Html EditorMsg
view attr (Editor data) =
    Editor.View.view attr (Buffer.lines data.buffer) data.state



--  EDITOR FUNCTIONS --


{-| xxx
-}
wrapSelection : Editor -> Editor
wrapSelection ((Editor data) as editor) =
    case data.state.selection of
        Nothing ->
            editor

        Just sel ->
            let
                ( start, end ) =
                    Position.order sel data.state.cursor

                selectedText =
                    Buffer.between start end data.buffer

                wrappedText =
                    Editor.Wrap.paragraphs data.state.config.wrapParams selectedText

                oldState =
                    data.state

                newState =
                    { oldState | selectedText = Just selectedText }

                newBuffer =
                    Buffer.replace start end wrappedText data.buffer
            in
            Editor { state = newState, buffer = newBuffer }



-- ?? -- |> recordHistory state buffer


{-| Use to insert text into the editor at a given position, e.g.,

    pasteToClipboard : Model -> String -> ( Model, Cmd msg )
    pasteToClipboard model editor =
        ( { model
            | editor =
                Editor.insert
                    (Editor.getWrapOption model.editor)
                    (Editor.getCursor model.editor)
                    editor
                    model.editor
          }
        , Cmd.none
        )

-}
insert : WrapOption -> Position -> String -> Editor -> Editor
insert wrapOption position string (Editor data) =
    let
        textToInsert =
            case wrapOption of
                DoWrap ->
                    Editor.Wrap.paragraphs data.state.config.wrapParams string

                DontWrap ->
                    string
    in
    Editor { data | buffer = Buffer.insert position textToInsert data.buffer }


{-| Place string in the editor's clipboard
-}
placeInClipboard : String -> Editor -> Editor
placeInClipboard str (Editor data) =
    let
        oldState =
            data.state

        newState =
            { oldState | clipboard = str }
    in
    Editor { data | state = newState }


{-| xxx
-}
pasteFromClipBoard : Editor -> Editor
pasteFromClipBoard (Editor data) =
    Editor { data | buffer = Buffer.insert data.state.cursor data.state.clipboard data.buffer }


{-| xxx
-}
clearState : Editor -> Editor
clearState (Editor data) =
    Editor { data | state = Editor.Update.clearState data.state }


{-| Load text into the embedded editor.

    load : WrapOption -> String -> Model -> ( Model, Cmd Msg )
    load wrapOption text model =
        let
            newEditor =
                Editor.load wrapOption text model.editor
        in
        ( { model | editor = newEditor }, Cmd.none )

-}
load : WrapOption -> String -> Editor -> Editor
load wrapOption content ((Editor data) as editor) =
    let
        config =
            data.state.config

        lineLengths =
            String.lines content |> List.map String.length

        maxLineLength =
            List.maximum lineLengths |> Maybe.withDefault 1000

        buffer =
            if wrapOption == DoWrap && maxLineLength > config.wrapParams.maximumWidth then
                Buffer.fromString (Editor.Wrap.paragraphs config.wrapParams content)

            else
                Buffer.fromString content

        (Editor newData) =
            clearState editor
    in
    Editor { newData | buffer = buffer }


{-| Scroll the editor to the first occurrence of a given string
-}
scrollToString : String -> Editor -> Editor
scrollToString str (Editor data) =
    let
        ( is, b ) =
            Editor.Update.scrollToText str data.state data.buffer
    in
    Editor { state = is, buffer = b }


{-| Scroll the editor to a given line
-}
scrollToLine : Int -> Editor -> Editor
scrollToLine k (Editor data) =
    let
        ( is, b ) =
            Editor.Update.scrollToLine k data.state data.buffer
    in
    Editor { state = is, buffer = b }
