module Isdc.Ui.Modal exposing (modal)

import Css exposing (..)
import Html.Styled exposing (Html, div)
import Html.Styled.Attributes exposing (css)
import Html.Styled.Events exposing (onClick)
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Theme as Theme exposing (Theme)


modal : Maybe { modalPadding : Px, modalWidth : Px } -> msg -> Theme -> List (Html msg) -> Html msg
modal options close theme body =
    let
        { modalWidth, modalPadding } =
            case options of
                Nothing ->
                    { modalWidth = px 360
                    , modalPadding = px 24
                    }

                Just justOptions ->
                    justOptions

        (modalBackgroundColor, textColor) =
            case theme of
                Theme.New ->
                    (Color.primary01, Color.white90)

                _ ->
                    (Color.white, Color.black90)
    in
    div
        [ css
            [ position fixed
            , top zero
            , left zero
            , right zero
            , bottom zero
            , displayFlex
            , alignItems center
            , justifyContent center
            ]
        ]
        [ div
            [ css
                [ backgroundColor Color.black40
                , position absolute
                , top zero
                , left zero
                , right zero
                , bottom zero
                , zIndex <| int 10
                ]
            , onClick close
            ]
            []
        , div
            [ css
                [ backgroundColor modalBackgroundColor
                , borderRadius (px 3)
                , boxSizing borderBox
                , width modalWidth
                , padding modalPadding
                , boxShadow5 zero (px 19) (px 38) zero Color.black40
                , zIndex <| int 20
                , color textColor
                ]
            ]
            body
        ]
