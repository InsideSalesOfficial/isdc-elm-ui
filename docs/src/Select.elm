module Select exposing (Model, Msg(..), selectModel, update, view)

import Css exposing (..)
import DocsLayout exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import Isdc.Ui.Select exposing (..)


selectModel : Model
selectModel =
    { value = ""
    , focused = False
    , isOpen = False
    }


type alias Model =
    { value : String
    , focused : Bool
    , isOpen : Bool
    }


type Msg
    = ValueChange String
    | Focus
    | Blur
    | Toggle
    | Close
    | Noop


view model =
    story
        { title = "Isdc.Ui.Select exposing (..)"
        , chapters =
            [ { heading = "selectBox : SelectOptions msg -> Html msg"
              , example =
                    let
                        options =
                            [ { label = String "hello world"
                              , value = "HI"
                              }
                            , { label = String "hello world 2"
                              , value = "HI 2"
                              }
                            , { label = String "hello world 3"
                              , value = "HI 3"
                              }
                            , { label = String "hello world 4"
                              , value = "HI 4"
                              }
                            , { label = String "hello world 5"
                              , value = "HI 5"
                              }
                            , { label = String "hello world 6"
                              , value = "HI 6"
                              }
                            , { label = String "hello world 7 really really really really really really really really really really really really really long string"
                              , value = "hello world 7 really really really really really really really really really really really really really long string"
                              }
                            ]
                    in
                        div
                            [ css
                                [ height <| px 400
                                , displayFlex
                                , flexDirection column
                                , justifyContent spaceBetween
                                ]
                            ]
                            [ selectBox
                                { theme = Dark
                                , disabled = False
                                , inputValue = model.value
                                , labelText = "Hello world"
                                , onValueChange = ValueChange
                                , onSelectFocus = Focus
                                , onSelectBlur = Blur
                                , focused = model.focused
                                , isOpen = model.isOpen
                                , options = options
                                , onToggle = Toggle
                                , onClose = Close
                                }
                            , div [ css [ backgroundColor <| hex "#fff", padding <| px 10 ] ]
                                [ selectBox
                                    { theme = Light
                                    , disabled = False
                                    , inputValue = model.value
                                    , labelText = "Hello world"
                                    , onValueChange = ValueChange
                                    , onSelectFocus = Focus
                                    , onSelectBlur = Blur
                                    , focused = model.focused
                                    , isOpen = model.isOpen
                                    , options = options
                                    , onToggle = Toggle
                                    , onClose = Close
                                    }
                                ]
                            ]
              , codeUsage = """
selectBox
    { theme = Dark
    , disabled = False
    , inputValue = model.value
    , labelText = "Hello world"
    , onValueChange = ValueChange
    , onSelectFocus = Focus
    , onSelectBlur = Blur
    , focused = model.focused
    }

selectBox
    { theme = Light
    , disabled = False
    , inputValue = model.value
    , labelText = "Hello world"
    , onValueChange = ValueChange
    , onSelectFocus = Focus
    , onSelectBlur = Blur
    , focused = model.focused
    }
"""
              }
            ]
        }


update msg model =
    case msg of
        ValueChange newVal ->
            { model | value = newVal, isOpen = False }

        Focus ->
            { model | focused = True }

        Blur ->
            { model | focused = False }

        Toggle ->
            { model | isOpen = not model.isOpen }

        Close ->
            { model | isOpen = False }

        Noop ->
            model
