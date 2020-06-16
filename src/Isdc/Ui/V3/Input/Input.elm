module Isdc.Ui.V3.Input.Input exposing (Config, Focus(..), Input(..), Msg, getValue, inputMessages, update)

import Html.Styled as Styled
import Html.Styled.Events as Events


type Input
    = Input Focus Config


type Focus
    = Focused
    | Unfocused


type alias Config =
    { value : String
    , label : Maybe String
    , placeholder : Maybe String
    }


getValue : Input -> String
getValue (Input focus config) =
    config.value



-- UPDATE


type Msg
    = InputChanged String
    | InputFocused
    | InputBlurred


update : Msg -> Input -> Input
update inputMsg (Input focus config) =
    case inputMsg of
        InputChanged newValue ->
            Input focus { config | value = newValue }

        InputFocused ->
            Input Focused config

        InputBlurred ->
            Input Unfocused config



-- VIEW


inputMessages : List (Styled.Attribute Msg)
inputMessages =
    [ Events.onInput InputChanged
    , Events.onFocus InputFocused
    , Events.onBlur InputBlurred
    ]
