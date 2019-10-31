module Isdc.Ui.Radio exposing (radio, radioList)

import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (class, css)
import Html.Styled.Events exposing (onClick)
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Theme as Theme exposing (Theme)
import Isdc.Ui.Typography as Typography


type alias Radio a msg =
    { label : Html msg
    , value : a
    }


radio : Radio a msg -> a -> (a -> msg) -> Theme -> Html msg
radio radioContent currentValue select theme =
    let
        { label, value } =
            radioContent

        selected =
            currentValue == value

        focusColor =
            case ( selected, theme ) of
                ( True, Theme.New ) ->
                    Color.brand01Transparent10

                ( False, Theme.New ) ->
                    Color.primary04

                ( True, _ ) ->
                    Color.green40

                ( False, _ ) ->
                    Color.green10

        radioBackground =
            case ( selected, theme ) of
                ( True, Theme.New ) ->
                    Color.brand01Transparent10

                ( False, Theme.New ) ->
                    Color.primary03

                ( True, _ ) ->
                    Color.green40

                ( False, _ ) ->
                    Color.grayA

        selectedColor =
            case theme of
                Theme.New ->
                    Color.brand01

                _ ->
                    Color.green

        borderCircleColor =
            case ( selected, theme ) of
                ( False, Theme.New ) ->
                    Color.white60

                ( True, Theme.New ) ->
                    Color.brand01

                _ ->
                    Color.black

        textColor =
            case theme of
                Theme.New ->
                    Color.white60

                _ ->
                    Color.black60
    in
    button
        [ css
            [ color textColor
            , displayFlex
            , width <| pct 100
            , outline zero
            , padding2 (px 8) (px 10)
            , justifyContent stretch
            , Typography.body2
            , margin2 (px 10) zero
            , border zero
            , alignItems center
            , cursor pointer
            , focus [ backgroundColor focusColor ]
            , backgroundColor radioBackground
            , firstChild
                [ marginTop zero
                ]
            , lastChild
                [ marginBottom zero
                ]
            ]
        , onClick <| select value
        , class "pb-test__radio"
        ]
        [ div
            [ css
                [ border3 (px 2) solid borderCircleColor
                , borderRadius <| pct 50
                , backgroundColor transparent
                , marginRight <| px 10
                , displayFlex
                , alignItems center
                , justifyContent center
                , width <| px 20
                , height <| px 20
                , boxSizing borderBox
                ]
            ]
          <|
            if selected then
                [ div
                    [ css
                        [ backgroundColor selectedColor
                        , borderRadius <| pct 50
                        , width <| px 10
                        , height <| px 10
                        ]
                    ]
                    []
                ]

            else
                []
        , label
        ]


radioList : List (Radio a msg) -> a -> (a -> msg) -> Theme -> Html msg
radioList radios currentValue select theme =
    div [] <|
        List.map (\radioContent -> radio radioContent currentValue select theme) radios
