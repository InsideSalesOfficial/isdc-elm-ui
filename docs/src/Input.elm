module Input exposing (Model, Msg(..), inputModel, update, view)

import Css exposing (..)
import DocsLayout exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Isdc.Ui.Theme as Theme
import Isdc.Ui.V2.Input exposing (..)


inputModel : Model
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
        { title = "Isdc.Ui.V2.Input exposing (..)"
        , chapters =
            [ { heading = "inputBox : InputOptions msg -> Html msg"
              , example =
                    div []
                        [ inputBox
                            [ inputTheme Theme.New
                            , inputDisabled False
                            , inputValue model.value
                            , labelText "Hello world"
                            , onValueChange ValueChange
                            , onInputFocus Focus
                            , onInputBlur Blur
                            , focused model.focused
                            , inputType "text"
                            ]
                        , div [ css [ paddingTop <| px 10 ] ]
                            [ inputBox
                                [ inputTheme Theme.Dark
                                , inputDisabled False
                                , inputValue model.value
                                , labelText "Hello world"
                                , onValueChange ValueChange
                                , onInputFocus Focus
                                , onInputBlur Blur
                                , focused model.focused
                                , inputType "text"
                                ]
                            ]
                        , div [ css [ paddingTop <| px 10 ] ]
                            [ inputBox
                                [ inputTheme Theme.Light
                                , inputDisabled False
                                , inputValue model.value
                                , labelText "Hello world"
                                , onValueChange ValueChange
                                , onInputFocus Focus
                                , onInputBlur Blur
                                , focused model.focused
                                , inputType "text"
                                ]
                            ]
                        ]
              , codeUsage = """
inputBox
    [ inputTheme Theme.New
    , inputDisabled False
    , inputValue model.value
    , labelText "Hello world"
    , onValueChange ValueChange
    , onInputFocus Focus
    , onInputBlur Blur
    , focused model.focused
    , inputType "text"
    ]
    
inputBox
    [ inputTheme Theme.Dark
    , inputDisabled False
    , inputValue model.value
    , labelText "Hello world"
    , onValueChange ValueChange
    , onInputFocus Focus
    , onInputBlur Blur
    , focused model.focused
    , inputType "text"
    ]

 inputBox
    [ inputTheme Theme.Light
    , inputDisabled False
    , inputValue model.value
    , labelText "Hello world"
    , onValueChange ValueChange
    , onInputFocus Focus
    , onInputBlur Blur
    , focused model.focused
    , inputType "text"
    ]
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
