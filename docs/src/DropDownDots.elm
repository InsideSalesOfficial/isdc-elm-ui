module DropdownDots exposing (Model, Msg(..), inputModel, update, view)

import Css exposing (..)
import DocsLayout exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import Isdc.Ui.DropdownDots exposing (..)
import Isdc.Ui.Colors.Css exposing (..)


inputModel =
    { value = ""
    , focused = False
    }


type alias Model =
    Bool


type Msg
    = Choose String
    | Open
    | Close


view model =
    story
        { title = "Isdc.Ui.DropdownDots exposing (..)"
        , chapters =
            [ { heading = "dropdownDots : DropdownOptions a msg -> Html msg"
              , example =
                    div
                        [ css
                            [ backgroundColor black
                            , height <| px 200
                            , displayFlex
                            , justifyContent flexEnd
                            , alignItems flexStart
                            ]
                        ]
                        [ dropdownDots
                            { fields =
                                [ { label = "Foo"
                                  , value = "Bar"
                                  }
                                ]
                            , choose = Choose
                            , close = Close
                            , open = Open
                            , isOpen = model
                            }
                        ]
              , codeUsage = """
dropdownDots
            { fields =
                [ { label = "Foo"
                    , value = "Bar"
                    }
                ]
            , choose = Choose
            , close = Close
            , open = Open
            , isOpen = model
            }
"""
              }
            ]
        }


update msg model =
    case msg of
        Choose newVal ->
            False

        Open ->
            True

        Close ->
            False
