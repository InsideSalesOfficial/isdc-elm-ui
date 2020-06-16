module Isdc.Ui.V3.Checkbox.Checkbox exposing (Checkbox, Checked(..), Enabled(..), Msg, check, disable, enable, init, toBool, uncheck, update, view)

import Css
import Html.Styled as Styled
import Html.Styled.Attributes as Attributes
import Isdc.Ui.Color.Css as Color
import Svg.Styled.Events as Events


type Checkbox
    = Checkbox Checked Enabled String


type Checked
    = Checked
    | Unchecked


type Enabled
    = Enabled
    | Disabled


init : Checked -> Enabled -> String -> Checkbox
init checked enabled label =
    Checkbox checked enabled label


toBool : Checkbox -> Bool
toBool (Checkbox checked _ _) =
    case checked of
        Checked ->
            True

        Unchecked ->
            False



-- UPDATE


type Msg
    = CheckboxClicked


check : Checkbox -> Checkbox
check (Checkbox _ enabled label) =
    Checkbox Checked enabled label


uncheck : Checkbox -> Checkbox
uncheck (Checkbox _ enabled label) =
    Checkbox Unchecked enabled label


enable : Checkbox -> Checkbox
enable (Checkbox checked _ label) =
    Checkbox checked Enabled label


disable : Checkbox -> Checkbox
disable (Checkbox checked _ label) =
    Checkbox checked Disabled label


update : Msg -> Checkbox -> Checkbox
update msg checkbox =
    case msg of
        CheckboxClicked ->
            case checkbox of
                Checkbox checked Enabled label ->
                    Checkbox (flip checked) Enabled label

                Checkbox checked Disabled label ->
                    checkbox


flip : Checked -> Checked
flip checked =
    case checked of
        Checked ->
            Unchecked

        Unchecked ->
            Checked



-- VIEW


view : Checkbox -> (Msg -> msg) -> Styled.Html msg
view checkbox msg =
    Styled.map msg <|
        case checkbox of
            Checkbox Checked Enabled label ->
                viewCheckbox
                    { backgroundColor = Color.brand01
                    , borderColor = Color.brand01
                    , labelColor = Color.white60
                    , label = label
                    }

            Checkbox Unchecked Enabled label ->
                viewCheckbox
                    { backgroundColor = Css.rgba 0 0 0 0
                    , borderColor = Color.white60
                    , labelColor = Color.white60
                    , label = label
                    }

            Checkbox Checked Disabled label ->
                viewCheckbox
                    { backgroundColor = Color.white40
                    , borderColor = Color.white40
                    , labelColor = Color.white40
                    , label = label
                    }

            Checkbox Unchecked Disabled label ->
                viewCheckbox
                    { backgroundColor = Color.primary01
                    , borderColor = Color.white40
                    , labelColor = Color.white40
                    , label = label
                    }


viewCheckbox :
    { backgroundColor : Css.Color
    , borderColor : Css.Color
    , labelColor : Css.Color
    , label : String
    }
    -> Styled.Html Msg
viewCheckbox { backgroundColor, borderColor, labelColor, label } =
    wrapper
        [ Styled.button
            [ Attributes.css
                [ checkboxStyles
                , Css.backgroundColor backgroundColor
                , Css.borderColor borderColor
                ]
            ]
            [ viewCheck ]
        , viewLabel labelColor label
        ]


wrapper : List (Styled.Html Msg) -> Styled.Html Msg
wrapper =
    Styled.div [ Events.onClick CheckboxClicked ]


checkboxStyles : Css.Style
checkboxStyles =
    Css.batch
        [ Css.width (Css.px 18)
        , Css.height (Css.px 18)
        , Css.border2 (Css.px 2) Css.solid
        , Css.borderRadius (Css.px 2)
        , Css.outline Css.zero
        , Css.position Css.relative
        , Css.marginRight (Css.px 11)
        , Css.cursor Css.pointer
        , Css.borderRadius (Css.px 2)
        ]


viewCheck : Styled.Html msg
viewCheck =
    Styled.span
        [ Attributes.css
            [ Css.borderBottom3 (Css.px 2) Css.solid Color.primary01
            , Css.borderLeft3 (Css.px 2) Css.solid Color.primary01
            , Css.width (Css.px 10)
            , Css.height (Css.px 5)
            , Css.transforms [ Css.translate2 (Css.pct -50) (Css.pct -65), Css.rotate (Css.deg -45) ]
            , Css.position Css.absolute
            , Css.top (Css.pct 50)
            , Css.left (Css.pct 50)
            ]
        ]
        []


viewLabel : Css.Color -> String -> Styled.Html msg
viewLabel labelColor label =
    Styled.span
        [ Attributes.css
            [ Css.color labelColor
            , Css.cursor Css.pointer
            ]
        ]
        [ Styled.text label ]
