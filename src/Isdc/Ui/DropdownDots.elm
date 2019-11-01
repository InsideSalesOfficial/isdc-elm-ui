module Isdc.Ui.DropdownDots exposing (Direction(..), dropdownDots)

import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (class, css)
import Html.Styled.Events exposing (onBlur, onClick)
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Theme as Theme exposing (Theme)
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
    , theme : Theme
    }


dot =
    span
        [ css
            [ width <| px 4
            , height <| px 4
            , borderRadius <| pct 50
            , backgroundColor Color.white60
            , margin2 (px 2) zero
            , display block
            , cursor pointer
            ]
        ]
        []


dropdownBoxCss direction theme =
    let
        ( textColor, dropdownColor ) =
            case theme of
                Theme.New ->
                    ( Color.white90, Color.primary03 )

                _ ->
                    ( Color.black90, Color.white )
    in
    Css.batch
        [ backgroundColor dropdownColor
        , borderRadius <| px 3
        , position absolute
        , color textColor
        , (case direction of
            Up ->
                bottom

            Down ->
                top
          )
          <|
            pct 100
        , right zero
        , minWidth <| px 120
        , padding2 (px 12) zero
        , zIndex <| int 10
        , after
            [ width zero
            , height zero
            , borderLeft3 (px 4) solid transparent
            , borderRight3 (px 4) solid transparent
            , position absolute
            , case direction of
                Up ->
                    Css.batch
                        [ borderTop3 (px 4) solid dropdownColor
                        , top <| pct 100
                        ]

                Down ->
                    Css.batch
                        [ borderBottom3 (px 4) solid dropdownColor
                        , bottom <| pct 100
                        ]
            , right <| px 14
            , property "content" "''"
            ]
        ]


dropDown : List (Field valType) -> (valType -> msg) -> Direction -> msg -> Theme -> Html msg
dropDown fields choose direction close theme =
    div
        [ css
            [ dropdownBoxCss direction theme ]
        ]
    <|
        List.map
            (\field ->
                div
                    [ onClick <| choose field.value
                    , class "pb-test__select-option"
                    , css
                        [ subhead1
                        , border zero
                        , cursor pointer
                        , width <| pct 100
                        , whiteSpace noWrap
                        , padding4 (px 6) (px 24) (px 6) (px 10)
                        , textAlign left
                        , boxSizing borderBox
                        , hover
                            [ backgroundColor
                                (case theme of
                                    Theme.New ->
                                        Color.white10

                                    _ ->
                                        Color.grayB
                                )
                            ]
                        ]
                    ]
                    [ text field.label
                    ]
            )
            fields


dropdownDots : DropdownOptions a msg -> Html msg
dropdownDots dropdownOptions =
    let
        { fields, choose, close, open, isOpen, direction, theme } =
            dropdownOptions
    in
    div
        [ css
            [ position relative
            ]
        ]
        [ button
            [ css
                [ padding2 (px 5) (px 15)
                , display inlineBlock
                , cursor pointer
                , outline zero
                , border zero
                , backgroundColor transparent
                ]
            , class "pb-test__toggle-menu"
            , onBlur close
            , onClick <|
                if isOpen then
                    close

                else
                    open
            ]
            [ dot
            , dot
            , dot
            , if isOpen then
                dropDown fields choose direction close theme

              else
                text ""
            ]
        ]
