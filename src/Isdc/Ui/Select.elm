module Isdc.Ui.Select exposing (LabelTypes(..), SelectOption, SelectOptions, selectBox, selectOptions)

import Css exposing (..)
import Css.Animations as Animations
import Css.Transitions as Transitions
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (class, css)
import Html.Styled.Events exposing (onBlur, onClick, onFocus)
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Scrollbar as Scrollbar
import Isdc.Ui.Theme as Theme exposing (Theme)
import Isdc.Ui.Typography as Typography exposing (subhead1)


type alias SelectOptions msg val =
    { theme : Theme
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


type LabelTypes msg
    = String String
    | Int Int
    | Html (Html msg)


type alias SelectOption msg val =
    { label : LabelTypes msg
    , value : val
    }



-- Select Box


selectBox : SelectOptions msg val -> Html msg
selectBox { theme, disabled, inputValue, labelText, onValueChange, onSelectFocus, onSelectBlur, focused, isOpen, options, onToggle, onClose } =
    div [ css [ position relative ] ]
        [ div [ css <| inputContainerCss theme focused ]
            [ label [ css <| labelCss theme inputValue focused ]
                [ text labelText
                ]
            , button
                [ onFocus onSelectFocus
                , onBlur onSelectBlur
                , css <| selectedOption theme
                , onClick onToggle
                ]
                [ text inputValue
                , caret isOpen theme
                ]
            ]
        , if isOpen then
            selectOptions theme options onValueChange onClose

          else
            text ""
        ]



-- Input Container


inputContainerBackground : Theme -> Style
inputContainerBackground theme =
    backgroundColor <|
        case theme of
            Theme.Dark ->
                Color.darkBlue

            Theme.Light ->
                Color.grayA

            Theme.New ->
                Color.primary05


inputContainerBorderColor : Theme -> Bool -> Style
inputContainerBorderColor theme focused =
    Css.batch
        [ borderRadius (px 2)
        , borderBottom3 (px 2) solid <|
            case ( theme, focused ) of
                ( Theme.Dark, False ) ->
                    Color.white60

                ( Theme.Light, False ) ->
                    Color.black40

                ( Theme.New, False ) ->
                    Color.white40

                ( Theme.Dark, True ) ->
                    Color.green

                ( Theme.Light, True ) ->
                    Color.green

                ( Theme.New, True ) ->
                    Color.white60
        ]


inputContainerCss : Theme -> Bool -> List Style
inputContainerCss theme focused =
    [ position relative
    , inputContainerBorderColor theme focused
    , inputContainerBackground theme
    ]



-- Selected Option


cutOffText : Style
cutOffText =
    Css.batch
        [ whiteSpace noWrap
        , textOverflow ellipsis
        , overflow hidden
        ]


selectedOptionColor : Theme -> Style
selectedOptionColor theme =
    case theme of
        Theme.Dark ->
            color Color.white90

        Theme.Light ->
            color Color.black90

        Theme.New ->
            color Color.white90


selectOptionLabel : SelectOption msg val -> Html msg
selectOptionLabel option =
    case option.label of
        String str ->
            text str

        Int int ->
            text <| String.fromInt int

        Html html ->
            html


selectedOption : Theme -> List Style
selectedOption theme =
    [ selectedOptionColor theme
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


selectOptionColor : Theme -> Style
selectOptionColor theme =
    Css.batch
        [ color <|
            case theme of
                Theme.Dark ->
                    Color.black

                Theme.Light ->
                    Color.black

                Theme.New ->
                    Color.white90
        , backgroundColor <|
            case theme of
                Theme.Dark ->
                    Color.white

                Theme.Light ->
                    Color.white

                Theme.New ->
                    Color.primary03
        , hover <|
            case theme of
                Theme.Dark ->
                    [ backgroundColor Color.grayB ]

                Theme.Light ->
                    [ backgroundColor Color.grayB ]

                Theme.New ->
                    [ backgroundColor Color.primary05 ]
        ]


selectOptionAnimation : Int -> Int -> Style
selectOptionAnimation length index =
    Css.batch
        [ property "animation-duration" "0.3s"
        , property "animation-timing-function" "ease-in-out"
        , property "animation-fill-mode" "forwards"
        , opacity zero
        , property "animation-delay"
            ((toFloat index |> (+) 1)
                / (length + 1 |> toFloat)
                |> (*) 0.284
                |> String.fromFloat
                |> (\f -> f ++ "s")
            )
        , animationName <|
            Animations.keyframes [ ( 0, [ Animations.opacity zero ] ), ( 100, [ Animations.opacity (num 1) ] ) ]
        ]


selectOption : Theme -> (val -> msg) -> Int -> Int -> SelectOption msg val -> Html msg
selectOption theme onValueChange length index option =
    button
        [ onClick <| onValueChange option.value
        , class "pb-test__select-input"
        , css
            [ selectOptionColor theme
            , selectOptionAnimation length index
            , subhead1
            , padding2 zero <| px 24
            , display block
            , border zero
            , outline zero
            , width <| pct 100
            , textAlign left
            , lineHeight <| px 36
            , cutOffText
            , cursor pointer
            ]
        ]
        [ selectOptionLabel option ]



-- Select Options


selectOptionsBackgroundColor : Theme -> Style
selectOptionsBackgroundColor theme =
    backgroundColor <|
        case theme of
            Theme.Dark ->
                Color.white

            Theme.Light ->
                Color.white

            Theme.New ->
                Color.primary03


selectOptionsAnimation : Style
selectOptionsAnimation =
    animationName <|
        Animations.keyframes
            [ ( 0
              , [ Animations.transform [ translateY (px -24), scaleY 0.4 ]
                , Animations.opacity zero
                ]
              )
            , ( 40
              , [ Animations.opacity <| num 1
                ]
              )
            , ( 100
              , [ Animations.transform [ translateY zero, scaleY 1 ]
                ]
              )
            ]


selectOptions : Theme -> List (SelectOption msg val) -> (val -> msg) -> msg -> Html msg
selectOptions theme options onValueChange onClose =
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
            , class "pb-test__select-input-option"
            ]
            []
        , div
            [ css
                [ padding2 (px 8) zero
                , maxHeight <| px 200
                , overflow auto
                , position absolute
                , top (pct 100)
                , left zero
                , width <| pct 100
                , zIndex <| int 10
                , boxShadow4 (px 2) (px 4) (px 10) Color.black40
                , selectOptionsBackgroundColor theme
                , Scrollbar.styles theme
                , property "animation-duration" "0.16s"
                , property "animation-timing-function" "linear"
                , property "animation-fill-mode" "forwards"
                , property "transform-origin" "center 8px 0px"
                , selectOptionsAnimation
                ]
            ]
          <|
            List.indexedMap (selectOption theme onValueChange (List.length options)) options
        ]



-- Label


labelColor : Bool -> Theme -> Style
labelColor focused theme =
    color <|
        case theme of
            Theme.Dark ->
                if focused then
                    Color.green

                else
                    Color.white60

            Theme.Light ->
                if focused then
                    Color.green

                else
                    Color.black60

            Theme.New ->
                if focused then
                    Color.brand01

                else
                    Color.white40


labelPosition : String -> Style
labelPosition labelText =
    if labelText /= "" then
        Css.batch [ top <| px 10, Typography.caption ]

    else
        Css.batch [ top <| px 15, subhead1 ]


labelCss : Theme -> String -> Bool -> List Style
labelCss theme labelText focused =
    [ position absolute
    , left (px 16)
    , labelPosition labelText
    , labelColor focused theme
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



-- Caret


caretBorder : Bool -> Theme -> Style
caretBorder isOpen theme =
    let
        borderVert =
            if isOpen then
                borderBottom3

            else
                borderTop3

        caretColor =
            if isOpen then
                case theme of
                    Theme.Light ->
                        Color.black60

                    Theme.Dark ->
                        Color.white60

                    Theme.New ->
                        Color.white40

            else
                case theme of
                    Theme.Light ->
                        Color.black40

                    Theme.Dark ->
                        Color.white40

                    Theme.New ->
                        Color.white60
    in
    Css.batch
        [ borderVert (px 5) solid caretColor
        , borderLeft3 (px 5) solid transparent
        , borderRight3 (px 5) solid transparent
        ]


caret : Bool -> Theme -> Html msg
caret isOpen theme =
    div
        [ css
            [ caretBorder isOpen theme
            , right <| px 24
            , top <| pct 50
            , width zero
            , height zero
            , position absolute
            ]
        ]
        []
