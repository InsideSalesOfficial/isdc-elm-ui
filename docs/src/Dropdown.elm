module Dropdown exposing (..)

import Html.Styled exposing (..)
import Isdc.Ui.Dropdown exposing (..)
import DocsLayout exposing (..)
import Css exposing (..)
import Html.Styled.Attributes exposing (..)
import Dict as Dict exposing (Dict)
import Maybe as Maybe


type Msg
    = Open
    | Cancel
    | Save
    | Toggle String
    | Search String


type alias Model =
    { optionsChecked : Dict String Bool
    , open : Bool
    , search : String
    }


dropdownModel : Model
dropdownModel =
    { optionsChecked = Dict.empty
    , open = False
    , search = ""
    }


update : Msg -> Model -> Model
update msg model =
    case msg of
        Open ->
            { model | open = model.open == False }

        Cancel ->
            { model | open = False }

        Save ->
            { model | open = False }

        Toggle value ->
            let
                updated =
                    Dict.update
                        value
                        (\val -> Maybe.withDefault False val |> not |> Just)
                        model.optionsChecked
            in
                { model | optionsChecked = updated }

        Search search ->
            { model | search = search }


dropdownProps : Model -> DropDownProperties Msg
dropdownProps model =
    { labelText = "Hello world"
    , dropDownValue = "Some value you determine"
    , options =
        [ { label = "Foo"
          , value = "foo"
          , checked = Maybe.withDefault False <| Dict.get "foo" model.optionsChecked
          }
        , { label = "Bar"
          , value = "bar"
          , checked = Maybe.withDefault False <| Dict.get "bar" model.optionsChecked
          }
        ]
    , open = model.open
    , openMessage = Open
    , toggleMessage = Toggle
    , searchMessage = Search
    , saveMessage = Save
    , cancelMessage = Cancel
    , search = model.search
    }


view model =
    let
        props =
            dropdownProps model
    in
        story
            { title = "Isdc.Ui.Dropdown exposing (..)"
            , chapters =
                [ { heading = "multiCheckDropdown : DropDownProperties msg -> Html msg"
                  , example = div [ css [ marginBottom (px 200) ] ] [ multiCheckDropdown props ]
                  , codeUsage = """
let model =
    { labelText = "Hello world"
    , dropDownValue = "Some value you determine"
    , options =
        [ { label = "Foo"
          , value = "foo"
          , checked = False
          }
        , { label = "Bar"
          , value = "bar"
          , checked = False
          }
        ]
    , open = False
    , openMessage = Open
    , toggleMessage = Toggle
    , searchMessage = Search
    , saveMessage = Save
    , cancelMessage = Cancel
    , search = ""
    }

in multiCheckDropdown model"""
                  }
                ]
            }
