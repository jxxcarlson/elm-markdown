module Editor.Keymap exposing (decoder)

import Dict exposing (Dict)
import Editor.Update exposing (Msg(..))
import Json.Decode as Decode exposing (Decoder)


type Modifier
    = None
    | Control
    | Option
    | Shift
    | ControlAndShift
    | ControlAndOption


type alias Keydown =
    { char : Maybe String
    , key : String
    , modifier : Modifier
    }


modifier : Bool -> Bool -> Bool -> Modifier
modifier ctrl shift option =
    case ( ctrl, shift, option ) of
        ( True, True, False ) ->
            ControlAndShift

        ( False, True, False ) ->
            Shift

        ( True, False, False ) ->
            Control

        ( False, False, True ) ->
            Option

        ( True, False, True ) ->
            ControlAndOption

        ( _, _, _ ) ->
            None


modifierDecoder : Decoder Modifier
modifierDecoder =
    Decode.map3 modifier
        (Decode.field "ctrlKey" Decode.bool)
        (Decode.field "shiftKey" Decode.bool)
        (Decode.field "altKey" Decode.bool)


characterDecoder : Decoder (Maybe String)
characterDecoder =
    Decode.field "key" Decode.string
        |> Decode.map
            (\key ->
                case String.uncons key of
                    Just ( char, "" ) ->
                        Just (String.fromChar char)

                    _ ->
                        Nothing
            )


keydownDecoder : Decoder Keydown
keydownDecoder =
    Decode.map3 Keydown
        characterDecoder
        (Decode.field "key" Decode.string)
        modifierDecoder


decoder : Decoder Msg
decoder =
    keydownDecoder |> Decode.andThen keyToMsg


type alias Keymap =
    Dict String Msg


keymaps :
    { noModifier : Keymap
    , shift : Keymap
    , option : Keymap
    , control : Keymap
    , controlAndShift : Keymap
    , controlAndOption : Keymap
    }
keymaps =
    { noModifier =
        Dict.fromList
            [ ( "ArrowUp", CursorUp )
            , ( "ArrowDown", CursorDown )
            , ( "ArrowLeft", CursorLeft )
            , ( "ArrowRight", CursorRight )
            , ( "Backspace", RemoveCharBefore )
            , ( "Delete", RemoveCharAfter )
            , ( "Enter", Insert "\n" )
            , ( "Home", CursorToLineStart )
            , ( "End", CursorToLineEnd )
            , ( "Tab", Indent )
            ]
    , shift =
        Dict.fromList
            [ ( "ArrowUp", SelectUp )
            , ( "ArrowDown", SelectDown )
            , ( "ArrowLeft", SelectLeft )
            , ( "ArrowRight", SelectRight )
            , ( "Tab", Deindent )
            , ( "Home", SelectToLineStart )
            , ( "End", SelectToLineEnd )
            ]
    , option =
        Dict.fromList
            [ ( "ArrowUp", ScrollUp 20 )
            , ( "ArrowDown", ScrollDown 20 )
            ]
    , controlAndOption =
        Dict.fromList
            [ ( "ArrowUp", FirstLine )
            , ( "ArrowDown", LastLine )
            , ( "w", ToggleWrapping )
            , ( "c", Clear )
            ]
    , control =
        Dict.fromList
            [ ( "ArrowRight", CursorToGroupEnd )
            , ( "ArrowLeft", CursorToGroupStart )
            , ( "Backspace", RemoveGroupBefore )
            , ( "Delete", RemoveGroupAfter )
            , ( "a", SelectAll )
            , ( "d", SelectGroup )
            , ( "c", Copy )
            , ( "g", ToggleGoToLinePanel )
            , ( ".", RollSearchSelectionForward )
            , ( ",", RollSearchSelectionBackward )
            , ( "h", ToggleHelp )
            , ( "x", Cut )
            , ( "s", ToggleSearchPanel )
            , ( "r", ToggleReplacePanel )
            , ( "v", Paste )
            , ( "z", Undo )
            , ( "w", WrapSelection )
            , ( "y", Redo )
            ]
    , controlAndShift =
        Dict.fromList
            [ ( "ArrowRight", SelectToGroupEnd )
            , ( "ArrowLeft", SelectToGroupStart )
            , ( "C", WriteToSystemClipBoard )
            , ( "I", ToggleInfoPanel )
            , ( "V", CopyPasteClipboard )
            , ( "W", WrapAll )
            , ( "S", SendLine )
            ]
    }


keyToMsg : Keydown -> Decoder Msg
keyToMsg event =
    let
        keyFrom keymap =
            Dict.get event.key keymap
                |> Maybe.map Decode.succeed
                |> Maybe.withDefault (Decode.fail "This key does nothing")

        keyOrCharFrom keymap =
            Decode.oneOf
                [ keyFrom keymap
                , event.char
                    |> Maybe.map (Insert >> Decode.succeed)
                    |> Maybe.withDefault
                        (Decode.fail "This key does nothing")
                ]
    in
    case event.modifier of
        None ->
            keyOrCharFrom keymaps.noModifier

        Control ->
            keyFrom keymaps.control

        Shift ->
            keyOrCharFrom keymaps.shift

        ControlAndShift ->
            keyFrom keymaps.controlAndShift

        ControlAndOption ->
            keyFrom keymaps.controlAndOption

        Option ->
            keyFrom keymaps.option
