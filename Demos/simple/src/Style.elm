module Style exposing (buttonStyle, buttonStyleSelected, colorBlue, colorDarkRed, editorTextStyle, tocStyle, labelStyle, outerStyle, renderedSourceStyle, textStyle)


import Html
import Html.Attributes exposing (style)


colorBlue : String
colorBlue =
    "rgb(100,100,200)"


colorDarkRed : String
colorDarkRed =
    "rgb(180,0,0)"


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
    [ if bit then
        style "backgroundColor" color
      else
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


outerStyle : List (Html.Attribute msg)
outerStyle =
    [ style "margin-top" "20px"
    , style "padding" "20px"
    , style "width" "1300px"
    , style "height" "670px"
    ]


editorTextStyle : List (Html.Attribute msg)
editorTextStyle =
    textStyle "400px" "500px" "#fff"


renderedSourceStyle : List (Html.Attribute msg)
renderedSourceStyle =
    textStyle "400px" "500px" "#fff"

tocStyle : List (Html.Attribute msg)
tocStyle =
    textStyle "250px" "500px" "#fff" ++ [style "float" "left"]


textStyle : String -> String -> String -> List (Html.Attribute msg)
textStyle width height color =
    [ style "width" width
    , style "height" height
    , style "padding" "15px"
    , style "margin-left" "20px"
    , style "background-color" color
    , style "overflow" "scroll"
    , style "float" "left"
    ]


labelStyle : List (Html.Attribute msg)
labelStyle =
    [ style "margin-top" "5px"
    , style "margin-bottom" "0px"
    , style "margin-left" "20px"
    , style "font-weight" "bold"
    ]
