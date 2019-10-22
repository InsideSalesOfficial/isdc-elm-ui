module Isdc.Ui.Scrollbar exposing (styles)

import Css exposing (..)
import Isdc.Ui.Colors.Css as Colors
import Isdc.Ui.Theme as Theme exposing (Theme)


styles : Theme -> Style
styles theme =
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
                case theme of
                    Theme.Dark ->
                        Colors.black40

                    Theme.Light ->
                        Colors.white40

                    Theme.New ->
                        Colors.primary05
            , border3 (px 1) solid transparent
            , borderRadius <| px 5
            ]
        , pseudoElement "-webkit-scrollbar-corner"
            [ backgroundColor transparent
            ]
        ]
