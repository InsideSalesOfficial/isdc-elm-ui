module Isdc.Ui.Loader exposing (..)

{-| Loading Element


# Loader

@docs loader

-}

import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)


{-| loader for use in conjuction with external css
-}
loader : Html msg
loader =
    div [ class "Isdc-loader" ]
        [ div [ class "Isdc-loader__bubble" ] []
        , div [ class "Isdc-loader__bubble" ] []
        , div [ class "Isdc-loader__bubble" ] []
        ]
