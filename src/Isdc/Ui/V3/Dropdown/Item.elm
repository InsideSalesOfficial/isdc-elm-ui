module Isdc.Ui.V3.Dropdown.Item exposing (Item, list, view)

import Css
import Html.Styled as Styled
import Html.Styled.Attributes as Attributes
import Html.Styled.Events as Events
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Typography as Typography


type Item msg
    = Item String msg


list : List ( String, msg ) -> List (Item msg)
list items =
    List.map (\( label, msg ) -> Item label msg) items


view : Item msg -> Styled.Html msg
view (Item label msg) =
    Styled.div
        [ Events.onClick msg
        , Attributes.css
            [ Typography.subhead1
            , Css.border Css.zero
            , Css.cursor Css.pointer
            , Css.width <| Css.pct 100
            , Css.whiteSpace Css.noWrap
            , Css.padding4 (Css.px 6) (Css.px 24) (Css.px 6) (Css.px 10)
            , Css.textAlign Css.left
            , Css.boxSizing Css.borderBox
            , Css.hover [ Css.backgroundColor Color.white10 ]
            ]
        ]
        [ Styled.text label
        ]
