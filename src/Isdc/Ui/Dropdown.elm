module Isdc.Ui.Dropdown exposing (multiCheckDropdown, DropDownProperties, baseCheckboxStyles, multiCheckDropdownItem, Option)

{-| Dropdown contains dropdown functions which return HTML


# Multi Check Dropdown

@docs multiCheckDropdown, DropDownProperties, baseCheckboxStyles, multiCheckDropdownItem, Option

-}

import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, src, placeholder, value)
import Html.Styled.Events exposing (onClick, onInput)
import Isdc.Ui.Typography exposing (..)
import Isdc.Ui.Icons exposing (..)
import Isdc.Ui.Buttons exposing (..)
import Isdc.Ui.Colors.Css exposing (..)
import Isdc.Ui.Colors.Hex as Hex exposing (grayC)


{-| DropDownProperties contains all needed data and msg types for the multiCheckDropdown

    dropdownModel =
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

-}
type alias DropDownProperties msg =
    { labelText : String
    , dropDownValue : String
    , options : List Option
    , open : Bool
    , openMessage : msg
    , toggleMessage : String -> msg
    , searchMessage : String -> msg
    , saveMessage : msg
    , cancelMessage : msg
    , search : String
    }


{-| multiCheckDropdown is a dropdown with checkboxes and confirmation buttons.

    -- Example usage
    dropdownModel =
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
    multiCheckDropdown dropdownModel

-}
multiCheckDropdown : DropDownProperties msg -> Html msg
multiCheckDropdown dropDownArgs =
    let
        { labelText, dropDownValue, options, open, openMessage, toggleMessage, searchMessage, search, saveMessage, cancelMessage } =
            dropDownArgs
    in
        div [ css [ position relative ] ]
            [ label [ css [ Isdc.Ui.Typography.caption ] ] [ text labelText ]
            , button
                [ css
                    [ color black60
                    , fontSize (px 16)
                    , border zero
                    , borderBottom3 (px 1) solid black60
                    , width (pct 100)
                    , textAlign left
                    , outline zero
                    , cursor pointer
                    , padding2 (px 10) zero
                    , backgroundColor transparent
                    ]
                , onClick openMessage
                ]
                [ text dropDownValue
                , span
                    [ css
                        [ width zero
                        , height zero
                        , borderLeft3 (px 5) solid transparent
                        , borderRight3 (px 5) solid transparent
                        , borderTop3 (px 5) solid black60
                        , position absolute
                        , top (pct 50)
                        , right (px 10)
                        , transform (translateY (pct -50))
                        ]
                    ]
                    []
                ]
            , (if open then
                div []
                    [ div
                        [ css
                            [ position fixed
                            , top zero
                            , left zero
                            , bottom zero
                            , right zero
                            , zIndex (int 100)
                            ]
                        , onClick openMessage
                        ]
                        []
                    , div
                        [ css
                            [ position absolute
                            , top zero
                            , boxShadow4 (px 2) (px 4) (px 10) black40
                            , backgroundColor (rgb 255 255 255)
                            , padding (px 15)
                            , zIndex (int 101)
                            , width (pct 100)
                            , boxSizing borderBox
                            , borderRadius (px 3)
                            ]
                        ]
                        [ div
                            [ css
                                [ border3 (px 1) solid black40
                                , borderRadius (px 3)
                                , alignItems center
                                , displayFlex
                                ]
                            ]
                            [ span
                                [ css
                                    [ displayFlex
                                    , margin2 zero (px 6)
                                    , alignItems center
                                    ]
                                ]
                                [ fromUnstyled <| searchIcon "24px" "24px" Hex.grayC ]
                            , input
                                [ css
                                    [ border zero
                                    , body1
                                    , outline zero
                                    , height (px 36)
                                    , color black40
                                    ]
                                , onInput searchMessage
                                , value search
                                , placeholder "Search"
                                ]
                                []
                            ]
                        , div
                            [ css
                                [ paddingTop (px 10)
                                ]
                            ]
                            [ div
                                [ css
                                    [ maxHeight (px 200)
                                    , overflow auto
                                    ]
                                ]
                                (List.map (\option -> multiCheckDropdownItem option toggleMessage) options)
                            , div
                                [ css
                                    [ displayFlex
                                    , justifyContent flexEnd
                                    ]
                                ]
                                [ button [ css [ whiteButtonStyles, minWidth (px 88) ], onClick cancelMessage ] [ text "Cancel" ]
                                , button [ css [ greenButtonStyles, minWidth (px 88) ], onClick saveMessage ] [ text "Save" ]
                                ]
                            ]
                        ]
                    , div [] []
                    ]
               else
                div [] []
              )
            ]


{-| baseCheckboxStyles for an unchecked checkbox.
-}
baseCheckboxStyles : Css.Style
baseCheckboxStyles =
    Css.batch
        [ width (px 18)
        , height (px 18)
        , border2 (px 2) solid
        , borderRadius (px 2)
        , outline zero
        , position relative
        , marginRight (px 11)
        , cursor pointer
        , borderRadius (px 2)
        ]


{-| Option is a data type to store a label, value and whether or not a checkbox is checked
-}
type alias Option =
    { label : String
    , value : String
    , checked : Bool
    }


{-| multiCheckDropdownItem is a single checkbox and label which can send a message to toggle the checkbox
-}
multiCheckDropdownItem : Option -> (String -> msg) -> Html msg
multiCheckDropdownItem option toggleMessage =
    div
        [ css [ margin2 (px 10) (px 0) ]
        ]
        [ button
            [ css
                (if option.checked then
                    [ backgroundColor green
                    , baseCheckboxStyles
                    , borderColor green
                    ]
                 else
                    [ baseCheckboxStyles
                    , borderColor black40
                    ]
                )
            , onClick (toggleMessage option.value)
            ]
            (if option.checked then
                [ span
                    [ css
                        [ borderBottom3 (px 2) solid white
                        , borderLeft3 (px 2) solid white
                        , width (px 10)
                        , height (px 5)
                        , transforms [ (translate2 (pct -50) (pct -65)), (rotate (deg -45)) ]
                        , position absolute
                        , top (pct 50)
                        , left (pct 50)
                        ]
                    ]
                    []
                ]
             else
                []
            )
        , text option.label
        ]
