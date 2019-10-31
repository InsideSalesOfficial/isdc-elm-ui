module Checkbox exposing (Model, Msg(..), checkboxModel, update, view)

import Css
import DocsLayout exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import Isdc.Ui.Checkbox exposing (..)
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Theme as Theme


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
                    div [ css [ Css.backgroundColor Color.primary01, Css.padding (Css.px 10) ] ]
                        [ checkBox Theme.New
                            { checked = model.checked
                            , disabled = model.disabled
                            , onValueChange = ValueChange
                            , label = model.label
                            }
                        ]
              , codeUsage = """
checkBox Theme.New
    { checked = model.checked
    , disabled = model.disabled
    , onValueChange = ValueChange
    , label = model.label
    }
"""
              }
            , { heading = "checkBox : CheckboxOptions msg -> Html msg"
              , example =
                    div []
                        [ checkBox Theme.Dark
                            { checked = model.checked
                            , disabled = model.disabled
                            , onValueChange = ValueChange
                            , label = model.label
                            }
                        ]
              , codeUsage = """
 checkBox Theme.Dark
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
