module Main exposing (main)

import Browser
import Cmd.Extra exposing (withCmd, withNoCmd)
import Config
import Element exposing (Element, column, padding, px, row, spacing, width)
import Element.Background as Background
import Element.Font as Font
import Html exposing (..)
import Html.Attributes as HA exposing (..)
import Html.Events exposing (onClick, onInput)
import Html.Keyed as Keyed
import Http
import Json.Decode as D exposing (Decoder)
import Markdown.Option exposing (..)
import Markdown.Render
import MiniLatex
import MiniLatex.Edit
import MiniLatex.Render exposing (MathJaxRenderOption(..))
import Strings
import Style exposing (..)
import Widget.Button as Button exposing (Alignment(..), Size(..))
import Widget.Style


main : Program Flags Model Msg
main =
    Browser.element
        { view = view
        , update = update
        , init = init
        , subscriptions = subscriptions
        }


type alias Model =
    { content : String
    , counter : Int
    , docType : DocType
    , fileList : List String
    , message : String
    }


type DocType
    = MarkdownDoc
    | MiniLaTeXDoc



-- MSG


type Msg
    = GotText (Result Http.Error String)
    | GetText String
    | GetFileList
    | GotFileList (Result Http.Error (List String))
    | MarkdownMsg Markdown.Render.MarkdownMsg
    | LaTeXMsg MiniLatex.Edit.LaTeXMsg



-- | LaTeXMsg MiniLatex.Edit.LaTeXMsg
--| RenderLaTeX LaTeXMsg
--type RenderMsg
--    = MarkdownMsg
--    | LaTeXMsg


type alias Flags =
    {}


init : Flags -> ( Model, Cmd Msg )
init flags =
    let
        model =
            { content = Strings.initialText
            , counter = 0
            , docType = MarkdownDoc
            , fileList = []
            , message = ""
            }
    in
    model |> withCmd getFileList


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GetText fileName ->
            { model | counter = model.counter + 1, docType = docTypeOfFile fileName }
                |> withCmd (getDocument fileName)

        GotText result ->
            case result of
                Ok content ->
                    { model | content = content } |> withNoCmd

                Err _ ->
                    { model | content = "Error getting file" } |> withNoCmd

        MarkdownMsg _ ->
            ( model, Cmd.none )

        LaTeXMsg _ ->
            ( model, Cmd.none )

        GetFileList ->
            ( model, getFileList )

        GotFileList result ->
            case result of
                Ok fileList ->
                    ( { model | fileList = fileList }, Cmd.none )

                Err _ ->
                    ( { model | message = "Error getting file list" }, Cmd.none )



-- HTTP


getDocument : String -> Cmd Msg
getDocument fileName =
    Http.get
        { url = Config.serverUrl ++ "/api/text/" ++ fileName
        , expect = Http.expectString GotText
        }


getFileList : Cmd Msg
getFileList =
    Http.get
        { url = Config.serverUrl ++ "/api/list"
        , expect = Http.expectJson GotFileList fileListDecoder
        }


fileListDecoder : Decoder (List String)
fileListDecoder =
    D.list D.string



-- VIEW


view : Model -> Html Msg
view model =
    Element.layoutWith
        { options =
            [ Element.focusStyle Widget.Style.noFocus ]
        }
        [ padding 30 ]
        (row [] [ leftColumn model, rightColumn model ])


leftColumn : Model -> Element Msg
leftColumn model =
    column [ Element.width (px 500), Font.size 14, spacing 12 ]
        [ renderedSource model |> Element.html
        ]


rightColumn : Model -> Element Msg
rightColumn model =
    column
        [ Element.width (px 400)
        , Element.height (px 590)
        , Font.size 14
        , Element.scrollbarY
        , padding 12
        , spacing 4
        , Background.color Style.white
        ]
        (List.map viewFileName (model.fileList |> filterFileNames |> List.sort))


viewFileName : String -> Element Msg
viewFileName fileName =
    Button.make (GetText fileName) fileName
        |> Button.withWidth (Bounded 180)
        |> Button.withHeight (Bounded 25)
        |> Button.withAlignment Left
        |> Button.withBackgroundColor Style.white
        |> Button.withFontColor Style.black
        |> Button.withSelected False
        |> Button.toElement


filterFileNames : List String -> List String
filterFileNames list =
    List.filter (\item -> List.member (fileExtension item) [ "md", "tex" ]) list


label text_ =
    p labelStyle [ text text_ ]


renderedSource : Model -> Html Msg
renderedSource model =
    Keyed.node "div"
        renderedSourceStyle
        [ ( String.fromInt model.counter, render model.docType model.content ) ]



--- Rendering Markdown+ and MiniLaTeX


macros =
    "\\newcommand{\\bra}{\\langle}"


render : DocType -> String -> Html Msg
render docType content =
    case docType of
        MarkdownDoc ->
            Markdown.Render.toHtml ExtendedMath content |> Html.map MarkdownMsg

        MiniLaTeXDoc ->
            MiniLatex.render "noSelectedId" NoDelay macros content |> Html.map LaTeXMsg



-- BUTTONS


button width str msg =
    Button.make msg str
        |> Button.withWidth (Bounded width)
        |> Button.withSelected False
        |> Button.toElement


getFileButton : String -> Element Msg
getFileButton fileName =
    button 140 fileName (GetText fileName)



-- HELPERS


fileExtension : String -> String
fileExtension str =
    str |> String.split "." |> List.reverse |> List.head |> Maybe.withDefault "txt"


docTypeOfFile : String -> DocType
docTypeOfFile fileName =
    case fileExtension fileName of
        "md" ->
            MarkdownDoc

        "tex" ->
            MiniLaTeXDoc

        _ ->
            MarkdownDoc
