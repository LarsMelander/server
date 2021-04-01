module Main exposing (main)

import Browser
import Nav
import Url



type alias Model =
    {}


type Msg
    = None


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key =
    ()


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        None ->
            ( model, Cmd.none )


view : Model.Model -> Browser.Document Model.Msg
view model =
    { title = "Ledger: "
    , body = div [] []
    }


onUrlRequest : Browser.UrlRequest -> Msg
onUrlRequest _ =
    None


onUrlChange : Url.Url -> Msg
onUrlChange _ =
    None


subscriptions : Model.Model -> Sub Model.Msg
subscriptions model =
    Sub.none


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlRequest = onUrlRequest
        , onUrlChange = onUrlChange
        }
