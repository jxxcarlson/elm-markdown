module Editor.Function exposing (bufferOf, cursorRight, stateOf)

import Buffer exposing (Buffer)
import Editor.Model exposing (InternalState)
import Editor.Update exposing (Msg(..))
import Position


stateOf : ( InternalState, Buffer, Cmd Msg ) -> InternalState
stateOf ( state, _, _ ) =
    state


bufferOf : ( InternalState, Buffer, Cmd Msg ) -> Buffer
bufferOf ( _, buffer, _ ) =
    buffer


cursorRight state buffer =
    let
        newCursor =
            let
                moveFrom =
                    case state.selection of
                        Just selection ->
                            Position.order selection state.cursor
                                |> Tuple.second

                        Nothing ->
                            state.cursor
            in
            Position.nextColumn moveFrom
                |> Buffer.clampPosition Buffer.Forward buffer

        --                cmd =
        --                    case state.cursor.line /= newCursor.line of
        --                        True ->
        --                            setEditorViewportForLine state.config.lineHeight newCursor.line
        --
        --                        False ->
        --                            Cmd.none
    in
    ( { state
        | cursor = newCursor
        , selection = Nothing
      }
    , buffer
    , Cmd.none
    )
