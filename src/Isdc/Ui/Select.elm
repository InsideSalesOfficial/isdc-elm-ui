module Isdc.Ui.Select exposing (..)

import Css exposing (..)
import Css.Transitions as Transitions
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, src, placeholder, value)
import Html.Styled.Events exposing (onFocus, onBlur, onClick)
import Isdc.Ui.Colors.Css exposing (..)
import Isdc.Ui.Typography as Typography exposing (subhead1, caption)


type SelectTheme
    = Dark
    | Light


type alias SelectOptions msg val =
    { theme : SelectTheme
    , disabled : Bool
    , inputValue : String
    , labelText : String
    , onValueChange : val -> msg
    , onSelectFocus : msg
    , onSelectBlur : msg
    , focused : Bool
    , isOpen : Bool
    , options : List (SelectOption msg val)
    , onToggle : msg
    , onClose : msg
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


selectCss theme =
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
        , padding4 (px 24) (px 40) (px 4) (px 16)
        , position relative
        , zIndex (int 1)
        , backgroundColor transparent
        , outline zero
        , border zero
        , boxSizing borderBox
        , width (pct 100)
        , outline zero
        , textAlign left
        , cutOffText
        , cursor pointer
        ]


type LabelTypes msg
    = String String
    | Int Int
    | Html (Html msg)


type alias SelectOption msg val =
    { label : LabelTypes msg
    , value : val
    }


cutOffText =
    Css.batch
        [ whiteSpace noWrap
        , textOverflow ellipsis
        , overflow hidden
        ]


selectOption onValueChange option =
    let
        label =
            case option.label of
                String str ->
                    text str

                Int int ->
                    text <| String.fromInt int

                Html html ->
                    html
    in
        button
            [ onClick <| onValueChange option.value
            , css
                [ subhead1
                , padding2 zero <| px 24
                , display block
                , backgroundColor white
                , border zero
                , outline zero
                , width <| pct 100
                , textAlign left
                , lineHeight <| px 36
                , cutOffText
                , cursor pointer
                , hover
                    [ backgroundColor grayB
                    ]
                ]
            ]
            [ label ]


selectOptions : List (SelectOption msg val) -> (val -> msg) -> msg -> Html msg
selectOptions options onValueChange onClose =
    div []
        [ div
            [ css
                [ position fixed
                , top zero
                , bottom zero
                , left zero
                , right zero
                ]
            , onClick onClose
            ]
            []
        , div
            [ css
                [ padding2 (px 8) zero
                , maxHeight <| px 200
                , overflow auto
                , position absolute
                , top <| calc (pct 100) plus (px 2)
                , width <| pct 100
                , zIndex <| int 10
                , boxShadow4 (px 2) (px 4) (px 10) black40
                , backgroundColor white
                ]
            ]
          <|
            List.map (selectOption onValueChange) options
        ]


labelCss theme labelText focused =
    let
        hasText =
            labelText /= ""

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


caret isOpen theme =
    let
        ( borderVert, caretColor ) =
            if isOpen then
                ( borderBottom3
                , (case theme of
                    Light ->
                        black60

                    Dark ->
                        white60
                  )
                )
            else
                ( borderTop3
                , (case theme of
                    Light ->
                        black40

                    Dark ->
                        white40
                  )
                )
    in
        div
            [ css
                [ borderVert (px 5) solid caretColor
                , borderLeft3 (px 5) solid transparent
                , borderRight3 (px 5) solid transparent
                , right <| px 24
                , top <| pct 50
                , width zero
                , height zero
                , position absolute
                ]
            ]
            []


selectBox : SelectOptions msg val -> Html msg
selectBox selectBoxOptions =
    let
        { theme, disabled, inputValue, labelText, onValueChange, onSelectFocus, onSelectBlur, focused, isOpen, options, onToggle, onClose } =
            selectBoxOptions
    in
        div [ css <| inputContainerCss theme focused ]
            [ label [ css <| labelCss theme inputValue focused ]
                [ text labelText
                ]
            , button
                [ onFocus onSelectFocus
                , onBlur onSelectBlur
                , css <| selectCss theme
                , onClick onToggle
                ]
                [ text inputValue
                , caret isOpen theme
                ]
            , if isOpen then
                selectOptions options onValueChange onClose
              else
                text ""
            ]
