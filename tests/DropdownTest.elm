module DropdownTest exposing (Msg(..), suite)

import Css exposing (..)
import Expect exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, placeholder, src, value)
import Html.Styled.Events exposing (onClick, onInput)
import Isdc.Ui.Checkbox exposing (..)
import Isdc.Ui.Color.Css exposing (..)
import Isdc.Ui.Dropdown exposing (..)
import Test exposing (..)


type Msg
    = Foo String
    | Bar


suite : Test
suite =
    describe "Dropwdown"
        [ describe "IsdcDropDownItem"
            [ test "it should display as checked if checked " <|
                \_ ->
                    let
                        toggleMessage =
                            Foo

                        option =
                            { label = "Foo", value = "Bar", checked = True }
                    in
                    Expect.equal (multiCheckDropdownItem option Foo)
                        (div
                            [ css [ margin2 (px 10) (px 0) ]
                            ]
                            [ checkBox
                                { checked = option.checked
                                , disabled = False
                                , onValueChange = toggleMessage option.value
                                , label = option.label
                                }
                            ]
                        )
            ]
        ]
