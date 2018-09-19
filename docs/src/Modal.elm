module Modal exposing (Model, Msg(..), update, view)

import Css exposing (..)
import DocsLayout exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Events exposing (onClick)
import Html.Styled.Attributes exposing (..)
import Isdc.Ui.Modal exposing (..)
import Isdc.Ui.Buttons exposing (..)


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
                        [ button [ css [ greenButtonStyles ], onClick Open ] [ text "Open" ]
                        , if open then
                            modal Nothing
                                Close
                                [ button
                                    [ css
                                        [ greenButtonStyles
                                        ]
                                    , onClick Close
                                    ]
                                    [ text "Close" ]
                                ]
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
