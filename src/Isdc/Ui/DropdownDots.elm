module Isdc.Ui.DropdownDots exposing (dropdownDots)

import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, src, placeholder, value)
import Html.Styled.Events exposing (onClick, onInput)
import Isdc.Ui.Typography exposing (..)
import Isdc.Ui.Icons exposing (..)
import Isdc.Ui.Buttons exposing (..)
import Isdc.Ui.Colors.Css exposing (..)


type alias Field a =
    { label : String
    , value : a
    }


type alias DropdownOptions valType msg =
    { fields : List (Field valType)
    , choose : valType -> msg
    , close : msg
    , open : msg
    , isOpen : Bool
    }


dot =
    span
        [ css
            [ width <| px 4
            , height <| px 4
            , borderRadius <| pct 50
            , backgroundColor white40
            , margin2 (px 2) zero
            , display block
            , cursor pointer
            ]
        ]
        []


dropDown : List (Field valType) -> (valType -> msg) -> msg -> Html msg
dropDown fields choose close =
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
                [ backgroundColor white
                , borderRadius <| px 3
                , position absolute
                , top <| pct 100
                , right zero
                , width <| px 240
                , padding2 (px 12) zero
                , after
                    [ width zero
                    , height zero
                    , borderLeft3 (px 4) solid transparent
                    , borderRight3 (px 4) solid transparent
                    , borderBottom3 (px 4) solid white
                    , position absolute
                    , bottom <| pct 100
                    , right <| px 14
                    , property "content" "''"
                    ]
                ]
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
        { fields, choose, close, open, isOpen } =
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
                dropDown fields choose close
              else
                text ""
            ]
