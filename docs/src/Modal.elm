module Modal exposing (Model, Msg(..), update, view)

import DocsLayout exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Html.Styled.Events exposing (onClick)
import Isdc.Ui.Button as Button
import Isdc.Ui.Modal exposing (..)
import Isdc.Ui.Theme as Theme exposing (Theme)


type alias Model =
    { open : Bool
    , theme : Theme
    }


type Msg
    = Open
    | Close
    | ToggleTheme


view { open, theme } =
    story
        { title = "Isdc.Ui.Modal exposing (..)"
        , chapters =
            [ { heading = "modal : Maybe a -> msg -> Theme -> List (Html msg) -> Html msg"
              , example =
                    div []
                        [ Button.green [ onClick Open ] [ text "Open" ]
                        , Button.green [ onClick ToggleTheme ] [ text "Toggle Theme" ]
                        , if open then
                            modal Nothing Close theme [ Button.green [ onClick Close ] [ text "Close" ] ]

                          else
                            text ""
                        ]
              , codeUsage =
                    let
                        themeText =
                            case theme of
                                Theme.Light ->
                                    "Theme.Light"

                                Theme.Dark ->
                                    "Theme.Dark"

                                Theme.New ->
                                    "Theme.New"
                    in
                    """
modal Nothing Close """ ++ themeText ++ " [...]"
              }
            ]
        }


update msg { open, theme } =
    case msg of
        Open ->
            { open = True, theme = theme }

        Close ->
            { open = False, theme = theme }

        ToggleTheme ->
            { open = False
            , theme =
                if theme == Theme.New then
                    Theme.Light

                else
                    Theme.New
            }
