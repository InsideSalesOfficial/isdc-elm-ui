module Isdc.Ui.V3.Modal.Modal exposing (view)

import Css
import Html.Styled as Styled
import Html.Styled.Attributes as Attributes
import Html.Styled.Events as Events
import Isdc.Ui.Color.Css as Color


view : msg -> List (Styled.Html msg) -> Styled.Html msg
view closeMsg children =
    wrapper
        [ background closeMsg
        , content children
        ]


wrapper : List (Styled.Html msg) -> Styled.Html msg
wrapper =
    Styled.div
        [ Attributes.css
            [ Css.position Css.fixed
            , Css.top Css.zero
            , Css.left Css.zero
            , Css.right Css.zero
            , Css.bottom Css.zero
            , Css.displayFlex
            , Css.alignItems Css.center
            , Css.justifyContent Css.center
            , Css.zIndex <| Css.int 1
            , Css.property "overscroll-behavior" "none"
            , Css.overflow Css.auto
            ]
        ]


background : msg -> Styled.Html msg
background closeMsg =
    Styled.div
        [ Attributes.css
            [ Css.backgroundColor Color.black40
            , Css.position Css.absolute
            , Css.top Css.zero
            , Css.left Css.zero
            , Css.right Css.zero
            , Css.bottom Css.zero
            , Css.zIndex <| Css.int 10
            ]
        , Events.onClick closeMsg
        ]
        []


content : List (Styled.Html msg) -> Styled.Html msg
content children =
    Styled.div
        [ Attributes.css
            [ Css.backgroundColor Color.primary01
            , Css.borderRadius (Css.px 3)
            , Css.boxSizing Css.borderBox
            , Css.width <| Css.px 360
            , Css.boxShadow5 Css.zero (Css.px 19) (Css.px 38) Css.zero Color.black40
            , Css.zIndex <| Css.int 20
            , Css.color Color.white90
            ]
        ]
        children
