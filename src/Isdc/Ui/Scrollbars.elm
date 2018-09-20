module Isdc.Ui.Scrollbars exposing (darkScrollBarStyles, lightScrollBarStyles)

import Css exposing (..)
import Isdc.Ui.Colors.Css as Colors


type Color
    = Light
    | Dark


scrollbarStyles color =
    Css.batch
        [ pseudoElement "-webkit-scrollbar"
            [ backgroundColor transparent
            , borderLeft zero
            , marginRight <| px 10
            , width <| px 10
            , height <| px 10
            ]
        , pseudoElement "-webkit-scrollbar-button"
            [ width zero
            , height zero
            ]
        , pseudoElement "-webkit-scrollbar-thumb"
            [ backgroundClip contentBox
            , backgroundColor <|
                case color of
                    Dark ->
                        Colors.black40

                    Light ->
                        Colors.white40
            , border3 (px 1) solid transparent
            , borderRadius <| px 5
            ]
        , pseudoElement "-webkit-scrollbar-corner"
            [ backgroundColor transparent
            ]
        ]


darkScrollBarStyles =
    scrollbarStyles Dark


lightScrollBarStyles =
    scrollbarStyles Light
