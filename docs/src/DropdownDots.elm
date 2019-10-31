module DropdownDots exposing (Model, Msg(..), initModel, update, view)

import Css exposing (..)
import DocsLayout exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import Html.Styled.Events exposing (onClick)
import Isdc.Ui.Button as Button
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.DropdownDots exposing (..)


initModel : Model
initModel =
    { open = False
    , direction = Down
    }


type alias Model =
    { open : Bool
    , direction : Direction
    }


type Msg
    = Choose String
    | Open
    | Close
    | ToggleDirection


view model =
    story
        { title = "Isdc.Ui.DropdownDots exposing (..)"
        , chapters =
            [ { heading = "dropdownDots : DropdownOptions a msg -> Html msg"
              , example =
                    div
                        [ css
                            [ backgroundColor Color.darkBlueC
                            , height <| px 300
                            , displayFlex
                            , justifyContent flexEnd
                            , alignItems center
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
                            , isOpen = model.open
                            , direction = model.direction
                            }
                        , Button.green [ onClick ToggleDirection ] [ text "Toggle Direction" ]
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
            , isOpen = model.open
            , direction = model.direction
            }
"""
              }
            ]
        }


update msg model =
    case msg of
        Choose newVal ->
            { model | open = False }

        Open ->
            { model | open = True }

        Close ->
            { model | open = False }

        ToggleDirection ->
            case model.direction of
                Up ->
                    { model | direction = Down }

                Down ->
                    { model | direction = Up }
