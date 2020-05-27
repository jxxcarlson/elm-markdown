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
    ( { sourceText = sourceText }, Cmd.none )


sourceText =
    """
Test: $a^2 + b^2 = c^3$

>> &bbA;   &bbB; &bbC; &bbD; &bbE; &bbF;
&bbG; &bbH; &bbI; &bbJ; &bbK; &bbL; &bbM;
&bbN; &bbO; &bbP; &bbQ; &bbR; &bbS; &bbT;
&bbU; &bbV; &bbW; &bbX; &bbY; &bbZ;

>> &in; &notin; &sub; &nsub; &sup; &nsup;
&equiv; &nequiv; &not; &or; &and;
&forall; &exist; &nexist; &cup; &cap;

>> &rArr; &rarr; &lArr; &larr; &hArr; &harr;
&tilde; &excl; &middot; &amp; &def;

>> &oplus; &top; &bot; &vdash; &vDash; &down; &up;
&nor; &nand; &dagger; &boolzero; &boolone; &empty;

>> &Sigma; &to; &Pi; &from; &alpha;

>> proof : &forall; (b : &bbB;') &to; &tilde; &tilde; b &equiv; b
proof tt = refl
proof ff = refl



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
    Html.div [ HA.style "margin" "50px" ]
        [ Markdown.Render.toHtml ExtendedMath model.sourceText
            |> Html.map MarkdownMsg
        ]
