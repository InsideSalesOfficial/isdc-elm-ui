module Isdc.Ui.Input exposing (InputOptions, InputTheme(..), inputBox, inputContainerCss, inputCss, labelCss)

import Css exposing (..)
import Css.Transitions as Transitions
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (class, css, value)
import Html.Styled.Events exposing (onBlur, onFocus, onInput)
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Typography as Typography exposing (subhead1)


type InputTheme
    = Dark
    | Light


type alias InputOptions msg =
    { theme : InputTheme
    , disabled : Bool
    , inputValue : String
    , labelText : String
    , onValueChange : String -> msg
    , onInputFocus : msg
    , onInputBlur : msg
    , focused : Bool
    }


inputContainerCss theme focused =
    let
        ( bgColor, inputBorderColor ) =
            case theme of
                Dark ->
                    ( Color.darkBlue, Color.white60 )

                Light ->
                    ( Color.grayA, Color.black40 )
    in
    [ backgroundColor bgColor
    , borderRadius (px 3)
    , borderBottom3 (px 2)
        solid
        (if focused then
            Color.green

         else
            inputBorderColor
        )
    , position relative
    ]


inputCss theme =
    let
        primaryColor =
            case theme of
                Dark ->
                    Color.white90

                Light ->
                    Color.black90
    in
    [ color primaryColor
    , subhead1
    , height (px 54)
    , padding3 (px 24) (px 16) (px 4)
    , position relative
    , zIndex (int 1)
    , backgroundColor transparent
    , outline zero
    , border zero
    , boxSizing borderBox
    , width (pct 100)
    ]


labelCss theme labelText focused =
    let
        hasText =
            labelText /= "" || focused

        ( topOffset, labelSize ) =
            if hasText then
                ( px 10, Typography.caption )

            else
                ( px 15, subhead1 )

        labelColor =
            if focused then
                Color.green

            else
                case theme of
                    Dark ->
                        Color.white60

                    Light ->
                        Color.black60
    in
    [ position absolute
    , top topOffset
    , left (px 16)
    , labelSize
    , color labelColor
    , Transitions.transition
        [ Transitions.top 140
        , Transitions.fontSize 140
        , Transitions.lineHeight 140
        , Transitions.letterSpacing 140
        ]
    , focus
        [ top (px 10)
        , Typography.caption
        ]
    ]


inputBox : InputOptions msg -> Html msg
inputBox options =
    let
        { theme, disabled, inputValue, labelText, onValueChange, onInputFocus, onInputBlur, focused } =
            options
    in
    div [ css <| inputContainerCss theme focused ]
        [ label [ css <| labelCss theme inputValue focused ] [ text labelText ]
        , input
            [ onFocus onInputFocus
            , onBlur onInputBlur
            , onInput onValueChange
            , value inputValue
            , css <| inputCss theme
            , class "pb-test__input"
            ]
            []
        ]
