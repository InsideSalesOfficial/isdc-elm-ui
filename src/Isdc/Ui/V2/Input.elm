module Isdc.Ui.V2.Input exposing
    ( InputTheme(..)
    , focused
    , inputBox
    , inputContainerCss
    , inputCss
    , inputDisabled
    , inputTheme
    , inputType
    , inputValue
    , labelCss
    , labelText
    , onInputBlur
    , onInputFocus
    , onValueChange
    )

import Css exposing (..)
import Css.Transitions as Transitions
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, placeholder, src, type_, value)
import Html.Styled.Events exposing (onBlur, onFocus, onInput)
import Isdc.Ui.Colors.Css exposing (..)
import Isdc.Ui.Typography as Typography exposing (caption, subhead1)


type InputTheme
    = Dark
    | Light


type InputOptions msg
    = Theme InputTheme
    | Disabled Bool
    | InputValue String
    | LabelText String
    | OnValueChange (String -> msg)
    | OnInputFocus msg
    | OnInputBlur msg
    | Focused Bool
    | Type String


inputTheme =
    Theme


inputDisabled =
    Disabled


inputValue =
    InputValue


labelText =
    LabelText


onValueChange =
    OnValueChange


onInputFocus =
    OnInputFocus


onInputBlur =
    OnInputBlur


focused =
    Focused


inputType =
    Type


type alias InputOptionsRecord msg =
    { theme : InputTheme
    , disabled : Bool
    , inputValue : String
    , labelText : String
    , onValueChange : Maybe (String -> msg)
    , onInputFocus : Maybe msg
    , onInputBlur : Maybe msg
    , focused : Bool
    , inputType : String
    }


recordFromInputOptions : List (InputOptions msg) -> InputOptionsRecord msg
recordFromInputOptions options =
    List.foldl
        (\cur acc ->
            case cur of
                Theme theme ->
                    { acc | theme = theme }

                Disabled disabled ->
                    { acc | disabled = disabled }

                InputValue val ->
                    { acc | inputValue = val }

                LabelText text ->
                    { acc | labelText = text }

                OnValueChange message ->
                    { acc | onValueChange = Just message }

                OnInputFocus message ->
                    { acc | onInputFocus = Just message }

                OnInputBlur message ->
                    { acc | onInputBlur = Just message }

                Focused inputFocused ->
                    { acc | focused = inputFocused }

                Type givenType ->
                    { acc | inputType = givenType }
        )
        { theme = Light
        , disabled = False
        , inputValue = ""
        , labelText = ""
        , onValueChange = Nothing
        , onInputFocus = Nothing
        , onInputBlur = Nothing
        , focused = False
        , inputType = "text"
        }
        options


inputContainerCss theme isFocused =
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
        (if isFocused then
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


labelCss theme inputLabelText isFocused =
    let
        hasText =
            inputLabelText /= "" || isFocused

        ( topOffset, labelSize ) =
            if hasText then
                ( px 10, Typography.caption )

            else
                ( px 15, subhead1 )

        labelColor =
            if isFocused then
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


mayAttrToAppend attr =
    Maybe.map (\a -> (::) (attr a)) >> Maybe.withDefault identity


inputBox : List (InputOptions msg) -> Html msg
inputBox options =
    let
        recordOptions =
            recordFromInputOptions options
    in
    div [ css <| inputContainerCss recordOptions.theme recordOptions.focused ]
        [ label [ css <| labelCss recordOptions.theme recordOptions.inputValue recordOptions.focused ] [ text recordOptions.labelText ]
        , input
            ([ value recordOptions.inputValue
             , css <| inputCss recordOptions.theme
             , type_ recordOptions.inputType
             ]
                |> mayAttrToAppend onFocus recordOptions.onInputFocus
                |> mayAttrToAppend onBlur recordOptions.onInputBlur
                |> mayAttrToAppend onInput recordOptions.onValueChange
            )
            []
        ]
