module Isdc.Ui.Button exposing (brand, secondaryDark, secondaryLight, green, greenDark, white)

{-| Buttons


# Buttons

@docs brand, secondaryDark, secondaryLight, green, greenDark, white

-}

import Css exposing (..)
import Css.Transitions exposing (transition)
import Html.Styled as Styled exposing (Attribute, Html)
import Html.Styled.Attributes as Attributes
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Typography as Typography



-- New Brand Buttons


{-| standard branded button
-}
brand : List (Attribute msg) -> List (Html msg) -> Styled.Html msg
brand options children =
    Styled.button ([ Attributes.css [ brandStyles ] ] ++ options) children


brandStyles : Css.Style
brandStyles =
    Css.batch
        [ baseStyles
        , backgroundColor Color.brand01
        , color Color.primary01
        , hover
            [ backgroundColor Color.brand02
            ]
        , disabled
            [ backgroundColor Color.brand03
            , color Color.primary03
            ]
        , active
            [ backgroundColor Color.brand01
            ]
        ]


{-| secondary button on dark background
-}
secondaryDark : List (Attribute msg) -> List (Html msg) -> Styled.Html msg
secondaryDark options children =
    Styled.button ([ Attributes.css [ secondaryDarkStyles ] ] ++ options) children


secondaryDarkStyles : Css.Style
secondaryDarkStyles =
    Css.batch
        [ baseStyles
        , backgroundColor transparent
        , color Color.white60
        , hover
            [ backgroundColor Color.white10
            , color Color.white
            ]
        , disabled
            [ backgroundColor transparent
            , color Color.white40
            ]
        ]


{-| secondary button on light background
-}
secondaryLight : List (Attribute msg) -> List (Html msg) -> Styled.Html msg
secondaryLight options children =
    Styled.button ([ Attributes.css [ secondaryLightStyles ] ] ++ options) children


secondaryLightStyles : Css.Style
secondaryLightStyles =
    Css.batch
        [ baseStyles
        , backgroundColor transparent
        , color Color.black60
        , hover
            [ backgroundColor Color.black10
            , color Color.black
            ]
        , disabled
            [ backgroundColor transparent
            , color Color.black40
            ]
        ]


{-| baseStyles is the base for all other button styles.
-}
baseStyles : Css.Style
baseStyles =
    Css.batch
        [ borderRadius (px 3)
        , Typography.body2
        , padding2 (px 10) (px 19)
        , margin (px 5)
        , border zero
        , outline zero
        , cursor pointer
        , textTransform uppercase
        ]



-- Deprecated Styles
-- TODO: Delete these once the branding is finished


{-| deprecated green button style.
-}
green : List (Attribute msg) -> List (Html msg) -> Styled.Html msg
green options children =
    Styled.button ([ Attributes.css [ greenStyles ] ] ++ options) children


greenStyles : Css.Style
greenStyles =
    Css.batch
        [ baseStyles
        , backgroundColor Color.green
        , color Color.white
        , boxShadow4 zero zero zero (rgba 0 0 0 0)
        , transition
            [ Css.Transitions.boxShadow 200
            , Css.Transitions.backgroundColor 200
            ]
        , hover
            [ boxShadow5 zero (px 2) (px 6) (px -1) Color.black40
            , backgroundColor Color.greenB
            ]
        , disabled
            [ backgroundColor Color.greenC10
            , color Color.white90
            , boxShadow none
            ]
        , active
            [ backgroundColor Color.green
            ]
        ]


{-| deprecated green-on-dark button style.
-}
greenDark : List (Attribute msg) -> List (Html msg) -> Styled.Html msg
greenDark options children =
    Styled.button ([ Attributes.css [ greenDarkStyles ] ] ++ options) children


greenDarkStyles : Css.Style
greenDarkStyles =
    Css.batch
        [ greenStyles
        , disabled
            [ color Color.white40
            , backgroundColor Color.green10
            ]
        ]


{-| deprecated white button style.
-}
white : List (Attribute msg) -> List (Html msg) -> Styled.Html msg
white options children =
    Styled.button ([ Attributes.css [ whiteStyles ] ] ++ options) children


whiteStyles : Css.Style
whiteStyles =
    Css.batch
        [ baseStyles
        , backgroundColor Color.white
        , color Color.black40
        , hover
            [ backgroundColor Color.green10
            ]
        ]
