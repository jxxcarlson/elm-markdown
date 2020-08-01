module Style exposing (colorBlue, buttonStyle, outerStyle, editorTextStyle, renderedSourceStyle, textStyle, labelStyle)

import Html
import Html.Attributes exposing (style)


colorBlue : String
colorBlue =
    "rgb(100,100,200)"


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


outerStyle : List (Html.Attribute msg)
outerStyle =
    [ style "width" "1430px"
    , style "height" "510px"
    ]


editorTextStyle : List (Html.Attribute msg)
editorTextStyle =
    textStyle "400px" "400px" "#fff"


renderedSourceStyle : List (Html.Attribute msg)
renderedSourceStyle =
    textStyle "400px" "400px" "#fff"


textStyle : String -> String -> String -> List (Html.Attribute msg)
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


labelStyle : List (Html.Attribute msg)
labelStyle =
    [ style "margin-top" "5px"
    , style "margin-bottom" "0px"
    , style "margin-left" "20px"
    , style "font-weight" "bold"
    ]
