module ISDCElmUI.Loader exposing (..)

import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)


loader : Html msg
loader =
    div [ class "isdc-loader" ]
        [ div [ class "isdc-loader__bubble" ] []
        , div [ class "isdc-loader__bubble" ] []
        , div [ class "isdc-loader__bubble" ] []
        ]
