module Isdc.Ui.Checkbox exposing (CheckboxOptions, baseCheckboxStyles, checkBox)

import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (class, css)
import Html.Styled.Events exposing (onClick)
import Isdc.Ui.Color.Css as Color


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
    { checked : Bool
    , disabled : Bool
    , onValueChange : msg
    , label : String
    }


checkBox : CheckboxOptions msg -> Html msg
checkBox options =
    div []
        [ button
            [ css
                (if options.checked then
                    [ backgroundColor Color.green
                    , baseCheckboxStyles
                    , borderColor Color.green
                    ]

                 else
                    [ baseCheckboxStyles
                    , borderColor Color.black40
                    ]
                )
            , onClick options.onValueChange
            , class "pb-test__checkbox"
            ]
            (if options.checked then
                [ span
                    [ css
                        [ borderBottom3 (px 2) solid Color.white
                        , borderLeft3 (px 2) solid Color.white
                        , width (px 10)
                        , height (px 5)
                        , transforms [ translate2 (pct -50) (pct -65), rotate (deg -45) ]
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
