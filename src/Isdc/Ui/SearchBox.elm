module Isdc.Ui.SearchBox exposing (SearchBoxOptions, SearchBoxTheme(..), searchBox)

import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, placeholder, value)
import Html.Styled.Events exposing (onBlur, onFocus, onInput)
import Isdc.Ui.Colors.Css exposing (..)
import Isdc.Ui.Colors.Hex exposing (grayC)
import Isdc.Ui.Icons exposing (searchIcon)
import Isdc.Ui.Typography as Typography exposing (subhead1)


type SearchBoxTheme
    = Dark
    | Light


type alias SearchBoxOptions msg =
    { theme : SearchBoxTheme
    , disabled : Bool
    , inputValue : String
    , placeholderText : String
    , onValueChange : String -> msg
    , onInputFocus : msg
    , onInputBlur : msg
    , focused : Bool
    }


searchBoxContainerCss theme focused =
    let
        ( bgColor, inputBorderColor ) =
            case theme of
                Dark ->
                    ( darkBlue, white60 )

                Light ->
                    ( grayA, black40 )
    in
    [ backgroundColor bgColor
    , borderRadius (px 3)
    , borderBottom3 (px 2)
        solid
        (if focused then
            green

         else
            inputBorderColor
        )
    , boxSizing borderBox
    , height (px 36)
    , padding2 (px 6) (px 8)
    , displayFlex
    , flexDirection row
    , alignItems center
    ]


inputContainerCss theme =
    let
        bgColor =
            case theme of
                Dark ->
                    darkBlue

                Light ->
                    grayA
    in
    [ backgroundColor bgColor
    ]


inputCss theme =
    let
        primaryColor =
            case theme of
                Dark ->
                    white90

                Light ->
                    black90
    in
    [ color primaryColor
    , paddingLeft (px 8)
    , subhead1
    , zIndex (int 1)
    , backgroundColor transparent
    , outline zero
    , border zero
    , boxSizing borderBox
    , pseudoElement "placeholder" [ color black60 ]
    ]


searchBox : SearchBoxOptions msg -> Html msg
searchBox options =
    let
        { theme, disabled, inputValue, onValueChange, placeholderText, onInputFocus, onInputBlur, focused } =
            options
    in
    div [ css <| searchBoxContainerCss theme focused ]
        [ fromUnstyled <| searchIcon "24px" "24px" grayC
        , input
            [ onFocus onInputFocus
            , onBlur onInputBlur
            , onInput onValueChange
            , placeholder placeholderText
            , value inputValue
            , css <| inputCss theme
            ]
            []
        ]
