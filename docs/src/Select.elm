module Select exposing (Model, Msg(..), selectModel, update, view)

import Css exposing (..)
import DocsLayout exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import Isdc.Ui.Colors.Css as Color
import Isdc.Ui.Select exposing (..)
import Isdc.Ui.Theme as Theme


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


options : List { label : LabelTypes msg, value : String }
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


view : Model -> Html Msg
view model =
    story
        { title = "Isdc.Ui.Select exposing (..)"
        , chapters =
            [ { heading = "selectBox : SelectOptions msg -> Html msg"
              , example =
                    div
                        [ css
                            [ height <| px 400
                            , backgroundColor Color.primary01
                            ]
                        ]
                        [ div [ css [ padding <| px 10 ] ]
                            [ selectBox
                                { theme = Theme.New
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
              , codeUsage =
                    """
selectBox
   { theme = Theme.New
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
            , { heading = "DEPRECATED: Dark and Light Themes"
              , example =
                    div
                        [ css
                            [ displayFlex
                            , flexDirection row
                            , height <| px 300
                            ]
                        ]
                        [ div [ css [ padding <| px 10, width <| px 200 ] ]
                            [ selectBox
                                { theme = Theme.Dark
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
                        , div [ css [ padding <| px 10, width <| px 200 ] ]
                            [ selectBox
                                { theme = Theme.Light
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
   { theme = Theme.Dark
   , disabled = False
   , inputValue = model.value
   , labelText = "Hello world"
   , onValueChange = ValueChange
   , onSelectFocus = Focus
   , onSelectBlur = Blur
   , focused = model.focused
   }

selectBox
   { theme = Theme.Light
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


update : Msg -> Model -> Model
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
