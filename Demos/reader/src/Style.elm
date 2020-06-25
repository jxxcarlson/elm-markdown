module Style exposing (..)

import Element exposing (Element, column, padding, px, row, spacing, width)
import Element.Background as Background
import Element.Font as Font
import Html
import Html.Attributes exposing (style)


white =
    Element.rgb 1.0 1.0 1.0


blue =
    Element.rgb 0.0 0.0 0.8


paleBlue =
    Element.rgb 0.9 0.9 1.0


black =
    Element.rgb 0.1 0.1 0.1


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
    textStyle "400px" "550px" "#fff"


textStyle width height color =
    [ style "width" width
    , style "height" height
    , style "background-color" color
    , style "font-size" "14px"
    , style "margin-right" "20px"
    , style "padding" "20px"
    , style "overflow-y" "scroll"
    , style "white-space" "normal"
    , style "line-height" "20px"
    , style "float" "left"
    , style "border-width" "1px"
    ]


labelStyle =
    [ style "margin-top" "5px"
    , style "margin-bottom" "0px"
    , style "margin-left" "20px"
    , style "font-weight" "bold"
    ]
