module ISDCElmUI.Typography exposing (..)

import Css exposing (..)
import ISDCElmUI.Colors.Css exposing (..)


isdcBody1 : Css.Style
isdcBody1 =
    Css.batch
        [ fontSize (px 14)
        , fontWeight (int 400)
        , lineHeight (px 20)
        , letterSpacing (px 0.5)
        ]


isdcSmallLabel : Css.Style
isdcSmallLabel =
    Css.batch
        [ fontWeight normal
        , fontSize (px 12)
        , color black60
        ]


isdcBlock : Css.Style
isdcBlock =
    Css.batch
        [ fontWeight normal
        , fontSize (px 14)
        , letterSpacing (px 0.58)
        , textTransform uppercase
        ]


isdcTitle : Css.Style
isdcTitle =
    Css.batch
        [ fontSize (px 20)
        , lineHeight (px 28)
        , fontWeight (int 500)
        , letterSpacing (px 0.5)
        ]


display2 : Css.Style
display2 =
    Css.batch
        [ fontSize (px 24)
        , lineHeight (px 52)
        , fontWeight (int 400)
        ]


display1 : Css.Style
display1 =
    Css.batch
        [ fontSize (px 34)
        , lineHeight (px 40)
        , fontWeight (int 400)
        ]


headline : Css.Style
headline =
    Css.batch
        [ fontSize (px 24)
        , lineHeight (px 32)
        , fontWeight (int 400)
        ]


title : Css.Style
title =
    Css.batch
        [ fontSize (px 20)
        , lineHeight (px 28)
        , fontWeight (int 500)
        , letterSpacing (px 0.5)
        ]


subhead2 : Css.Style
subhead2 =
    Css.batch
        [ fontSize (px 16)
        , lineHeight (px 28)
        , fontWeight (int 700)
        , letterSpacing (px 0.5)
        ]


subhead1 : Css.Style
subhead1 =
    Css.batch
        [ fontSize (px 16)
        , lineHeight (px 24)
        , fontWeight (int 400)
        , letterSpacing (px 0.5)
        ]


body2 : Css.Style
body2 =
    Css.batch
        [ fontSize (px 14)
        , lineHeight (px 24)
        , fontWeight (int 500)
        , letterSpacing (px 0.5)
        ]


body1 : Css.Style
body1 =
    Css.batch
        [ fontSize (px 14)
        , lineHeight (px 20)
        , fontWeight (int 400)
        , letterSpacing (px 0.5)
        ]


bodyCompact : Css.Style
bodyCompact =
    Css.batch
        [ fontSize (px 14)
        , lineHeight (px 16)
        , fontWeight (int 400)
        , letterSpacing (px 0.5)
        ]


caption : Css.Style
caption =
    Css.batch
        [ fontSize (px 12)
        , lineHeight (px 16)
        , fontWeight (int 400)
        , letterSpacing (px 0.5)
        ]
