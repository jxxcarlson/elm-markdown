module Main exposing (main)

import Browser exposing (Document, UrlRequest(..))
import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes as HA exposing (style)
import Html.Events exposing (onClick)
import Html.Keyed as Keyed
import Json.Encode
import Url exposing (Url)
import Url.Parser as UrlParser exposing ((</>))


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        , onUrlRequest = ClickLink
        , onUrlChange = ChangeUrl
        }


type Msg
    = ChangeUrl Url
    | ClickLink UrlRequest
    | Increment


type alias DocsRoute =
    ( String, Maybe String )


type alias Model =
    { navKey : Nav.Key
    , route : Maybe DocsRoute
    , counter : Int
    }


init : () -> Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url navKey =
    ( { navKey = navKey
      , route = UrlParser.parse docsParser url
      , counter = 0
      }
    , Cmd.none
    )


docsParser : UrlParser.Parser (DocsRoute -> a) a
docsParser =
    UrlParser.map Tuple.pair (UrlParser.string </> UrlParser.fragment identity)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangeUrl url ->
            ( model, Cmd.none )

        ClickLink urlRequest ->
            case urlRequest of
                Internal url ->
                    ( model, Cmd.none )

                External url ->
                    ( model, Cmd.none )

        Increment ->
            ( { model | counter = model.counter + 1 }, Cmd.none )


view : Model -> Document Msg
view model =
    { title = "Text"
    , body =
        [ div [ HA.style "margin" "40px" ]
            [ h2 [] [ text "Test: Browser.application" ]
            , div displayStyle [ text (String.fromInt model.counter) ]
            , button ([ onClick Increment ] ++ buttonStyle) [ text "+" ]
            , Keyed.node "p" [] [ ( String.fromInt model.counter, blueText <| variableBlueText model ) ]
            , Keyed.node "p" [] [ ( String.fromInt model.counter, blueText <| variableBlueText2 model ) ]
            ]
        ]
    }


variableBlueText : Model -> String
variableBlueText model =
    String.fromInt model.counter ++ ": This text should be blue."


variableBlueText2 : Model -> String
variableBlueText2 model =
    String.fromInt (2 * model.counter) ++ ": Also blue."



-- CUSTOM ELEMENT --


blueText : String -> Html msg
blueText content =
    Html.node "blue-text"
        [ HA.property "content" (Json.Encode.string content) ]
        []


mathText : String -> Html msg
mathText content =
    Html.node "math-text"
        [ HA.class "mm-math", HA.property "content" (Json.Encode.string content) ]
        []



-- STYLE --


buttonStyle : List (Html.Attribute msg)
buttonStyle =
    [ style "backgroundColor" "rgb(100,100,100)"
    , style "color" "white"
    , style "width" "50px"
    , style "height" "50px"
    , style "padding-bottom" "8px"
    , style "font-size" "28pt"
    , style "text-align" "center"
    , style "border" "none"
    ]


displayStyle : List (Html.Attribute msg)
displayStyle =
    [ style "backgroundColor" "rgb(50,50,50)"
    , style "color" "red"
    , style "width" "50px"
    , style "height" "42px"
    , style "padding-top" "8px"
    , style "text-align" "center"
    , style "font-size" "32pt"
    , style "border" "none"
    ]
