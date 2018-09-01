module Input exposing (..)

import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Isdc.Ui.Input exposing (..)
import DocsLayout exposing (..)
import Css exposing (..)


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
            [ { heading = "Dark Theme"
              , example =
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
              , codeUsage = ""
              }
            , { heading = "Light Theme"
              , example =
                    div [ css [ backgroundColor <| hex "#fff", padding <| px 10 ] ]
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
              , codeUsage = ""
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
