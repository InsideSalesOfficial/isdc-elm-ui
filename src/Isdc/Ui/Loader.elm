module Isdc.Ui.Loader exposing (loader)

{-| Loading Element


# Loader

@docs loader

-}

import Css exposing (..)
import Css.Animations as Animations
import Css.Transitions as Transitions
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, src, placeholder, value)
import Html.Styled.Events exposing (onInput, onFocus, onBlur)
import Isdc.Ui.Colors.Css exposing (..)
import Isdc.Ui.Typography as Typography exposing (subhead1, caption)


transformTo val =
    Animations.transform [ scale val ]


loaderBubbleCss delay =
    [ width <| px 20
    , height <| px 20
    , backgroundColor green
    , borderRadius <| pct 50
    , display inlineBlock
    , property "animation-duration" "1.4s"
    , property "animation-timing-function" "ease-in-out"
    , property "animation-delay" <| (String.fromFloat delay) ++ "s"
    , property "animation-iteration-count" "infinite"
    , property "animation-fill-mode" "BOTH"
    , animationName <|
        Animations.keyframes
            [ ( 0, [ transformTo 0 ] )
            , ( 80, [ transformTo 0 ] )
            , ( 100, [ transformTo 0 ] )
            , ( 40, [ transformTo 1 ] )
            ]
    ]


{-| animated loader with green dots
-}
loader : Html msg
loader =
    div
        [ css
            [ margin2 zero auto
            , width <| px 80
            , textAlign center
            ]
        ]
        [ div [ css <| loaderBubbleCss -0.32 ] []
        , div [ css <| loaderBubbleCss -0.16 ] []
        , div [ css <| loaderBubbleCss 0 ] []
        ]
