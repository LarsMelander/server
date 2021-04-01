module Main exposing (main)

import Html exposing (div)


type alias Model =
    {}


type Msg
    = None


init : () -> ( Model.Model, Cmd Model.Msg )
init _ =
    ()


update : Model.Msg -> Model.Model -> ( Model.Model, Cmd Model.Msg )
update msg model =
    case msg of
        None ->
            ( model, Cmd.none )


view : Model.Model -> Browser.Document Model.Msg
view model =
    { title = "DB"
    , body = div [] []
    }


subscriptions : Model.Model -> Sub Model.Msg
subscriptions model =
    Sub.none


main : Program () Model.Model Model.Msg
main =
    Browser.document
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
