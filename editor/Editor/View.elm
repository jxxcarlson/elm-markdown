module Editor.View exposing (view)

import Char
import Editor.Config as Config exposing (WrapOption(..))
import Editor.Keymap
import Editor.Model exposing (InternalState)
import Editor.Style as Style
import Editor.Update exposing (Msg(..))
import Editor.Widget as Widget
import Html exposing (Attribute, Html, div, span, text)
import Html.Attributes as Attribute exposing (class, classList, style)
import Html.Events as Event
import Json.Decode as Decode
import List.Extra
import Position exposing (Position)
import RollingList


name : String
name =
    "elm-editor"


selected : Position -> Maybe Position -> Position -> Bool
selected cursor maybeSelection char =
    maybeSelection
        |> Maybe.map (\selection -> Position.between cursor selection char)
        |> Maybe.withDefault False


{-| The non-breaking space character will not get whitespace-collapsed like a
regular space.
-}
nonBreakingSpace : Char
nonBreakingSpace =
    Char.fromCode 160


ensureNonBreakingSpace : Char -> Char
ensureNonBreakingSpace char =
    if char == ' ' then
        nonBreakingSpace

    else
        char


withTrue : a -> ( a, Bool )
withTrue a =
    ( a, True )


captureOnMouseDown : Msg -> Attribute Msg
captureOnMouseDown msg =
    Event.stopPropagationOn
        "mousedown"
        (Decode.map withTrue (Decode.succeed msg))


captureOnMouseOver : Msg -> Attribute Msg
captureOnMouseOver msg =
    Event.stopPropagationOn
        "mouseover"
        (Decode.map withTrue (Decode.succeed msg))


character : Position -> Maybe Position -> Position -> Char -> Html Msg
character cursor selection position char =
    span
        [ classList
            [ ( name ++ "-line__character", True )
            , ( name ++ "-line__character--has-cursor", cursor == position )
            , ( name ++ "-line__character--selected"
              , selected cursor selection position
              )
            ]
        , captureOnMouseDown (MouseDown position)
        , captureOnMouseOver (MouseOver position)
        ]
        [ text <| String.fromChar <| ensureNonBreakingSpace char
        , if cursor == position then
            span [ class <| name ++ "-cursor" ] [ text " " ]

          else
            text ""
        ]


line : Position -> Maybe Position -> Int -> String -> Html Msg
line cursor selection index content =
    let
        length =
            String.length content

        {- Add offset to index to compensate for scrolling -}
        endPosition =
            { line = index, column = length }
    in
    div
        [ class <| name ++ "-line"
        , captureOnMouseDown (MouseDown endPosition)
        , captureOnMouseOver (MouseOver endPosition)
        ]
    <|
        List.concat
            [ [ span
                    [ class <| name ++ "-line__gutter-padding"
                    , captureOnMouseDown (MouseDown { line = index + 0, column = 0 })
                    , captureOnMouseOver (MouseOver { line = index + 0, column = 0 })
                    ]
                    [ text <| String.fromChar nonBreakingSpace ]
              ]
            , List.indexedMap
                (Position index >> character cursor selection)
                (String.toList content)
            , if index == cursor.line && cursor.column >= length then
                [ span
                    [ class <| name ++ "-line__character"
                    , class <| name ++ "-line__character--has-cursor"
                    ]
                    [ text " "
                    , span [ class <| name ++ "-cursor" ] [ text " " ]
                    ]
                ]

              else
                []
            ]


onTripleClick : msg -> Attribute msg
onTripleClick msg =
    Event.on
        "click"
        (Decode.field "detail" Decode.int
            |> Decode.andThen
                (\detail ->
                    if detail >= 3 then
                        Decode.succeed msg

                    else
                        Decode.fail ""
                )
        )


lineNumber : Int -> Html Msg
lineNumber number =
    span
        [ class <| name ++ "-line-number"
        , captureOnMouseDown (MouseDown { line = number, column = 0 })
        , captureOnMouseOver (MouseOver { line = number, column = 0 })
        ]
        [ text <| String.fromInt (number + 0) ]


gutter : Int -> Html Msg
gutter maxLines_ =
    -- XXX: Todo: rationalize maxlines
    div [ class <| name ++ "-gutter" ] <|
        List.map lineNumber (List.range 1 maxLines_)


linesContainer : List (Html Msg) -> Html Msg
linesContainer =
    div [ class <| name ++ "-lines" ]


view : List (Attribute Msg) -> List String -> InternalState -> Html Msg
view attr lines state =
    div []
        [ div []
            [ showIf state.showGoToLinePanel (goToLinePanel state)
            , showIf state.showSearchPanel (searchPanel state)
            , infoPanel state lines
            , showIf (not (state.showSearchPanel || state.showGoToLinePanel)) (headerPanel state lines)
            ]
        , innerView attr lines state
        ]


px : Float -> String
px p =
    String.fromFloat p ++ "px"


innerView : List (Attribute Msg) -> List String -> InternalState -> Html Msg
innerView attr lines state =
    div (attr ++ [ Attribute.class "flex-column" ])
        [ div
            [ class <| name ++ "-container"
            , Event.preventDefaultOn
                "keydown"
                (Decode.map withTrue Editor.Keymap.decoder)
            , Event.onMouseUp MouseUp
            , Event.onDoubleClick SelectGroup
            , onTripleClick SelectLine
            , Attribute.tabindex 0
            ]
            [ gutter (max 100 (List.length lines + 20))
            , linesContainer <|
                List.indexedMap (line state.cursor state.selection) lines
            ]
        ]


infoPanel state lines =
    if state.showInfoPanel then
        infoPanel_ state lines

    else
        div [] []


infoPanel_ : InternalState -> List String -> Html Msg
infoPanel_ state lines =
    div infoPanelStyle
        [ toggleHelpButton state
        , cursorPosition state
        , currentLineLength state lines
        , displayLineHeight state lines
        , wrappingOption state
        , dismissInfoPanel
        ]



-- displayLineHeight : InternalState -> List String -> Html Msg


displayLineHeight state lines =
    let
        h =
            state.config.lineHeight * toFloat state.cursor.line
    in
    div [ style "margin-top" "10px" ] [ text <| "Height: " ++ (String.fromFloat <| roundTo 2 h) ]


roundTo : Int -> Float -> Float
roundTo places x =
    let
        pp =
            places |> toFloat

        factor =
            10 ^ pp
    in
    x * factor |> round |> (\u -> toFloat u / factor)


currentLineLength : InternalState -> List String -> Html Msg
currentLineLength state lines =
    let
        lineLength =
            List.Extra.getAt state.cursor.line lines
                |> Maybe.map (String.length >> String.fromInt)
                |> Maybe.withDefault "-1"
    in
    div [ style "margin-top" "10px" ] [ text <| "Length: " ++ lineLength ]


wrappingOption state =
    let
        message =
            if state.config.wrapOption == DoWrap then
                "Wrap: ON"

            else
                "Wrap: OFF"
    in
    div [ style "margin-top" "10px" ] [ text message ]


infoPanelStyle =
    [ style "width" "100px"
    , style "position" "fixed"
    , style "right" "8px"
    , style "top" "8px"
    , style "opacity" "1.0"
    , style "border" "solid 0.5px #444"
    , style "background-color" Style.lightGray
    , style "padding" "8px"
    , style "z-index" "100"
    ]


searchPanel state =
    if state.showSearchPanel == True then
        searchPanel_ state

    else
        div [] []


headerPanel state lines =
    div (headerPanelStyle state.config.width)
        [ wordCount lines, lineCount lines ]


headerPanelStyle width =
    [ style "width" (px (width - 40))
    , style "padding-top" "10px"
    , style "height" "27px"
    , style "background-color" Style.lightGray
    , style "opacity" "0.8"
    , style "font-size" "14px"
    , style "padding-left" "40px"
    , Attribute.class "flex-row"
    ]


searchPanel_ state =
    div
        [ style "width" "595px"
        , style "padding-top" "5px"
        , style "height" "30px"
        , style "padding-left" "8px"
        , style "background-color" Style.lightGray
        , style "opacity" "0.9"
        , style "font-size" "14px"
        , Attribute.class "flex-row"
        ]
        [ searchTextButton
        , acceptSearchText
        , numberOfHitsDisplay state
        , syncButton
        , showIf (not state.canReplace) openReplaceField
        , showIf state.canReplace replaceTextButton
        , showIf state.canReplace acceptReplaceText
        , searchForwardButton
        , searchBackwardButton
        , dismissSearchPanel
        ]


goToLinePanel state =
    if state.showGoToLinePanel == True then
        goToLinePanel_ state.config.width

    else
        div [] []


goToLinePanel_ width =
    div
        [ style "width" (px width)
        , style "height" "34px"
        , style "padding" "1px"
        , style "opacity" "0.9"
        , style "background-color" Style.lightGray
        , Attribute.class "flex-row"
        ]
        [ goToLineButton
        , acceptLineNumber
        , dismissGoToLineButton
        ]


dismissGoToLineButton =
    Widget.lightRowButton 25
        ToggleGoToLinePanel
        "X"
        [ style "margin-top" "5px"
        ]


numberOfHitsDisplay : InternalState -> Html Msg
numberOfHitsDisplay state =
    let
        n =
            state.searchResults
                |> RollingList.toList
                |> List.length

        txt =
            String.fromInt (state.searchHitIndex + 1) ++ "/" ++ String.fromInt n
    in
    Widget.rowButton 40 NoOp txt []


lineCount : List String -> Html Msg
lineCount lines =
    div Widget.headingStyle [ text ("Lines: " ++ String.fromInt (List.length lines)) ]


wordCount : List String -> Html Msg
wordCount lines =
    let
        words =
            List.map String.words lines |> List.concat
    in
    div Widget.headingStyle [ text ("Words: " ++ String.fromInt (List.length words)) ]


cursorPosition : InternalState -> Html Msg
cursorPosition state =
    div Widget.columnButtonStyle [ text ("Cursor = (" ++ String.fromInt (state.cursor.line + 1) ++ ", " ++ String.fromInt state.cursor.column ++ ")") ]



-- BUTTONS --


toggleHelpButton state =
    let
        label =
            if state.showHelp == True then
                "Help"

            else
                "Back"
    in
    Widget.columnButton 80 ToggleHelp label []


goToLineButton =
    Widget.rowButton 80
        NoOp
        "Go to line"
        [ style "margin-top" "5px", style "margin-left" "5px" ]


dismissInfoPanel =
    Widget.lightColumnButton 20
        ToggleInfoPanel
        "X"
        []


dismissSearchPanel =
    Widget.lightRowButton 25
        ToggleSearchPanel
        "X"
        []


openReplaceField =
    Widget.rowButton 25
        OpenReplaceField
        "R"
        []


syncButton =
    Widget.rowButton 25 SyncToSearchHit "S" [ style "float" "left" ]


searchForwardButton =
    Widget.rowButton 30 RollSearchSelectionForward ">" [ style "float" "left" ]


searchBackwardButton =
    Widget.rowButton 30 RollSearchSelectionBackward "<" [ style "float" "left" ]


searchTextButton =
    Widget.rowButton 60 NoOp "Search" [ style "float" "left" ]


replaceTextButton =
    Widget.rowButton 70 ReplaceCurrentSelection "Replace" [ style "float" "left" ]


acceptLineNumber =
    Widget.textField 30
        AcceptLineNumber
        ""
        [ style "margin-top" "5px" ]
        [ setHtmlId "line-number-input" ]


acceptSearchText =
    Widget.textField 130 AcceptSearchText "" [ style "float" "left" ] [ setHtmlId "editor-search-box" ]


acceptReplaceText =
    Widget.textField 130 AcceptReplacementText "" [ style "float" "left" ] [ setHtmlId "replacement-box" ]


setHtmlId : String -> Html.Attribute msg
setHtmlId id =
    Attribute.attribute "id" id


showIf : Bool -> Html Msg -> Html Msg
showIf flag h =
    if flag then
        h

    else
        div [] []
