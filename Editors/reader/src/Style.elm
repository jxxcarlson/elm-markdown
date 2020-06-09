module Style exposing (..)

import Html
import Html.Attributes exposing (style)


colorBlue =
    "rgb(100,100,200)"


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



-- STYLE FUNCTIONS


outerStyle =
    [ style "width" "1430px"
    , style "height" "510px"
    ]


editorTextStyle =
    textStyle "400px" "400px" "#fff"


renderedSourceStyle =
    textStyle "400px" "400px" "#fff"


textStyle width height color =
    [ style "width" width
    , style "height" height
    , style "background-color" color
    , style "margin-right" "20px"
    , style "padding" "20px"
    , style "overflow" "scroll"
    , style "float" "left"
    , style "border-width" "1px"
    ]


labelStyle =
    [ style "margin-top" "5px"
    , style "margin-bottom" "0px"
    , style "margin-left" "20px"
    , style "font-weight" "bold"
    ]
