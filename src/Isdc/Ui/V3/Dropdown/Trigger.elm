module Isdc.Ui.V3.Dropdown.Trigger exposing (view)

import Css
import Html.Styled as Styled
import Html.Styled.Attributes as Attributes
import Html.Styled.Events as Events
import Isdc.Ui.V3.Dropdown.Mouse as Mouse


type alias Options msg =
    { id : String
    , button : Styled.Html msg
    , msg : msg
    }


view : Options msg -> Styled.Html msg
view { id, button, msg } =
    Styled.div
        [ Attributes.id id
        , Attributes.class Mouse.triggerClass
        , Events.onClick msg
        , Attributes.css [ Css.cursor Css.pointer ]
        ]
        [ Styled.div
            [ Attributes.css [ Css.pointerEvents Css.none ]
            ]
            [ button ]
        ]
