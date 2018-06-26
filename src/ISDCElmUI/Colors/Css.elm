module ISDCElmUI.Colors.Css exposing (..)

{-| Contains all of the company colors as a Css Color


# Greens

@docs green, greenB, greenC, green40, green10


# Gray

@docs grayA, grayB, grayC, grayD, grayE, grayF


# Blues

@docs blue, blue40, blue10


# Oranges

@docs orange, orange40, orange10


# Reds

@docs red, red40, red10


# Trons

@docs tron, tronB, tronC, tron40, tron10


# Dark Blues

@docs darkBlue, darkBlue40, darkBlueB, darkBlueB40, darkBlueC, darkBlueC40, darkBlueD, darkBlueD40, darkBlueE, darkBlueE40


# Blacks

@docs black, black60, black90, black40, black10, black4


# White

@docs white, white60, white90, white40, white10, white4

-}

import Css exposing (..)
import ISDCElmUI.Colors.Hex as Hex


{-| green #3AB676
-}
green : Color
green =
    hex Hex.green


{-| greenB #34A369
-}
greenB : Color
greenB =
    hex Hex.greenB


{-| greenC #2A915E
-}
greenC : Color
greenC =
    hex Hex.greenC


{-| green40 rgba(58, 182, 118, 0.4)
-}
green40 : Color
green40 =
    rgba 58 182 118 0.4


{-| green10 rgba(58, 182, 118, 0.1)
-}
green10 : Color
green10 =
    rgba 58 182 118 0.1


{-| blue #0075B8
-}
blue : Color
blue =
    hex Hex.blue


{-| blue40 rgba(0, 117, 184, 0.4)
-}
blue40 : Color
blue40 =
    rgba 0 117 184 0.4


{-| blue10 rgba(0, 117, 184, 0.1)
-}
blue10 : Color
blue10 =
    rgba 0 117 184 0.1


{-| orange #F18B14
-}
orange : Color
orange =
    hex Hex.orange


{-| orange40 rgba(241, 139, 20, 0.4)
-}
orange40 : Color
orange40 =
    rgba 241 139 20 0.4


{-| orange10 rgba(241, 139, 20, 0.1)
-}
orange10 : Color
orange10 =
    rgba 241 139 20 0.1


{-| red #EA5959
-}
red : Color
red =
    hex Hex.red


{-| red40 rgba(234, 89, 89, 0.4)
-}
red40 : Color
red40 =
    rgba 234 89 89 0.4


{-| red10 rgba(234, 89, 89, 0.4)
-}
red10 : Color
red10 =
    rgba 234 89 89 0.1


{-| tron #00C9FF
-}
tron : Color
tron =
    hex Hex.tron


{-| tronB #006580
-}
tronB : Color
tronB =
    hex Hex.tronB


{-| tronC #004A5E
-}
tronC : Color
tronC =
    hex Hex.tronC


{-| tron40 rgba(0, 201, 255, 0.4)
-}
tron40 : Color
tron40 =
    rgba 0 201 255 0.4


{-| tron10 rgba(0, 201, 255, 0.1)
-}
tron10 : Color
tron10 =
    rgba 0 201 255 0.1


{-| darkBlue #2A434A
-}
darkBlue : Color
darkBlue =
    hex Hex.darkBlue


{-| darkBlue40 rgba(42, 67, 74, 0.4)
-}
darkBlue40 : Color
darkBlue40 =
    rgba 42 67 74 0.4


{-| darkBlueB #435960
-}
darkBlueB : Color
darkBlueB =
    hex Hex.darkBlueB


{-| darkBlueB40 rgba(67, 89, 96, 0.4)
-}
darkBlueB40 : Color
darkBlueB40 =
    rgba 67 89 96 0.4


{-| darkBlueC #21353B
-}
darkBlueC : Color
darkBlueC =
    hex Hex.darkBlueC


{-| darkBlueC40 rgba(33, 53, 59, 0.4)
-}
darkBlueC40 : Color
darkBlueC40 =
    rgba 33 53 59 0.4


{-| darkBlueD #1D2E33
-}
darkBlueD : Color
darkBlueD =
    hex Hex.darkBlueD


{-| darkBlueD40 rgba(29, 46, 51, 0.4)
-}
darkBlueD40 : Color
darkBlueD40 =
    rgba 29 46 51 0.4


{-| darkBlueE #080D0E
-}
darkBlueE : Color
darkBlueE =
    hex Hex.darkBlueE


{-| darkBlueE40 rgba(8, 13, 14, 0.4)
-}
darkBlueE40 : Color
darkBlueE40 =
    rgba 8 13 14 0.4



-- Gray


{-| grayA #F5F5F5
-}
grayA : Color
grayA =
    hex Hex.grayA


{-| grayB #E5E5E5
-}
grayB : Color
grayB =
    hex Hex.grayB


{-| grayC #999999
-}
grayC : Color
grayC =
    hex Hex.grayC


{-| grayD #666666
-}
grayD : Color
grayD =
    hex Hex.grayD


{-| grayE #191919
-}
grayE : Color
grayE =
    hex Hex.grayE


{-| grayF #0A0A0
-}
grayF : Color
grayF =
    hex Hex.grayF


{-| black #000000
-}
black : Color
black =
    hex Hex.black


{-| black90 rgba(0, 0, 0 0.9)
-}
black90 : Color
black90 =
    rgba 0 0 0 0.9


{-| black60 rgba(0, 0, 0 0.6)
-}
black60 : Color
black60 =
    rgba 0 0 0 0.6


{-| black40 rgba(0, 0, 0 0.4)
-}
black40 : Color
black40 =
    rgba 0 0 0 0.4


{-| black10 rgba(0, 0, 0 0.1)
-}
black10 : Color
black10 =
    rgba 0 0 0 0.1


{-| black4 rgba(0, 0, 0 0.04)
-}
black4 : Color
black4 =
    rgba 0 0 0 0.04


{-| white #FFFFFF
-}
white : Color
white =
    hex Hex.white


{-| white90 rgba(255, 255, 255, 0.9)
-}
white90 : Color
white90 =
    rgba 255 255 255 0.9


{-| white60 rgba(255, 255, 255, 0.6)
-}
white60 : Color
white60 =
    rgba 255 255 255 0.6


{-| white40 rgba(255, 255, 255, 0.4)
-}
white40 : Color
white40 =
    rgba 255 255 255 0.4


{-| white10 rgba(255, 255, 255, 0.1)
-}
white10 : Color
white10 =
    rgba 255 255 255 0.1


{-| white4 rgba(255, 255, 255, 0.04)
-}
white4 : Color
white4 =
    rgba 255 255 255 0.04
