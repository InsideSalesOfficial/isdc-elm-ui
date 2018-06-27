module Stories.Dropdown exposing (..)

import Html
import Html.Styled exposing (..)
import Isdc.Ui.Dropdown exposing (..)
import Base exposing (..)
import Css exposing (..)
import Html.Styled.Attributes exposing (..)


type Msg
    = Open
    | Cancel
    | Save
    | Toggle String
    | Search String


update : Msg -> DropDownProperties Msg -> DropDownProperties Msg
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
                options =
                    List.map
                        (\option ->
                            if option.value == value then
                                { option | checked = option.checked == False }
                            else
                                option
                        )
                        model.options
            in
                { model | options = options }

        Search search ->
            { model | search = search }


model : DropDownProperties Msg
model =
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


view model =
    story
        { title = "Isdc.Ui.Dropdown exposing (..)"
        , chapters =
            [ { heading = "multiCheckDropdown : DropDownProperties msg -> Html msg"
              , example = div [ css [ marginBottom (px 200) ] ] [ multiCheckDropdown model ]
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


main =
    Html.beginnerProgram
        { model = model
        , view = view >> toUnstyled
        , update = update
        }
