module Editor.Model exposing (InternalState, Snapshot)

import Buffer exposing (Buffer)
import Debounce exposing (Debounce)
import Editor.Config exposing (Config)
import Editor.History exposing (History)
import Position exposing (Position)
import RollingList exposing (RollingList)


type alias Snapshot =
    { cursor : Position
    , selection : Maybe Position
    , buffer : Buffer
    }


type alias InternalState =
    { config : Config
    , topLine : Int
    , cursor : Position
    , selection : Maybe Position
    , selectedText : Maybe String
    , clipboard : String
    , currentLine : Maybe String
    , dragging : Bool
    , history : History Snapshot
    , searchTerm : String
    , searchHitIndex : Int
    , replacementText : String
    , canReplace : Bool
    , searchResults : RollingList ( Position, Position )
    , showHelp : Bool
    , showInfoPanel : Bool
    , showGoToLinePanel : Bool
    , showSearchPanel : Bool
    , savedBuffer : Buffer
    , debounce : Debounce String
    }
