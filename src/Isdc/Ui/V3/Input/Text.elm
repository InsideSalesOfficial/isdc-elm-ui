module Isdc.Ui.V3.Input.Text exposing (view)

import Css
import Css.Transitions as Transitions
import Html.Styled as Styled
import Html.Styled.Attributes as Attributes
import Isdc.Logic.Logic as Logic
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Typography as Typography
import Isdc.Ui.V3.Input.Input as Input exposing (Input(..))


view : Input -> (Input.Msg -> msg) -> Styled.Html msg
view input msg =
    Styled.map msg (viewInput Input.inputMessages input)


viewInput : List (Styled.Attribute Input.Msg) -> Input -> Styled.Html Input.Msg
viewInput messages input =
    let
        (Input focus inputData) =
            input
    in
    Styled.div
        [ Attributes.css
            [ Css.backgroundColor Color.primary03
            , Css.borderRadius (Css.px 2)
            , Css.borderBottom3 (Css.px 2) Css.solid (focusColor focus)
            , Css.position Css.relative
            ]
        ]
        (inputList input messages)


inputList : Input -> List (Styled.Attribute Input.Msg) -> List (Styled.Html Input.Msg)
inputList (Input focus inputData) messages =
    Logic.prependMaybe (inputLabel focus inputData)
        [ Styled.input
            ([ Attributes.value inputData.value
             , Attributes.css inputCss
             , Attributes.type_ "text"
             ]
                ++ messages
            )
            []
        ]


focusColor : Input.Focus -> Css.Color
focusColor focus =
    case focus of
        Input.Focused ->
            Color.brand01

        Input.Unfocused ->
            Color.white40


inputLabel : Input.Focus -> Input.Config -> Maybe (Styled.Html Input.Msg)
inputLabel focus inputData =
    case inputData.label of
        Just label ->
            Just <|
                Styled.label
                    [ Attributes.css
                        [ Css.position Css.absolute
                        , inputTop focus inputData.value
                        , Css.left <| Css.px 16
                        , inputTypography focus inputData.value
                        , Css.color (focusColor focus)
                        , Transitions.transition
                            [ Transitions.top 140
                            , Transitions.fontSize 140
                            , Transitions.lineHeight 140
                            , Transitions.letterSpacing 140
                            ]
                        ]
                    ]
                    [ Styled.text label ]

        Nothing ->
            Nothing


unfocusedAndEmpty : Input.Focus -> String -> Bool
unfocusedAndEmpty focus value =
    value == "" && focus == Input.Unfocused


inputTop : Input.Focus -> String -> Css.Style
inputTop focus value =
    if unfocusedAndEmpty focus value then
        Css.top <| Css.px 15

    else
        Css.top <| Css.px 10


inputTypography : Input.Focus -> String -> Css.Style
inputTypography focus value =
    if unfocusedAndEmpty focus value then
        Typography.subhead1

    else
        Typography.caption


inputCss : List Css.Style
inputCss =
    [ Css.color Color.white90
    , Typography.subhead1
    , Css.height (Css.px 54)
    , Css.padding3 (Css.px 24) (Css.px 16) (Css.px 4)
    , Css.position Css.relative
    , Css.zIndex (Css.int 1)
    , Css.backgroundColor Css.transparent
    , Css.outline Css.zero
    , Css.border Css.zero
    , Css.boxSizing Css.borderBox
    , Css.width (Css.pct 100)
    ]
