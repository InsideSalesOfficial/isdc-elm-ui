module Isdc.Ui.V3.Input.Search exposing (view)

import Css
import Html.Styled as Styled
import Html.Styled.Attributes as Attributes
import Isdc.Logic.Logic as Logic
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Color.Hex as Hex
import Isdc.Ui.Icons as Icons
import Isdc.Ui.Typography as Typography
import Isdc.Ui.V3.Input.Input as Input exposing (Input(..))



-- VIEW


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
            [ Css.backgroundColor Color.primary02
            , Css.borderRadius (Css.px 3)
            , Css.borderBottom3 (Css.px 2) Css.solid (focusColor focus)
            , Css.position Css.relative
            , Css.height (Css.px 36)
            , Css.boxSizing Css.borderBox
            , Css.displayFlex
            , Css.flexDirection Css.row
            , Css.alignItems Css.center
            ]
        ]
        [ Styled.span [ Attributes.css iconStyles ]
            [ Styled.fromUnstyled <| Icons.searchIcon iconSizeStr iconSizeStr Hex.grayC ]
        , searchInput inputData messages
        ]


searchInput :
    { a | placeholder : Maybe String, value : String }
    -> List (Styled.Attribute msg)
    -> Styled.Html msg
searchInput inputData messages =
    Styled.input
        ((Attributes.value inputData.value
            :: Attributes.css inputCss
            :: Attributes.type_ "text"
            :: messages
         )
            |> Logic.prependMaybe (Maybe.map Attributes.placeholder inputData.placeholder)
        )
        []


iconSize =
    24


iconSizeStr =
    String.fromInt iconSize ++ "px"


iconStyles : List Css.Style
iconStyles =
    [ Css.position Css.absolute
    , Css.left <| Css.px 8
    , Css.top Css.zero
    , Css.bottom Css.zero
    , Css.margin Css.auto
    , Css.height <| Css.px iconSize
    ]


focusColor : Input.Focus -> Css.Color
focusColor focus =
    case focus of
        Input.Focused ->
            Color.brand01

        Input.Unfocused ->
            Color.white40


inputCss : List Css.Style
inputCss =
    [ Css.color Color.white90
    , Typography.subhead1
    , Css.height (Css.px 24)
    , Css.padding4 Css.zero Css.zero Css.zero (Css.px 40)
    , Css.position Css.relative
    , Css.zIndex (Css.int 1)
    , Css.backgroundColor Css.transparent
    , Css.outline Css.zero
    , Css.border Css.zero
    , Css.boxSizing Css.borderBox
    , Css.width (Css.pct 100)
    ]
