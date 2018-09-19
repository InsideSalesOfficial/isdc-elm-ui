module DropDownTest exposing (Msg(..), suite)

import Css exposing (..)
import Expect exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, placeholder, src, value)
import Html.Styled.Events exposing (onClick, onInput)
import Isdc.Ui.Checkbox exposing (..)
import Isdc.Ui.Colors.Css exposing (..)
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
                            [ button
                                [ css
                                    [ backgroundColor green
                                    , baseCheckboxStyles
                                    , borderColor green
                                    ]
                                , onClick (toggleMessage option.value)
                                ]
                                [ span
                                    [ css
                                        [ borderBottom3 (px 2) solid white
                                        , borderLeft3 (px 2) solid white
                                        , width (px 10)
                                        , height (px 5)
                                        , transforms [ translate2 (pct -50) (pct -65), rotate (deg -45) ]
                                        , position absolute
                                        , top (pct 50)
                                        , left (pct 50)
                                        ]
                                    ]
                                    []
                                ]
                            , text option.label
                            ]
                        )
            ]
        ]
