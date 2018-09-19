module Isdc.Ui.DropdownDots exposing (Direction(..), dropdownDots)

import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, placeholder, src, value)
import Html.Styled.Events exposing (onClick, onInput)
import Isdc.Ui.Buttons exposing (..)
import Isdc.Ui.Colors.Css exposing (..)
import Isdc.Ui.Icons exposing (..)
import Isdc.Ui.Typography exposing (..)


type alias Field a =
    { label : String
    , value : a
    }


type Direction
    = Up
    | Down


type alias DropdownOptions valType msg =
    { fields : List (Field valType)
    , choose : valType -> msg
    , close : msg
    , open : msg
    , isOpen : Bool
    , direction : Direction
    }


dot =
    span
        [ css
            [ width <| px 4
            , height <| px 4
            , borderRadius <| pct 50
            , backgroundColor white60
            , margin2 (px 2) zero
            , display block
            , cursor pointer
            ]
        ]
        []


dropdownBoxCss direction =
    Css.batch
        [ backgroundColor white
        , borderRadius <| px 3
        , position absolute
        , (case direction of
            Up ->
                bottom

            Down ->
                top
          )
          <|
            pct 100
        , right zero
        , width <| px 240
        , padding2 (px 12) zero
        , after
            [ width zero
            , height zero
            , borderLeft3 (px 4) solid transparent
            , borderRight3 (px 4) solid transparent
            , position absolute
            , case direction of
                Up ->
                    Css.batch
                        [ borderTop3 (px 4) solid white
                        , top <| pct 100
                        ]

                Down ->
                    Css.batch
                        [ borderBottom3 (px 4) solid white
                        , bottom <| pct 100
                        ]
            , right <| px 14
            , property "content" "''"
            ]
        ]


dropDown : List (Field valType) -> (valType -> msg) -> Direction -> msg -> Html msg
dropDown fields choose direction close =
    div
        []
        [ div
            [ css
                [ position fixed
                , top zero
                , bottom zero
                , left zero
                , right zero
                ]
            , onClick close
            ]
            []
        , div
            [ css
                [ dropdownBoxCss direction ]
            ]
          <|
            List.map
                (\field ->
                    button
                        [ onClick <| choose field.value
                        , css
                            [ subhead1
                            , border zero
                            , cursor pointer
                            , width <| pct 100
                            , padding4 (px 6) (px 16) (px 6) (px 24)
                            , textAlign left
                            , outline zero
                            , color black90
                            , hover
                                [ backgroundColor grayB
                                ]
                            ]
                        ]
                        [ text field.label
                        ]
                )
                fields
        ]


dropdownDots : DropdownOptions a msg -> Html msg
dropdownDots dropdownOptions =
    let
        { fields, choose, close, open, isOpen, direction } =
            dropdownOptions
    in
    div
        [ css
            [ position relative
            ]
        ]
        [ div
            [ css
                [ padding2 (px 5) (px 15)
                , display inlineBlock
                , cursor pointer
                ]
            , onClick <|
                if isOpen then
                    close

                else
                    open
            ]
            [ dot
            , dot
            , dot
            ]
        , if isOpen then
            dropDown fields choose direction close

          else
            text ""
        ]
