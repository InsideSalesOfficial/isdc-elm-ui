module Radio exposing (Model, Msg(..), update, view)

import Css exposing (backgroundColor, padding, px)
import DocsLayout exposing (..)
import Html.Styled exposing (div, text)
import Html.Styled.Attributes exposing (css)
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Radio exposing (radio, radioList)


type alias Model =
    String


type Msg
    = ValueChange Int


whiteBackground html =
    div
        [ css
            [ backgroundColor Color.white
            , padding <| px 10
            ]
        ]
        [ html ]


view model =
    story
        { title = "Isdc.Ui.Checkbox exposing (radio, radioList)"
        , chapters =
            [ { heading = "radio : Radio a msg -> a -> (a -> msg) -> Html msg"
              , example =
                    whiteBackground <|
                        let
                            radioContent =
                                { label = text "Foo"
                                , value = 0
                                }
                        in
                        radio radioContent model ValueChange
              , codeUsage = """
let
    radioContent =
        { label = text "Foo"
        , value = 0
        }
in
radio radioContent model ValueChange
"""
              }
            , { heading = "radioList : List (Radio a msg) -> (a -> msg) -> Html msg"
              , example =
                    whiteBackground <|
                        let
                            radios =
                                [ { label = text "Foo"
                                  , value = 0
                                  }
                                , { label = text "Bar"
                                  , value = 1
                                  }
                                , { label = text "Baz"
                                  , value = 2
                                  }
                                ]
                        in
                        radioList radios model ValueChange
              , codeUsage = """
let
    radios =
        [ { label = text "Foo"
            , value = 0
            }
        , { label = text "Bar"
            , value = 1
            }
        , { label = text "Baz"
            , value = 2
            }
        ]
in
radioList radios model ValueChange
"""
              }
            ]
        }


update msg _ =
    case msg of
        ValueChange val ->
            val
