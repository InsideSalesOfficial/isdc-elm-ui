module Main exposing (Model, Msg(..), Page(..), body, init, main, subscriptions, update, urlToPage, view, viewLink)

import Browser
import Browser.Navigation as Nav
import Buttons as Buttons
import Colors as Colors
import Css exposing (..)
import Dropdown as Dropdown
import Html.Styled as Styled exposing (..)
import Html.Styled.Attributes exposing (css, href)
import Icons as Icons
import Input as Input
import Select as Select
import Isdc.Ui.Colors.Css as IsdcColors
import Route exposing (Route)
import Typography as Typography
import Loader as Loader
import DropdownDots as DropdownDots
import Url


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
    | Loader
    | Input Input.Model
    | Dropdown Dropdown.Model
    | DropdownDots DropdownDots.Model
    | Select Select.Model


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

        "/loader" ->
            Loader

        "/dropdownDots" ->
            DropdownDots False

        "/select" ->
            Select Select.selectModel

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
    | DropdownDotsUpdate DropdownDots.Msg
    | SelectModelUpdate Select.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( msg, model.page ) of
        ( UrlChanged url, _ ) ->
            ( { model | url = url, page = urlToPage url }, Cmd.none )

        ( LinkClicked urlRequest, _ ) ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Nav.pushUrl model.navKey (Url.toString url) )

                Browser.External href ->
                    ( model, Nav.load href )

        ( InputUpdate inputMsg, Input inputModel ) ->
            ( { model
                | page = Input (Input.update inputMsg inputModel)
              }
            , Cmd.none
            )

        ( DropdownUpdate dropdownMsg, Dropdown dropdownModel ) ->
            ( { model
                | page = Dropdown (Dropdown.update dropdownMsg dropdownModel)
              }
            , Cmd.none
            )

        ( DropdownDotsUpdate dropdownDotsMsg, DropdownDots dropdownDotsModel ) ->
            ( { model
                | page = DropdownDots (DropdownDots.update dropdownDotsMsg dropdownDotsModel)
              }
            , Cmd.none
            )

        ( SelectModelUpdate selectMsg, Select selectModel ) ->
            ( { model
                | page = Select (Select.update selectMsg selectModel)
              }
            , Cmd.none
            )

        ( _, _ ) ->
            -- Disregard messages that arrived for the wrong page.
            ( model, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- VIEW


view : Model -> Browser.Document Msg
view model =
    { title = "URL Interceptor"
    , body =
        [ (body >> Styled.toUnstyled) model ]
    }


body model =
    div
        [ css
            [ position relative
            , height (pct 100)
            , displayFlex
            , alignItems stretch
            , justifyContent stretch
            , fontFamily sansSerif
            ]
        ]
        [ ul
            [ css
                [ width <| px 230
                , backgroundColor IsdcColors.grayA
                , margin zero
                , padding <| px 20
                , boxSizing borderBox
                ]
            ]
            [ viewLink "/home" "Home"
            , viewLink "/icons" "Icons"
            , viewLink "/buttons" "Buttons"
            , viewLink "/colors" "Colors"
            , viewLink "/input" "Input"
            , viewLink "/dropdown" "Dropdown"
            , viewLink "/loader" "Loader"
            , viewLink "/dropdownDots" "DropdownDots"
            , viewLink "/select" "Select"
            ]
        , div [ css [ flexGrow <| num 1, maxHeight <| pct 100, overflow auto ] ]
            [ case model.page of
                Home ->
                    h1 [ css [ padding <| px 20, marginTop zero ] ]
                        [ text "Isdc Elm Ui Docs"
                        ]

                Buttons ->
                    Buttons.view Nothing

                Icons ->
                    Icons.view Nothing

                Colors ->
                    Colors.view Nothing

                NotFound ->
                    text "404"

                Typography ->
                    Typography.view Nothing

                Input inputModel ->
                    Styled.map (\msg -> InputUpdate msg) <| Input.view inputModel

                Dropdown dropdownModel ->
                    Styled.map (\msg -> DropdownUpdate msg) <| Dropdown.view dropdownModel

                DropdownDots dropdownDotsModel ->
                    Styled.map (\msg -> DropdownDotsUpdate msg) <| DropdownDots.view dropdownDotsModel

                Loader ->
                    Loader.view Nothing

                Select selectModel ->
                    Styled.map (\msg -> SelectModelUpdate msg) <| Select.view selectModel
            ]
        ]


viewLink : String -> String -> Html msg
viewLink path label =
    li
        [ css
            [ display block
            , padding2 (px 10) zero
            , borderBottom3 (px 1) solid IsdcColors.grayC
            , lastChild
                [ borderBottom zero
                ]
            ]
        ]
        [ a
            [ href path
            , css
                [ color IsdcColors.grayD
                , textDecoration none
                ]
            ]
            [ text label ]
        ]
