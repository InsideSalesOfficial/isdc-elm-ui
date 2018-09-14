module Isdc.Ui.Loader exposing (..)

{-| Loading Element


# Loader

@docs loader, Size

-}

import Css exposing (..)
import Css.Animations as Animations
import Css.Transitions as Transitions
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, src, placeholder, value)
import Html.Styled.Events exposing (onInput, onFocus, onBlur)
import Isdc.Ui.Colors.Css exposing (..)
import Isdc.Ui.Typography as Typography exposing (subhead1, caption)


{-| LoaderSize is small medium or large
-}
type LoaderSize
    = Small
    | Medium
    | Large


transformTo val =
    Animations.transform [ scale val ]


loaderBubbleCss delay size =
    [ width <| px size
    , height <| px size
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


{-| loader is an animated loader with green dots
-}
loader : LoaderSize -> Html msg
loader size =
    let
        ( totalWidth, radius ) =
            case size of
                Small ->
                    ( 40, 10 )

                Medium ->
                    ( 55, 18 )

                Large ->
                    ( 80, 20 )
    in
        div
            [ css
                [ margin2 zero auto
                , width <| px totalWidth
                , textAlign center
                ]
            ]
            [ div [ css <| loaderBubbleCss -0.32 radius ] []
            , div [ css <| loaderBubbleCss -0.16 radius ] []
            , div [ css <| loaderBubbleCss 0 radius ] []
            ]
