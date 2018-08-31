module Isdc.Ui.Input exposing (..)

import Css exposing (..)
import Css.Transitions as Transitions
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, src, placeholder, value)
import Html.Styled.Events exposing (onInput, onFocus, onBlur)
import Isdc.Ui.Colors.Css exposing (..)
import Isdc.Ui.Typography as Typography exposing (subhead1, caption)


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
        , position relative
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
                ( (px 10), Typography.caption )
            else
                ( (px 15), subhead1 )

        labelColor =
            if focused then
                green
            else
                case theme of
                    Dark ->
                        white60

                    Light ->
                        black60
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
                ]
                []
            ]
