module Input exposing (Model, Msg(..), inputModel, update, view)

import Css exposing (..)
import DocsLayout exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Isdc.Ui.Input exposing (..)


inputModel =
    { value = ""
    , focused = False
    }


type alias Model =
    { value : String
    , focused : Bool
    }


type Msg
    = ValueChange String
    | Focus
    | Blur


view model =
    story
        { title = "Isdc.Ui.Input exposing (..)"
        , chapters =
            [ { heading = "inputBox : InputOptions msg -> Html msg"
              , example =
                    div []
                        [ inputBox
                            { theme = Dark
                            , disabled = False
                            , inputValue = model.value
                            , labelText = "Hello world"
                            , onValueChange = ValueChange
                            , onInputFocus = Focus
                            , onInputBlur = Blur
                            , focused = model.focused
                            }
                        , div [ css [ backgroundColor <| hex "#fff", padding <| px 10 ] ]
                            [ inputBox
                                { theme = Light
                                , disabled = False
                                , inputValue = model.value
                                , labelText = "Hello world"
                                , onValueChange = ValueChange
                                , onInputFocus = Focus
                                , onInputBlur = Blur
                                , focused = model.focused
                                }
                            ]
                        ]
              , codeUsage = """
inputBox
    { theme = Dark
    , disabled = False
    , inputValue = model.value
    , labelText = "Hello world"
    , onValueChange = ValueChange
    , onInputFocus = Focus
    , onInputBlur = Blur
    , focused = model.focused
    }

inputBox
    { theme = Light
    , disabled = False
    , inputValue = model.value
    , labelText = "Hello world"
    , onValueChange = ValueChange
    , onInputFocus = Focus
    , onInputBlur = Blur
    , focused = model.focused
    }
"""
              }
            ]
        }


update msg model =
    case msg of
        ValueChange newVal ->
            { model | value = newVal }

        Focus ->
            { model | focused = True }

        Blur ->
            { model | focused = False }
