module Isdc.Ui.V3.Toggle.Toggle exposing (Msg, State(..), Toggle, init, match, state, update, view)

import Css
import Html.Styled as Styled
import Html.Styled.Attributes as Attributes
import Html.Styled.Events as Events
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Typography as Typography


type Toggle msg
    = Toggle String String State


type State
    = Left
    | Right


init : String -> String -> Toggle msg
init left right =
    Toggle left right Left


state : Toggle msg -> State
state (Toggle left right toggleState) =
    toggleState


match : { left : a, right : a } -> Toggle msg -> a
match { left, right } toggle =
    case state toggle of
        Left ->
            left

        Right ->
            right



-- UPDATE


type Msg
    = ClickedLeft
    | ClickedRight


update :
    { toggle : Toggle msg
    , toggleMsg : Msg
    , parentMsg : Msg -> msg
    , updateFunction : Toggle msg -> a
    }
    -> ( a, Cmd msg )
update { toggle, toggleMsg, parentMsg, updateFunction } =
    updateInput toggleMsg toggle
        |> Tuple.mapBoth updateFunction (Cmd.map parentMsg)


updateInput : Msg -> Toggle msg -> ( Toggle msg, Cmd Msg )
updateInput msg (Toggle left right _) =
    case msg of
        ClickedLeft ->
            ( Toggle left right Left, Cmd.none )

        ClickedRight ->
            ( Toggle left right Right, Cmd.none )



--VIEW


view : Toggle msg -> (Msg -> msg) -> Styled.Html msg
view toggle msg =
    Styled.map msg (viewToggle toggle)


viewToggle : Toggle msg -> Styled.Html Msg
viewToggle (Toggle left right toggleState) =
    Styled.div
        [ Attributes.css
            [ Css.marginBottom (Css.px 25)
            ]
        ]
        [ leftButton left toggleState
        , rightButton right toggleState
        ]


leftButton : String -> State -> Styled.Html Msg
leftButton label toggleState =
    case toggleState of
        Left ->
            leftButtonActive label

        Right ->
            leftButtonInactive label


rightButton : String -> State -> Styled.Html Msg
rightButton label toggleState =
    case toggleState of
        Left ->
            rightButtonInactive label

        Right ->
            rightButtonActive label


leftButtonActive : String -> Styled.Html Msg
leftButtonActive label =
    Styled.button
        [ Attributes.css
            [ Css.color Color.primary01
            , Css.backgroundColor Color.brand01
            , borderLeft
            , toggleButtonStyle
            ]
        ]
        [ Styled.text label ]


leftButtonInactive : String -> Styled.Html Msg
leftButtonInactive label =
    Styled.button
        [ Attributes.css
            [ Css.color Color.white60
            , Css.backgroundColor <| Css.rgba 0 0 0 0
            , borderLeft
            , toggleButtonStyle
            ]
        , Events.onClick ClickedLeft
        ]
        [ Styled.text label ]


borderLeft : Css.Style
borderLeft =
    Css.batch
        [ Css.borderRadius4 (Css.px 4) (Css.px 0) (Css.px 0) (Css.px 4)
        , Css.borderRight Css.zero
        ]


rightButtonActive : String -> Styled.Html Msg
rightButtonActive label =
    Styled.button
        [ Attributes.css
            [ Css.color Color.primary01
            , Css.backgroundColor Color.brand01
            , borderRight
            , toggleButtonStyle
            ]
        ]
        [ Styled.text label ]


rightButtonInactive : String -> Styled.Html Msg
rightButtonInactive label =
    Styled.button
        [ Attributes.css
            [ Css.color Color.white60
            , Css.backgroundColor <| Css.rgba 0 0 0 0
            , borderRight
            , toggleButtonStyle
            ]
        , Events.onClick ClickedRight
        ]
        [ Styled.text label ]


borderRight : Css.Style
borderRight =
    Css.batch
        [ Css.borderRadius4 (Css.px 0) (Css.px 4) (Css.px 4) (Css.px 0)
        , Css.borderLeft Css.zero
        ]


toggleButtonStyle : Css.Style
toggleButtonStyle =
    Css.batch
        [ Typography.body2
        , Css.textTransform Css.uppercase
        , Css.border3 (Css.px 1) Css.solid Color.brand01
        , Css.outline Css.zero
        , Css.cursor Css.pointer
        , Css.width (Css.px 108)
        , Css.padding2 (Css.px 3) (Css.px 0)
        ]
