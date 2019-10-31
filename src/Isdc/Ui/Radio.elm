module Isdc.Ui.Radio exposing (radio, radioList)

import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (class, css)
import Html.Styled.Events exposing (onClick)
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Typography as Typography


type alias Radio a msg =
    { label : Html msg
    , value : a
    }


radio : Radio a msg -> a -> (a -> msg) -> Html msg
radio radioContent currentValue select =
    let
        { label, value } =
            radioContent

        selected =
            currentValue == value
    in
    button
        [ css
            [ color Color.black60
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
            , focus
                [ if selected then
                    backgroundColor Color.green40

                  else
                    backgroundColor Color.green10
                ]
            , if selected then
                backgroundColor Color.green40

              else
                backgroundColor Color.grayA
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
                [ border3 (px 2) solid Color.black
                , borderRadius <| pct 50
                , backgroundColor Color.white
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
                        [ backgroundColor Color.green
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


radioList : List (Radio a msg) -> a -> (a -> msg) -> Html msg
radioList radios currentValue select =
    div [] <|
        List.map (\radioContent -> radio radioContent currentValue select) radios
