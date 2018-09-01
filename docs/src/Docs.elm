module Main exposing (..)

import Browser
import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes exposing (..)
import Url
import Route exposing (Route)
import Buttons as Buttons
import Icons as Icons
import Colors as Colors
import Typography as Typography
import Input as Input
import Html.Styled as Styled
import Dropdown as Dropdown


-- MAIN


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }



-- MODEL


type Page
    = NotFound
    | Home
    | Buttons
    | Icons
    | Colors
    | Typography
    | Input Input.Model
    | Dropdown Dropdown.Model


type alias Model =
    { navKey : Nav.Key
    , url : Url.Url
    , page : Page
    }


urlToPage url =
    case url.path of
        "/home" ->
            Home

        "/buttons" ->
            Buttons

        "/icons" ->
            Icons

        "/colors" ->
            Colors

        "/typography" ->
            Typography

        "/input" ->
            Input Input.inputModel

        "/dropdown" ->
            Dropdown Dropdown.dropdownModel

        _ ->
            NotFound


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url navKey =
    ( { navKey = navKey
      , page = Home
      , url = url
      }
    , Cmd.none
    )



-- UPDATE


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url
    | InputUpdate Input.Msg
    | DropdownUpdate Dropdown.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Nav.pushUrl model.navKey (Url.toString url) )

                Browser.External href ->
                    ( model, Nav.load href )

        UrlChanged url ->
            ( { model
                | url = url
                , page = urlToPage url
              }
            , Cmd.none
            )

        InputUpdate inputMsg ->
            let
                pageModel =
                    case model.page of
                        Input inputModel ->
                            inputModel

                        _ ->
                            Input.inputModel
            in
                ( { model
                    | page = Input (Input.update inputMsg pageModel)
                  }
                , Cmd.none
                )

        DropdownUpdate dropdownMsg ->
            let
                pageModel =
                    case model.page of
                        Dropdown dropdownModel ->
                            dropdownModel

                        _ ->
                            Dropdown.dropdownModel
            in
                ( { model
                    | page = Dropdown (Dropdown.update dropdownMsg pageModel)
                  }
                , Cmd.none
                )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- VIEW


view : Model -> Browser.Document Msg
view model =
    { title = "URL Interceptor"
    , body =
        [ text "The current URL is: "
        , b [] [ text (Url.toString model.url) ]
        , ul []
            [ viewLink "/home"
            , viewLink "/icons"
            , viewLink "/buttons"
            , viewLink "/colors"
            , viewLink "/input"
            , viewLink "/dropdown"
            ]
        , div []
            [ (case model.page of
                Home ->
                    text "home"

                Buttons ->
                    (Buttons.view >> Styled.toUnstyled) Nothing

                Icons ->
                    (Icons.view >> Styled.toUnstyled) Nothing

                Colors ->
                    (Colors.view >> Styled.toUnstyled) Nothing

                NotFound ->
                    text "404"

                Typography ->
                    (Typography.view >> Styled.toUnstyled) Nothing

                Input inputModel ->
                    Html.map (\msg -> InputUpdate msg) <| (Input.view >> Styled.toUnstyled) inputModel

                Dropdown dropdownModel ->
                    Html.map (\msg -> DropdownUpdate msg) <| (Dropdown.view >> Styled.toUnstyled) dropdownModel
              )
            ]
        ]
    }


viewLink : String -> Html msg
viewLink path =
    li [] [ a [ href path ] [ text path ] ]
