module Editor.Styles exposing (editorStyles)

import Html exposing (Html, text)
import String.Interpolate exposing (interpolate)


style : List (Html.Attribute msg) -> List (Html msg) -> Html msg
style =
    Html.node "style"


editorStyles : StyleConfig -> Html msg
editorStyles styleConfig =
    style [] [ text (styleText styleConfig) ]


type alias StyleConfig =
    { editorWidth : Float
    , editorHeight : Float
    , lineHeight : Float
    , fontProportion : Float
    }


type alias StyleParams =
    { editorWidth : String
    , editorHeight : String
    , lineHeight : String
    , fontSize : String
    }


getStyleParams : StyleConfig -> StyleParams
getStyleParams c =
    { editorWidth = String.fromFloat c.editorWidth
    , editorHeight = String.fromFloat c.editorHeight
    , lineHeight = String.fromFloat c.lineHeight
    , fontSize = String.fromFloat (c.fontProportion * c.lineHeight)
    }


styleText : StyleConfig -> String
styleText styleConfig =
    let
        s =
            getStyleParams styleConfig
    in
    interpolate styleTemplate
        [ s.editorWidth
        , s.fontSize
        , s.lineHeight
        , s.editorHeight
        ]


styleTemplate : String
styleTemplate =
    """

body { font-size: {1}px;
       line-height: {2}px;}

.elm-editor-container {
  font-family: monospace;
  width: {0}px;
  user-select: none;
  -webkit-user-select: none;
  display: flex;
  // overflow-x : scroll;
  // overflow-y : scroll;
  // height: {3}px;
}

.elm-editor-container:focus {
  outline: none;
    // background-color : lightblue;
}

.elm-editor-gutter {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.elm-editor-lines {
  flex-grow: 1;
}

.elm-editor-line-number {
  display: inline-block;
  width: 35px;
  padding-right: 5px;
  text-align: right;
  background-color: lightgray;
  cursor: default;
}

.elm-editor-line {
  cursor: text;
}

.elm-editor-line__gutter-padding {
  width: 5px;
}

.elm-editor-line__character--has-cursor {
  position: relative;
}

.elm-editor-line__character--selected {
  background-color: #8d9ffe;
  color: white;
}

.elm-editor-cursor {
  position: absolute;
  border-left: 16px solid #990000;
  opacity: 0.2;
  left: 0;
  height: 100%;
}

.elm-editor-container:focus .elm-editor-cursor {
  animation: 1s blink step-start infinite;
  border-left: 4px solid #333333;
}

@keyframes blink {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;s
  }
}


body {
    font-family: sans-serif;

    }

.center-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightblue; //: #eeeeee;
    }

#editor-container {
    text-align: left;
    }



"""
