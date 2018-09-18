module Isdc.Ui.Checkbox exposing (..)

import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css, href, src, placeholder, value)
import Html.Styled.Events exposing (onClick, onInput)
import Isdc.Ui.Typography exposing (..)
import Isdc.Ui.Icons exposing (..)
import Isdc.Ui.Buttons exposing (..)
import Isdc.Ui.Colors.Css exposing (..)
import Isdc.Ui.Colors.Hex as Hex exposing (grayC)

baseCheckboxStyles : Css.Style
baseCheckboxStyles =
    Css.batch
        [ Css.width (px 18)
        , Css.height (px 18)
        , border2 (px 2) solid
        , borderRadius (px 2)
        , outline zero
        , position relative
        , marginRight (px 11)
        , cursor pointer
        , borderRadius (px 2)
        ]

type alias CheckboxOptions msg =
    { defaultChecked : Bool
    , checked : Bool
    , disabled : Bool
    , onValueChange : msg
    , onFocus : msg
    , onBlur : msg
    , focused : Bool
    , label: String
    }

checkBox : CheckboxOptions msg -> Html msg
checkBox options =
    div
        [ css [ margin2 (px 10) (px 0) ]
        ]
        [ button
            [ css
                (if options.checked then
                    [ backgroundColor green
                    , baseCheckboxStyles
                    , borderColor green
                    ]
                 else
                    [ baseCheckboxStyles
                    , borderColor black40
                    ]
                )
              , onClick options.onValueChange
            ]
            (if options.checked then
                [ span
                    [ css
                        [ borderBottom3 (px 2) solid white
                        , borderLeft3 (px 2) solid white
                        , width (px 10)
                        , height (px 5)
                        , transforms [ (translate2 (pct -50) (pct -65)), (rotate (deg -45)) ]
                        , position absolute
                        , top (pct 50)
                        , left (pct 50)
                        ]
                    ]
                    []
                ]
             else
                []
            )
        , text options.label
        ]