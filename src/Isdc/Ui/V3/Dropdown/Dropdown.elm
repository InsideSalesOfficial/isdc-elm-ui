module Isdc.Ui.V3.Dropdown.Dropdown exposing
    ( Dropdown
    , Msg
    , init
    , open
    , subscription
    , update
    , updateTrigger
    , view
    )

import Browser.Dom as Dom
import Browser.Events
import Css
import Html.Styled as Styled
import Html.Styled.Attributes as Attributes
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.V3.Dropdown.Item exposing (Item)
import Isdc.Ui.V3.Dropdown.Menu as Menu exposing (Menu)
import Isdc.Ui.V3.Dropdown.Mouse as Mouse
import Task



-- TYPES


type Dropdown msg
    = Dropdown (State msg) (Menu msg)


type State msg
    = Open ElementDimensions MenuPosition
    | Closed


type MenuPosition
    = Above
    | Below


init : Dropdown msg
init =
    Dropdown Closed Menu.empty


type alias Dimensions =
    { x : Float
    , y : Float
    , width : Float
    , height : Float
    }


type alias ElementDimensions =
    { viewport : Dimensions
    , trigger : Dimensions
    , menu : Dimensions
    }


elementDimensions : Dom.Element -> Dom.Element -> ElementDimensions
elementDimensions triggerElement menuElement =
    { viewport = triggerElement.viewport
    , trigger = triggerElement.element
    , menu = menuElement.element
    }



-- UPDATE


type Msg
    = GotElementsPosition (Result Dom.Error ElementDimensions)
    | DomClicked Mouse.Event
    | BrowserResized Int Int


update : Msg -> Dropdown msg -> ( Dropdown msg, Cmd Msg )
update msg dropdown =
    case msg of
        GotElementsPosition result ->
            case result of
                Ok elements ->
                    ( open dropdown elements, Cmd.none )

                Err error ->
                    ( dropdown, Cmd.none )

        DomClicked event ->
            case event of
                Mouse.Trigger id ->
                    ( dropdown, getElements id )

                Mouse.NotTrigger ->
                    ( close dropdown, Cmd.none )

        BrowserResized width height ->
            ( close dropdown, Cmd.none )


updateTrigger : List (Item msg) -> Dropdown msg -> Dropdown msg
updateTrigger items (Dropdown state menu) =
    Dropdown state (Menu.fromItems items)


subscription : Dropdown msg -> Sub Msg
subscription dropdown =
    Sub.batch
        [ Mouse.subscription DomClicked
        , Browser.Events.onResize BrowserResized
        ]



-- UPDATE HELPERS


open : Dropdown msg -> ElementDimensions -> Dropdown msg
open (Dropdown state menu) elements =
    Dropdown (Open elements (positionFromElements elements)) menu


close : Dropdown msg -> Dropdown msg
close (Dropdown state menu) =
    Dropdown Closed menu


getElements : String -> Cmd Msg
getElements id =
    Task.attempt GotElementsPosition <|
        Task.map2 elementDimensions
            (Dom.getElement id)
            (Dom.getElement menuId)



-- VIEW


view : Dropdown msg -> Styled.Html msg
view (Dropdown state menu) =
    Styled.div
        [ Attributes.id menuId
        , Attributes.css
            [ menuStyle
            , menuPosition state
            , menuArrow state
            ]
        ]
        (Menu.view menu)


menuId : String
menuId =
    "dropdown-menu"


menuStyle : Css.Style
menuStyle =
    Css.batch
        [ Css.backgroundColor Color.primary03
        , Css.borderRadius <| Css.px 3
        , Css.color Color.white90
        , Css.minWidth <| Css.px 120
        , Css.padding2 (Css.px 12) Css.zero
        , Css.zIndex <| Css.int 10
        , Css.boxShadow4 Css.zero Css.zero (Css.px 10) Color.black10
        ]



-- Menu Position


menuOffset : Float
menuOffset =
    18


pagePadding : { x : Float, y : Float }
pagePadding =
    { x = 24, y = 54 }


positionFromElements : ElementDimensions -> MenuPosition
positionFromElements elements =
    let
        spaceBelowTrigger =
            (elements.viewport.height + elements.viewport.y)
                - (elements.trigger.y + elements.trigger.height)

        menuCanGoBelow =
            elements.menu.height < (spaceBelowTrigger - pagePadding.y)
    in
    if menuCanGoBelow then
        Below

    else
        Above


menuPosition : State msg -> Css.Style
menuPosition state =
    case state of
        Open elements position ->
            Css.batch
                [ Css.position Css.absolute
                , Css.left <| Css.px <| menuX elements
                , Css.top <| Css.px <| menuY elements position
                ]

        Closed ->
            Css.batch
                [ Css.position Css.absolute
                , Css.left <| Css.pct -100
                , Css.top <| Css.pct -100
                ]


menuX : ElementDimensions -> Float
menuX elements =
    elements.trigger.x
        + (elements.trigger.width / 2)
        - elements.menu.width
        + menuOffset
        |> min (elements.viewport.width - elements.menu.width - pagePadding.x)


menuY : ElementDimensions -> MenuPosition -> Float
menuY elements position =
    case position of
        Above ->
            elements.trigger.y - elements.menu.height

        Below ->
            elements.trigger.y + elements.trigger.height



-- Menu Arrow


menuArrow : State msg -> Css.Style
menuArrow state =
    case state of
        Open elements position ->
            case position of
                Above ->
                    Css.after
                        [ Css.width Css.zero
                        , Css.height Css.zero
                        , Css.borderLeft3 (Css.px 4) Css.solid Css.transparent
                        , Css.borderRight3 (Css.px 4) Css.solid Css.transparent
                        , Css.position Css.absolute
                        , Css.batch
                            [ Css.borderTop3 (Css.px 4) Css.solid Color.primary03
                            , Css.top <| Css.pct 100
                            ]
                        , Css.right <| Css.px 14
                        , Css.property "content" "''"
                        ]

                Below ->
                    Css.after
                        [ Css.width Css.zero
                        , Css.height Css.zero
                        , Css.borderLeft3 (Css.px 4) Css.solid Css.transparent
                        , Css.borderRight3 (Css.px 4) Css.solid Css.transparent
                        , Css.position Css.absolute
                        , Css.batch
                            [ Css.borderBottom3 (Css.px 4) Css.solid Color.primary03
                            , Css.bottom <| Css.pct 100
                            ]
                        , Css.right <| Css.px 14
                        , Css.property "content" "''"
                        ]

        Closed ->
            Css.batch []
