module Isdc.Ui.Checkbox exposing (CheckboxOptions, baseCheckboxStyles, checkBox)

import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (class, css)
import Html.Styled.Events exposing (onClick)
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Theme as Theme exposing (Theme)


baseCheckboxStyles : Css.Style
baseCheckboxStyles =
    Css.batch
        [ Css.width (px 18)
        , Css.height (px 18)
        , border2 (px 2) solid
        , borderRadius (px 2)
        , outline zero
        , position relative
        , marginRight (px 11)
        , cursor pointer
        , borderRadius (px 2)
        ]


type alias CheckboxOptions msg =
    { checked : Bool
    , disabled : Bool
    , onValueChange : msg
    , label : String
    }


checkBox : Theme -> CheckboxOptions msg -> Html msg
checkBox theme options =
    let
        backgroundColor_ =
            case theme of
                Theme.New ->
                    case ( options.checked, options.disabled ) of
                        ( False, False ) ->
                            rgba 0 0 0 0

                        ( True, False ) ->
                            Color.brand01

                        ( False, True ) ->
                            Color.primary01

                        ( True, True ) ->
                            Color.white40

                _ ->
                    case options.checked of
                        True ->
                            Color.green

                        False ->
                            rgba 0 0 0 0

        borderColor_ =
            case theme of
                Theme.New ->
                    case ( options.checked, options.disabled ) of
                        ( False, False ) ->
                            Color.white60

                        ( True, False ) ->
                            Color.brand01

                        ( False, True ) ->
                            Color.white40

                        ( True, True ) ->
                            Color.white40

                _ ->
                    case options.checked of
                        True ->
                            Color.green

                        False ->
                            Color.black40

        checkmarkColor =
            case theme of
                Theme.New ->
                    Color.primary01

                _ ->
                    Color.white

        labelColor =
            case theme of
                Theme.New ->
                    Color.white60

                _ ->
                    Color.black
    in
    div []
        [ button
            [ css
                [ baseCheckboxStyles
                , backgroundColor backgroundColor_
                , borderColor borderColor_
                , hover [ borderColor Color.brand01 ]
                ]
            , onClick options.onValueChange
            , class "pb-test__checkbox"
            ]
            (if options.checked then
                [ span
                    [ css
                        [ borderBottom3 (px 2) solid checkmarkColor
                        , borderLeft3 (px 2) solid checkmarkColor
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

             else
                []
            )
        , span [ css [ color labelColor ] ] [ text options.label ]
        ]
