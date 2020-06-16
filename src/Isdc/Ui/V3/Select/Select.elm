module Isdc.Ui.V3.Select.Select exposing
    ( Config
    , Focus(..)
    , Msg
    , Select(..)
    , State(..)
    , update
    , value
    , view
    )

import Css
import Css.Animations as Animations
import Css.Transitions as Transitions
import Html.Styled as Styled
import Html.Styled.Attributes as Attributes
import Html.Styled.Events as Events
import Isdc.Logic.Logic as Logic
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Scrollbar as Scrollbar
import Isdc.Ui.Theme as Theme exposing (Theme)
import Isdc.Ui.Typography as Typography
import List.Selection as Selection exposing (Selection)


type Select
    = Select Config


type Focus
    = Focused
    | Unfocused


type State
    = Open
    | Closed


type alias Config =
    { focus : Focus
    , state : State
    , label : String
    , selection : Selection String
    }


value : Select -> Maybe String
value (Select config) =
    Selection.selected config.selection



-- UPDATE


type Msg
    = SelectListClicked
    | SelectFocused
    | SelectBlurred
    | OptionClicked String


update : Msg -> Select -> Select
update selectMsg (Select config) =
    case selectMsg of
        SelectListClicked ->
            Select { config | state = Open }

        SelectFocused ->
            Select { config | focus = Focused }

        SelectBlurred ->
            Select { config | focus = Unfocused, state = Closed }

        OptionClicked newValue ->
            Select { config | selection = Selection.select newValue config.selection }



-- VIEW


view : Select -> (Msg -> msg) -> Styled.Html msg
view select msg =
    Styled.map msg (viewSelect select)



-- Wrapper


viewSelect : Select -> Styled.Html Msg
viewSelect (Select config) =
    Styled.div
        [ Attributes.css
            [ Css.backgroundColor Color.primary05
            , Css.position Css.relative
            , selectBorder config
            ]
        ]
        (viewButton config)


selectBorder : Config -> Css.Style
selectBorder config =
    Css.batch
        [ Css.borderBottom3 (Css.px 2)
            Css.solid
            (case config.focus of
                Focused ->
                    Color.white60

                Unfocused ->
                    Color.white40
            )
        , Css.borderRadius (Css.px 2)
        ]



-- Button


buttonCss : List Css.Style
buttonCss =
    [ Css.color Color.white90
    , Typography.subhead1
    , Css.height (Css.px 54)
    , Css.padding4 (Css.px 24) (Css.px 40) (Css.px 4) (Css.px 16)
    , Css.position Css.relative
    , Css.zIndex (Css.int 1)
    , Css.backgroundColor Css.transparent
    , Css.outline Css.zero
    , Css.border Css.zero
    , Css.boxSizing Css.borderBox
    , Css.width (Css.pct 100)
    , Css.outline Css.zero
    , Css.textAlign Css.left
    , cutOffText
    , Css.cursor Css.pointer
    ]


viewButton : Config -> List (Styled.Html Msg)
viewButton config =
    [ viewLabel config
    , Styled.button
        [ Attributes.css buttonCss
        , Events.onClick SelectListClicked
        , Events.onFocus SelectFocused
        , Events.onBlur SelectBlurred
        ]
        (buttonContent config)
    ]
        |> Logic.prependWhen (config.state == Open) (viewOptions <| Selection.toList config.selection)


buttonContent : Config -> List (Styled.Html msg)
buttonContent config =
    Logic.prependMaybe
        (Selection.selected config.selection
            |> Maybe.map Styled.text
        )
        [ caret config.state
        ]



-- Options


viewOptions : List String -> Styled.Html Msg
viewOptions options =
    Styled.div
        [ Attributes.css
            [ Css.padding2 (Css.px 8) Css.zero
            , Css.maxHeight <| Css.px 200
            , Css.overflow Css.auto
            , Css.position Css.absolute
            , Css.top (Css.pct 100)
            , Css.left Css.zero
            , Css.width <| Css.pct 100
            , Css.zIndex <| Css.int 10
            , Css.boxShadow4 (Css.px 2) (Css.px 4) (Css.px 10) Color.black40
            , Css.backgroundColor Color.primary03
            , Scrollbar.styles Theme.New
            , Css.property "animation-duration" "0.16s"
            , Css.property "animation-timing-function" "linear"
            , Css.property "animation-fill-mode" "forwards"
            , Css.property "transform-origin" "center 8px 0px"
            , viewOptionsAnimation
            ]
        ]
        (List.indexedMap (viewOption (List.length options)) options)


viewOption : Int -> Int -> String -> Styled.Html Msg
viewOption length index option =
    Styled.button
        [ Attributes.class "pb-test__select-input"
        , Events.onClick (OptionClicked option)
        , Attributes.css
            [ Css.color Color.white90
            , Css.backgroundColor Color.primary03
            , Css.hover [ Css.backgroundColor Color.primary05 ]
            , selectOptionAnimation length index
            , Typography.subhead1
            , Css.padding2 Css.zero <| Css.px 24
            , Css.display Css.block
            , Css.border Css.zero
            , Css.outline Css.zero
            , Css.width <| Css.pct 100
            , Css.textAlign Css.left
            , Css.lineHeight <| Css.px 36
            , cutOffText
            , Css.cursor Css.pointer
            ]
        ]
        [ Styled.text option ]


viewOptionsAnimation : Css.Style
viewOptionsAnimation =
    Css.animationName <|
        Animations.keyframes
            [ ( 0
              , [ Animations.transform [ Css.translateY (Css.px -24), Css.scaleY 0.4 ]
                , Animations.opacity Css.zero
                ]
              )
            , ( 40
              , [ Animations.opacity <| Css.num 1
                ]
              )
            , ( 100
              , [ Animations.transform [ Css.translateY Css.zero, Css.scaleY 1 ]
                ]
              )
            ]


cutOffText : Css.Style
cutOffText =
    Css.batch
        [ Css.whiteSpace Css.noWrap
        , Css.textOverflow Css.ellipsis
        , Css.overflow Css.hidden
        ]


selectOptionAnimation : Int -> Int -> Css.Style
selectOptionAnimation length index =
    Css.batch
        [ Css.property "animation-duration" "0.3s"
        , Css.property "animation-timing-function" "ease-in-out"
        , Css.property "animation-fill-mode" "forwards"
        , Css.opacity Css.zero
        , Css.property "animation-delay"
            ((toFloat index |> (+) 1)
                / (length + 1 |> toFloat)
                |> (*) 0.284
                |> String.fromFloat
                |> (\f -> f ++ "s")
            )
        , Css.animationName <|
            Animations.keyframes
                [ ( 0
                  , [ Animations.opacity Css.zero ]
                  )
                , ( 100, [ Animations.opacity (Css.num 1) ] )
                ]
        ]



-- Label


viewLabel : Config -> Styled.Html Msg
viewLabel config =
    Styled.label
        [ Attributes.css
            [ labelPlacementStyles config.selection
            , Css.position Css.absolute
            , Css.left <| Css.px 16
            , labelColorStyles config.focus
            , Transitions.transition
                [ Transitions.top 140
                , Transitions.fontSize 140
                , Transitions.lineHeight 140
                , Transitions.letterSpacing 140
                ]
            ]
        ]
        [ Styled.text config.label ]


labelPlacementStyles : Selection String -> Css.Style
labelPlacementStyles selection =
    if Selection.selected selection == Nothing then
        Css.batch [ Css.top <| Css.px 15, Typography.subhead1 ]

    else
        Css.batch [ Css.top <| Css.px 10, Typography.caption ]


labelColorStyles : Focus -> Css.Style
labelColorStyles focus =
    Css.color
        (case focus of
            Focused ->
                Color.brand01

            Unfocused ->
                Color.white40
        )



-- Caret


caret : State -> Styled.Html msg
caret state =
    Styled.div
        [ Attributes.css
            [ case state of
                Open ->
                    caretUp

                Closed ->
                    caretDown
            ]
        ]
        []


caretStyles : Css.Style
caretStyles =
    Css.batch
        [ Css.right <| Css.px 24
        , Css.top <| Css.pct 50
        , Css.width Css.zero
        , Css.height Css.zero
        , Css.position Css.absolute
        , Css.borderLeft3 (Css.px 5) Css.solid Css.transparent
        , Css.borderRight3 (Css.px 5) Css.solid Css.transparent
        ]


caretUp : Css.Style
caretUp =
    Css.batch
        [ caretStyles
        , Css.borderBottom3 (Css.px 5) Css.solid Color.white40
        ]


caretDown : Css.Style
caretDown =
    Css.batch
        [ caretStyles
        , Css.borderTop3 (Css.px 5) Css.solid Color.white60
        ]
