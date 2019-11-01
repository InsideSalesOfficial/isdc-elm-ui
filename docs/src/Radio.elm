module Radio exposing (Model, Msg(..), update, view)

import Css exposing (backgroundColor, padding, px)
import DocsLayout exposing (..)
import Html.Styled exposing (div, text)
import Html.Styled.Attributes exposing (css)
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Radio exposing (radio, radioList)
import Isdc.Ui.Theme as Theme


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


darkbackground html =
    div
        [ css
            [ backgroundColor Color.primary01
            , padding <| px 10
            ]
        ]
        [ html ]


view model =
    story
        { title = "Isdc.Ui.Checkbox exposing (radio, radioList)"
        , chapters =
            [ { heading = "radio : Radio a msg -> a -> (a -> msg) -> Theme -> Html msg"
              , example =
                    darkbackground <|
                        let
                            radioContent =
                                { label = text "Foo"
                                , value = 0
                                }
                        in
                        radio radioContent model ValueChange Theme.New
              , codeUsage = """
let
    radioContent =
        { label = text "Foo"
        , value = 0
        }
in
radio radioContent model ValueChange Theme.New
"""
              }
            , { heading = "DEPRECATED: Light Theme"
              , example =
                    whiteBackground <|
                        let
                            radioContent =
                                { label = text "Foo"
                                , value = 0
                                }
                        in
                        radio radioContent model ValueChange Theme.Light
              , codeUsage = """
let
    radioContent =
        { label = text "Foo"
        , value = 0
        }
in
radio radioContent model ValueChange Theme.Light
"""
              }
            , { heading = "radioList : List (Radio a msg) -> (a -> msg) -> Theme -> Html msg"
              , example =
                    darkbackground <|
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
                        radioList radios model ValueChange Theme.New
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
radioList radios model ValueChange Theme.New
"""
              }
            , { heading = "DEPRECATED: Light Theme"
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
                        radioList radios model ValueChange Theme.Light
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
radioList radios model ValueChange Theme.Light
"""
              }
            ]
        }


update msg _ =
    case msg of
        ValueChange val ->
            val
