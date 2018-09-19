module Checkbox exposing (Model, Msg(..), checkboxModel, update, view)

import Css exposing (..)
import DocsLayout exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Isdc.Ui.Checkbox exposing (..)


checkboxModel : Model
checkboxModel =
    { checked = False
    , disabled = False
    , label = "Hello"
    }


type alias Model =
    { checked : Bool
    , disabled : Bool
    , label : String
    }


type Msg
    = ValueChange


view model =
    story
        { title = "Isdc.Ui.Checkbox exposing (..)"
        , chapters =
            [ { heading = "checkBox : CheckboxOptions msg -> Html msg"
              , example =
                    div []
                        [ checkBox
                            { checked = model.checked
                            , disabled = model.disabled
                            , onValueChange = ValueChange
                            , label = model.label
                            }
                        ]
              , codeUsage = """
checkBox
    { checked = model.checked
    , disabled = False
    , onValueChange = ValueChange
    , label = "Hello"
    }
"""
              }
            ]
        }


update msg model =
    case msg of
        ValueChange ->
            { model | checked = not model.checked }
