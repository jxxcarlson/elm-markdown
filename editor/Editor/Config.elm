module Editor.Config exposing (Config, WrapOption(..), WrapParams, default, setMaximumWrapWidth, setOptimumWrapWidth, setWrapOption)

{-| Use this module to configure the editor.
The `default` value is a basic configuration
which you can modify like this:

    config =
        { default | lines = 30 }

@docs Config, WrapOption, WrapParams, default, setMaximumWrapWidth, setOptimumWrapWidth, setWrapOption

-}


{-| -}
type alias Config =
    { wrapParams : WrapParams
    , showInfoPanel : Bool
    , wrapOption : WrapOption
    , width : Float
    , height : Float
    , lineHeight : Float
    , fontProportion : Float
    , lineHeightFactor : Float
    }


{-| -}
type alias WrapParams =
    { maximumWidth : Int
    , optimalWidth : Int
    , stringWidth : String -> Int
    }


{-| -}
type WrapOption
    = DoWrap
    | DontWrap


{-| -}
default : Config
default =
    { wrapParams = { maximumWidth = 50, optimalWidth = 45, stringWidth = String.length }
    , showInfoPanel = False
    , wrapOption = DoWrap
    , width = 400
    , height = 400
    , lineHeight = 18
    , fontProportion = 0.7
    , lineHeightFactor = 1.0
    }



-- TODO: Make maximumWidth and optimalWidth configurable at startup and at runtime


{-| -}
setWrapOption : WrapOption -> Config -> Config
setWrapOption wrapOption config =
    { config | wrapOption = wrapOption }


{-| -}
setMaximumWrapWidth : Int -> Config -> Config
setMaximumWrapWidth k config =
    let
        w =
            config.wrapParams

        newWrapParams =
            { w | maximumWidth = k }
    in
    { config | wrapParams = newWrapParams }


{-| -}
setOptimumWrapWidth : Int -> Config -> Config
setOptimumWrapWidth k config =
    let
        w =
            config.wrapParams

        newWrapParams =
            { w | optimalWidth = k }
    in
    { config | wrapParams = newWrapParams }
