----------------------------------------------------------------------
--
-- CodeEditor.elm
-- Elm interface to <code-editor> custom element.
-- Copyright (c) 2018 Bill St. Clair <billstclair@gmail.com>
-- Some rights reserved.
-- Distributed under the MIT License
-- See LICENSE.txt
--
-- Modified 2019 by James Carlson (see the onGutterClicked function)
----------------------------------------------------------------------


module CustomElement.CodeEditor exposing
    ( codeEditor
    , editorValue
    , onEditorChanged
    , onGutterClicked
    )

{-| The Elm interface to the `code-editor` custom element.

Inspired by [Luke Westby](https://github.com/lukewestby)'s [Elm Europe
talk](https://youtu.be/tyFe9Pw6TVE). The JavaScript custom element
code is almost a verbatim copy.

This code won't do anything unless `site/js/code-editor.js` is loaded,
and its CodeMirror files from `site/lib`.


# Html Elements

@docs codeEditor


# Attributes

@docs editorValue


# Events

@docs onEditorChanged

-}

import Html exposing (Attribute, Html)
import Html.Attributes exposing (property)
import Html.Events exposing (on)
import Json.Decode as JD exposing (Decoder)
import Json.Encode as JE exposing (Value)


{-| Create a code editor Html element.
-}
codeEditor : List (Attribute msg) -> List (Html msg) -> Html msg
codeEditor =
    Html.node "code-editor"


{-| This is how you set the contents of the code editor.
-}
editorValue : String -> Attribute msg
editorValue value =
    property "editorValue" <|
        JE.string value


{-| This is how you receive changes to the contents of the code editor.
-}
onEditorChanged : (String -> msg) -> Attribute msg
onEditorChanged tagger =
    on "editorChanged" <|
        JD.map tagger <|
            JD.at [ "target", "editorValue" ]
                JD.string


{-| This is how you receive the content of the line clicked.
-}
onGutterClicked : (String -> msg) -> Attribute msg
onGutterClicked tagger =
    on "gutterClicked" <|
        JD.map tagger <|
            JD.at [ "target", "lineValue" ]
                JD.string
