module ISDCElmUI.Buttons exposing (..)

import Css exposing (..)
import ISDCElmUI.Colors.Css exposing (..)
import ISDCElmUI.Typography exposing (..)
import Css.Transitions exposing (easeInOut, transition)


baseButtonStyles : Css.Style
baseButtonStyles =
    Css.batch
        [ borderRadius (px 3)
        , isdcBlock
        , padding2 (px 10) (px 19)
        , margin (px 5)
        , border zero
        , outline zero
        , cursor pointer
        ]


greenButtonStyles : Css.Style
greenButtonStyles =
    Css.batch
        [ baseButtonStyles
        , backgroundColor green
        , color white
        , boxShadow4 zero zero zero (rgba 0 0 0 0)
        , transition
            [ Css.Transitions.boxShadow 200
            , Css.Transitions.backgroundColor 200
            ]
        , disabled
            [ backgroundColor darkBlueD
            , opacity (num 0.1)
            , color white
            ]
        , hover
            [ boxShadow5 zero (px 2) (px 6) (px -1) black40
            , backgroundColor greenB
            ]
        , active
            [ backgroundColor green
            ]
        ]


whiteButtonStyles : Css.Style
whiteButtonStyles =
    Css.batch
        [ baseButtonStyles
        , backgroundColor white
        , color black40
        , hover
            [ backgroundColor green10
            ]
        ]
