module Style exposing (buttonStyle, buttonStyleSelected, colorBlue, colorDark, colorDarkRed, colorLight, editorTextStyle, labelStyle, macroPanelStyle, outerStyle, renderedSourceStyle, textStyle, tocStyle)

-- import Html exposing (..)

import Html
import Html.Attributes exposing (style)



-- import Html.Events exposing (onClick, onInput)
-- import Html.Keyed as Keyed


colorBlue =
    "rgb(100,100,200)"


colorDarkRed =
    "rgb(180,0,0)"


colorLight =
    "#88a"


colorDark =
    "#444"


buttonStyle : String -> Int -> List (Html.Attribute msg)
buttonStyle color width =
    let
        realWidth =
            width + 0 |> String.fromInt |> (\x -> x ++ "px")
    in
    [ style "backgroundColor" color
    , style "color" "white"
    , style "width" realWidth
    , style "height" "25px"
    , style "margin-top" "20px"
    , style "margin-right" "12px"
    , style "font-size" "9pt"
    , style "text-align" "center"
    , style "border" "none"
    ]


buttonStyleSelected : Bool -> String -> String -> Int -> List (Html.Attribute msg)
buttonStyleSelected bit color color2 width =
    let
        realWidth =
            width + 0 |> String.fromInt |> (\x -> x ++ "px")
    in
    [ case bit of
        False ->
            style "backgroundColor" color

        True ->
            style "backgroundColor" color2
    , style "color" "white"
    , style "width" realWidth
    , style "height" "25px"
    , style "margin-top" "20px"
    , style "margin-right" "12px"
    , style "font-size" "9pt"
    , style "text-align" "center"
    , style "border" "none"
    ]



-- STYLE FUNCTIONS


outerStyle =
    [ style "margin-top" "20px"
    , style "background-color" "#e1e6e8"
    , style "padding" "20px"
    , style "width" "1300px"
    , style "height" "670px"
    ]


editorTextStyle =
    textStyle "400px" "500px" "#fff"


macroPanelStyle =
    textStyle "300px" "450px" "#fff"


renderedSourceStyle =
    textStyle "400px" "500px" "#fff"


tocStyle =
    textStyle "200px" "500px" "#fff" ++ [ style "float" "left" ]


textStyle width height color =
    [ style "width" width
    , style "height" height
    , style "padding" "15px"
    , style "margin-left" "20px"
    , style "background-color" color
    , style "overflow" "scroll"
    ]


labelStyle =
    [ style "margin-top" "5px"
    , style "margin-bottom" "0px"
    , style "margin-left" "20px"
    , style "font-weight" "bold"
    ]
