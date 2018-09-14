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
    | Open
    | Close


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
                            , { label = String "hello world"
                              , value = "HI"
                              }
                            , { label = String "hello world"
                              , value = "HI"
                              }
                            , { label = String "hello world"
                              , value = "HI"
                              }
                            , { label = String "hello world"
                              , value = "HI"
                              }
                            , { label = String "hello world"
                              , value = "HI"
                              }
                            , { label = String "hello world"
                              , value = "HI"
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
                                , onOpen = Open
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
                                    , onOpen = Open
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

        Open ->
            { model | isOpen = True }

        Close ->
            { model | isOpen = False }
