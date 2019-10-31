module SearchBox exposing (Model, Msg(..), searchBoxModel, update, view)

import Css exposing (..)
import DocsLayout exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.SearchBox exposing (..)
import Isdc.Ui.Theme as Theme


searchBoxModel : Model
searchBoxModel =
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
        { title = "Isdc.Ui.SearchBox exposing (..)"
        , chapters =
            [ { heading = "searchBox : SearchBoxOptions msg -> Html msg"
              , example =
                    div []
                        [ div [ css [ backgroundColor <| Color.white, padding <| px 10 ] ]
                            [ searchBox
                                { theme = Theme.Dark
                                , disabled = False
                                , inputValue = model.value
                                , placeholderText = "Search"
                                , onValueChange = ValueChange
                                , onInputFocus = Focus
                                , onInputBlur = Blur
                                , focused = model.focused
                                }
                            ]
                        , div [ css [ backgroundColor <| Color.white, padding <| px 10 ] ]
                            [ searchBox
                                { theme = Theme.Light
                                , disabled = False
                                , inputValue = model.value
                                , placeholderText = "Search"
                                , onValueChange = ValueChange
                                , onInputFocus = Focus
                                , onInputBlur = Blur
                                , focused = model.focused
                                }
                            ]
                        , div [ css [ backgroundColor <| Color.primary01, padding <| px 10 ] ]
                            [ searchBox
                                { theme = Theme.New
                                , disabled = False
                                , inputValue = model.value
                                , placeholderText = "Search"
                                , onValueChange = ValueChange
                                , onInputFocus = Focus
                                , onInputBlur = Blur
                                , focused = model.focused
                                }
                            ]
                        ]
              , codeUsage = """
searchBox
    { theme = Dark
    , disabled = False
    , inputValue = model.value
    , placeholderText = "Search"
    , onValueChange = ValueChange
    , onInputFocus = Focus
    , onInputBlur = Blur
    , focused = model.focused
    }

searchBox
    { theme = Light
    , disabled = False
    , inputValue = model.value
    , placeholderText = "Hello world"
    , onValueChange = ValueChange
    , onInputFocus = Focus
    , onInputBlur = Blur
    , focused = model.focused
    }

searchBox
    { theme = New
    , disabled = False
    , inputValue = model.value
    , placeholderText = "Hello world"
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
