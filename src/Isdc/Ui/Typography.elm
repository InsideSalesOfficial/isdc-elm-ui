module Isdc.Ui.Typography exposing (display2, display1, headline, title, subhead1, subhead2, subhead3, body2, body1, bodyCompact, caption)

{-|


# Typography

@docs display2, display1, headline, title, subhead1, subhead2, subhead3, body2, body1, bodyCompact, caption

-}

import Css exposing (..)


{-| display2 is a style with a very large font size and line height with a medium font
-}
display2 : Css.Style
display2 =
    Css.batch
        [ fontSize (px 24)
        , lineHeight (px 52)
        , fontWeight (int 400)
        ]


{-| display2 is a style with a large font size and line height with a medium font weight. It is smaller than display.
-}
display1 : Css.Style
display1 =
    Css.batch
        [ fontSize (px 34)
        , lineHeight (px 40)
        , fontWeight (int 400)
        ]


{-| headline is a style with a large font size and line height with a medium font weight. It is smaller than display1.
-}
headline : Css.Style
headline =
    Css.batch
        [ fontSize (px 24)
        , lineHeight (px 32)
        , fontWeight (int 400)
        ]


{-| title is a style with a large font size and line height with a semi-bold weight. It is smaller than headline.
-}
title : Css.Style
title =
    Css.batch
        [ fontSize (px 20)
        , lineHeight (px 28)
        , fontWeight (int 500)
        , letterSpacing (px 0.5)
        ]


{-| subhead2 is a bold medium sized font which.
-}
subhead2 : Css.Style
subhead2 =
    Css.batch
        [ fontSize (px 16)
        , lineHeight (px 28)
        , fontWeight (int 700)
        , letterSpacing (px 0.5)
        ]


{-| subhead1 is a medium sized font which has a medium weight.
-}
subhead1 : Css.Style
subhead1 =
    Css.batch
        [ fontSize (px 16)
        , lineHeight (px 24)
        , fontWeight (int 400)
        , letterSpacing (px 0.5)
        ]


{-| subhead3 is a medium sized font which has a semi-bold weight.
-}
subhead3 : Css.Style
subhead3 =
    Css.batch
        [ fontSize (px 16)
        , lineHeight (px 20)
        , fontWeight (int 500)
        , letterSpacing (px 0.5)
        ]


{-| body2 is a medium-small sized font which has a semi-bold weight.
-}
body2 : Css.Style
body2 =
    Css.batch
        [ fontSize (px 14)
        , lineHeight (px 24)
        , fontWeight (int 500)
        , letterSpacing (px 0.5)
        ]


{-| body1 is a medium-small sized font which has a medium weight.
-}
body1 : Css.Style
body1 =
    Css.batch
        [ fontSize (px 14)
        , lineHeight (px 20)
        , fontWeight (int 400)
        , letterSpacing (px 0.5)
        ]


{-| body2 is a medium-small sized font which has a medium weight and small line height.
-}
bodyCompact : Css.Style
bodyCompact =
    Css.batch
        [ fontSize (px 14)
        , lineHeight (px 16)
        , fontWeight (int 400)
        , letterSpacing (px 0.5)
        ]


{-| caption is a small sized font which has a medium font weight and small line height.
-}
caption : Css.Style
caption =
    Css.batch
        [ fontSize (px 12)
        , lineHeight (px 16)
        , fontWeight (int 400)
        , letterSpacing (px 0.5)
        ]
