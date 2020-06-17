module Isdc.Ui.V3.Dropdown.Menu exposing (Menu, empty, fromItems, view)

import Html.Styled as Styled
import Isdc.Ui.V3.Dropdown.Item as Item exposing (Item)


type Menu msg
    = Menu (List (Item msg))


empty : Menu msg
empty =
    Menu []


fromItems : List (Item msg) -> Menu msg
fromItems items =
    Menu items


view : Menu msg -> List (Styled.Html msg)
view (Menu items) =
    List.map Item.view items
