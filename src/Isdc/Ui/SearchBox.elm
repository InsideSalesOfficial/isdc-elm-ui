module Isdc.Ui.SearchBox exposing (SearchBoxOptions, SearchBoxTheme(..), searchBox)

import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (class, css, placeholder, value)
import Html.Styled.Events exposing (onBlur, onFocus, onInput)
import Isdc.Ui.Colors.Css as Color
import Isdc.Ui.Colors.Hex as Hex
import Isdc.Ui.Icons exposing (searchIcon)
import Isdc.Ui.Typography as Typography exposing (subhead1)


type SearchBoxTheme
    = Dark
    | Light


type alias SearchBoxOptions msg =
    { theme : SearchBoxTheme
    , disabled : Bool
    , inputValue : String
    , placeholderText : String
    , onValueChange : String -> msg
    , onInputFocus : msg
    , onInputBlur : msg
    , focused : Bool
    }


searchBoxContainerCss theme focused =
    let
        ( bgColor, inputBorderColor ) =
            case theme of
                Dark ->
                    ( Color.darkBlue, Color.white60 )

                Light ->
                    ( Color.grayA, Color.black40 )
    in
    [ backgroundColor bgColor
    , borderRadius (px 3)
    , borderBottom3 (px 2)
        solid
        (if focused then
            Color.green

         else
            inputBorderColor
        )
    , boxSizing borderBox
    , height (px 36)
    , displayFlex
    , flexDirection row
    , alignItems center
    , position relative
    ]


inputContainerCss theme =
    let
        bgColor =
            case theme of
                Dark ->
                    Color.darkBlue

                Light ->
                    Color.grayA
    in
    [ backgroundColor bgColor
    ]


inputCss theme =
    let
        ( primaryColor, placeholderColor ) =
            case theme of
                Dark ->
                    ( Color.white90, Color.white40 )

                Light ->
                    ( Color.black90, Color.black60 )
    in
    [ color primaryColor
    , paddingLeft (px 8)
    , subhead1
    , zIndex (int 1)
    , backgroundColor transparent
    , outline zero
    , border zero
    , boxSizing borderBox
    , pseudoElement "placeholder" [ color placeholderColor ]
    , padding4 zero zero zero (px 40)
    , lineHeight (px 34)
    , width <| pct 100
    ]


iconSize =
    24


iconSizeStr =
    String.fromInt iconSize ++ "px"


searchBoxCss =
    [ position absolute
    , left <| px 8
    , top zero
    , bottom zero
    , margin auto
    , height <| px iconSize
    ]


searchBox : SearchBoxOptions msg -> Html msg
searchBox { theme, disabled, inputValue, onValueChange, placeholderText, onInputFocus, onInputBlur, focused } =
    div [ css <| searchBoxContainerCss theme focused ]
        [ span [ css searchBoxCss ] [ fromUnstyled <| searchIcon iconSizeStr iconSizeStr Hex.grayC ]
        , input
            [ onFocus onInputFocus
            , onBlur onInputBlur
            , onInput onValueChange
            , placeholder placeholderText
            , value inputValue
            , css <| inputCss theme
            , class "pb-test__search-box-input"
            ]
            []
        ]
