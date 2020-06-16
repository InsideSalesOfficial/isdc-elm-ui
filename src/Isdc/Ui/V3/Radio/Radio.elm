module Isdc.Ui.V3.Radio.Radio exposing (Radio(..), getLabel, getValue, init, matchLabel, selected, unselected)

import Css
import Html.Styled as Styled
import Html.Styled.Attributes as Attributes
import Html.Styled.Events as Events
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Typography as Typography


type Radio a
    = Radio (Config a)


type alias Config a =
    { label : String, value : a }


init : Config a -> Radio a
init config =
    Radio config


getLabel : Radio a -> String
getLabel (Radio { label, value }) =
    label


getValue : Radio a -> a
getValue (Radio { label, value }) =
    value


matchLabel : String -> Radio a -> Bool
matchLabel filterString radio =
    getLabel radio
        |> String.toLower
        |> String.contains (String.toLower filterString)



-- VIEW


unselected : (Radio a -> msg) -> Radio a -> Styled.Html msg
unselected msg radio =
    Styled.button
        [ Attributes.css
            [ Css.color Color.white60
            , Css.focus [ Css.backgroundColor Color.primary04 ]
            , Css.backgroundColor Color.primary03
            , buttonStyle
            ]
        , Events.onClick <| msg radio
        ]
        [ emptyCircle
        , Styled.text (getLabel radio)
        ]


selected : String -> Radio a -> Styled.Html msg
selected selectedId (Radio { label, value }) =
    Styled.button
        [ Attributes.id selectedId
        , Attributes.css
            [ Css.color Color.white90
            , Css.focus [ Css.backgroundColor Color.brand01Transparent10 ]
            , Css.backgroundColor Color.brand01Transparent10
            , buttonStyle
            ]
        ]
        [ filledCircle
        , Styled.text label
        ]


buttonStyle : Css.Style
buttonStyle =
    Css.batch
        [ Css.displayFlex
        , Css.width <| Css.pct 100
        , Css.outline Css.zero
        , Css.padding2 (Css.px 8) (Css.px 10)
        , Css.justifyContent Css.stretch
        , Typography.body2
        , Css.margin2 (Css.px 10) Css.zero
        , Css.border Css.zero
        , Css.alignItems Css.center
        , Css.cursor Css.pointer
        , Css.firstChild
            [ Css.marginTop Css.zero
            ]
        , Css.lastChild
            [ Css.marginBottom Css.zero
            ]
        ]



-- Circle


emptyCircle : Styled.Html msg
emptyCircle =
    Styled.div
        [ Attributes.css
            [ Css.border3 (Css.px 2) Css.solid Color.white60
            , circleStyle
            ]
        ]
        []


filledCircle : Styled.Html msg
filledCircle =
    Styled.div
        [ Attributes.css
            [ Css.border3 (Css.px 2) Css.solid Color.brand01
            , circleStyle
            ]
        ]
        [ innerCircle ]


innerCircle : Styled.Html msg
innerCircle =
    Styled.div
        [ Attributes.css
            [ Css.backgroundColor Color.brand01
            , Css.borderRadius <| Css.pct 50
            , Css.width <| Css.px 10
            , Css.height <| Css.px 10
            ]
        ]
        []


circleStyle : Css.Style
circleStyle =
    Css.batch
        [ Css.borderRadius <| Css.pct 50
        , Css.backgroundColor Css.transparent
        , Css.marginRight <| Css.px 10
        , Css.displayFlex
        , Css.alignItems Css.center
        , Css.justifyContent Css.center
        , Css.width <| Css.px 20
        , Css.height <| Css.px 20
        , Css.boxSizing Css.borderBox
        ]
