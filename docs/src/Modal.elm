module Modal exposing (Model, Msg(..), update, view)

import DocsLayout exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Html.Styled.Events exposing (onClick)
import Isdc.Ui.Button as Button
import Isdc.Ui.Modal exposing (..)


type alias Model =
    Bool


type Msg
    = Open
    | Close


view open =
    story
        { title = "Isdc.Ui.Modal exposing (..)"
        , chapters =
            [ { heading = "modal : Maybe a -> msg -> List (Html msg) -> Html msg"
              , example =
                    div []
                        [ Button.green [ onClick Open ] [ text "Open" ]
                        , if open then
                            modal Nothing Close [ Button.green [ onClick Close ] [ text "Close" ] ]

                          else
                            text ""
                        ]
              , codeUsage = """
modal Nothing Close
"""
              }
            ]
        }


update msg model =
    case msg of
        Open ->
            True

        Close ->
            False
