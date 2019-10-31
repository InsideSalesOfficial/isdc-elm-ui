module Isdc.Ui.Colors.Css exposing
    ( brand01, brand02, brand03, brandBackup01, brandBackup02, brandBackup03, brandBackup04, brand01Transparent10
    , primary01, primary02, primary03, primary04, primary05
    , tron01, tron02, tron03
    , success01, success02, success03
    , caution01, caution02, caution03
    , warning01, warning02, warning03
    , green, greenB, greenC, greenC10, green40, green10
    , grayA, grayB, grayC, grayD, grayE, grayF
    , blue, blue40, blue10
    , orange, orange40, orange10
    , red, red40, red10
    , tron, tronB, tronC, tron40, tron10
    , darkBlue, darkBlue40, darkBlueB, darkBlueB40, darkBlueC, darkBlueC40, darkBlueD, darkBlueD40, darkBlueE, darkBlueE40
    , black, black60, black90, black40, black10, black4
    , white, white60, white90, white40, white10, white4
    )

{-| Contains all of the company colors as a Css Color


# New Branding


# Brand

@docs brand01, brand02, brand03, brandBackup01, brandBackup02, brandBackup03, brandBackup04, brand01Transparent10


# Primary

@docs primary01, primary02, primary03, primary04, primary05


# Tron

@docs tron01, tron02, tron03


# Success

@docs success01, success02, success03


# Caution

@docs caution01, caution02, caution03


# Warning

@docs warning01, warning02, warning03


# Old Themes


# Greens

@docs green, greenB, greenC, greenC10, green40, green10


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
import Isdc.Ui.Colors.Hex as Hex



-- New Theme Colors


{-| brand01 #ffdd00
-}
brand01 : Color
brand01 =
    hex Hex.brand01


{-| brand01Transparent10 rgba 255 221 0 0.1
-}
brand01Transparent10 : Color
brand01Transparent10 =
    rgba 255 221 0 0.1


{-| brand02 #ebcb00
-}
brand02 : Color
brand02 =
    hex Hex.brand02


{-| brand03 #737022
-}
brand03 : Color
brand03 =
    hex Hex.brand03


{-| primary01 #16283a
-}
primary01 : Color
primary01 =
    hex Hex.primary01


{-| primary02 #0d1822
-}
primary02 : Color
primary02 =
    hex Hex.primary02


{-| primary03 #2d3d4e
-}
primary03 : Color
primary03 =
    hex Hex.primary03


{-| primary04 #737e88
-}
primary04 : Color
primary04 =
    hex Hex.primary04


{-| primary04 #737e88
-}
primary05 : Color
primary05 =
    hex Hex.primary05


{-| tron01 #00c9ff
-}
tron01 : Color
tron01 =
    hex Hex.tron01


{-| tron02 #00b9eb
-}
tron02 : Color
tron02 =
    hex Hex.tron02


{-| tron03 #09688a
-}
tron03 : Color
tron03 =
    hex Hex.tron03


{-| success01 #16c99d
-}
success01 : Color
success01 =
    hex Hex.success01


{-| success02 #14b990
-}
success02 : Color
success02 =
    hex Hex.success02


{-| success03 #136861
-}
success03 : Color
success03 =
    hex Hex.success03


{-| caution01 #ffa210
-}
caution01 : Color
caution01 =
    hex Hex.caution01


{-| caution02 #eb950e
-}
caution02 : Color
caution02 =
    hex Hex.caution02


{-| caution03 #735922
-}
caution03 : Color
caution03 =
    hex Hex.caution03


{-| warning01 #ff1743
-}
warning01 : Color
warning01 =
    hex Hex.warning01


{-| warning02 #eb153d
-}
warning02 : Color
warning02 =
    hex Hex.warning02


{-| warning03 #6e1233
-}
warning03 : Color
warning03 =
    hex Hex.warning03


{-| brandBackup01 #0e6aff
-}
brandBackup01 : Color
brandBackup01 =
    hex Hex.brandBackup01


{-| brandBackup02 #0c61eb
-}
brandBackup02 : Color
brandBackup02 =
    hex Hex.brandBackup02


{-| brandBackup03 #13428b
-}
brandBackup03 : Color
brandBackup03 =
    hex Hex.brandBackup03


{-| brandBackup04 #9fc4ff
-}
brandBackup04 : Color
brandBackup04 =
    hex Hex.brandBackup04



-- Old Theme Colors


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


{-| greenC10 rgba(42, 145, 94, 0.1)
-}
greenC10 : Color
greenC10 =
    rgba 42 145 94 0.1


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
