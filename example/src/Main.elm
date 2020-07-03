module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes as HA
import Markdown.Option exposing (..)
import Markdown.Render exposing (MarkdownMsg(..), MarkdownOutput(..))


main : Program Flags Model Msg
main =
    Browser.element
        { view = view
        , update = update
        , init = init
        , subscriptions = subscriptions
        }


type alias Model =
    { sourceText : String
    }


type Msg
    = NoOp
    | MarkdownMsg Markdown.Render.MarkdownMsg


type alias Flags =
    {}


init : Flags -> ( Model, Cmd Msg )
init flags =
    ( { sourceText = svgText }, Cmd.none )


svgText =
    """
# This is a test

one
@removed[two (x)]
@added[two (y)]
three

Some math:

$$
\\int_0^1 x^n dx = \\frac{1}{n+1}
$$

@highlight[An svg figure]:

@@svg
<svg width="300" height="100">
  <circle cx="250" cy="50" r="40" stroke="blue" stroke-width="3" fill="cyan" />
</svg>


@red[Some Html entities]:

&forall; (&bbA;:&caU;): &bbA; &to; &bbB;


@blue[API]

```elm
Markdown.Render.toHtml ExtendedMath model.sourceText
  |> Html.map MarkdownMsg
```

"""


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        MarkdownMsg _ ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    Html.div [ HA.style "margin" "50px", HA.style "width" "500px" ]
        [ Markdown.Render.toHtml ExtendedMath model.sourceText
            |> Html.map MarkdownMsg
        ]
