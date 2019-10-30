module Isdc.Ui.Modal exposing (modal)

import Html.Styled exposing (div, Html)
import Css exposing (..)
import Isdc.Ui.Color.Css as Color
import Html.Styled.Attributes exposing (css)
import Html.Styled.Events exposing (onClick)


modal options close body =
    let
        { modalWidth, modalPadding } =
            case options of
                Nothing ->
                    { modalWidth = px 360
                    , modalPadding = px 24
                    }

                Just justOptions ->
                    justOptions
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
                    [ backgroundColor Color.white
                    , borderRadius (px 3)
                    , boxSizing borderBox
                    , width modalWidth
                    , padding modalPadding
                    , boxShadow5 zero (px 19) (px 38) zero Color.black40
                    , zIndex <| int 20
                    ]
                ]
                body
            ]
