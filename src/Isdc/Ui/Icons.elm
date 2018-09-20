module Isdc.Ui.Icons exposing
    ( searchIcon
    , addCircleIcon, chevronRightIcon
    )

{-| SVG Icons


# Icons

@docs searchIcon

-}

import Html
import Isdc.Ui.Colors.Hex exposing (grayD)
import Svg exposing (..)
import Svg.Attributes as Attr


searchIconPath =
    "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"


addCircleIconPath =
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"


chevronRightIconPath =
    "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"


iconBackgroundPath =
    "M0 0h24v24H0z"


{-| searchIcon is an icon with an outline of a magnifying glass
-}
searchIcon : String -> String -> String -> Html.Html msg
searchIcon w h f =
    Svg.svg
        [ Attr.height h
        , Attr.width w
        , Attr.fill f
        , Attr.viewBox "0 0 24 24"
        ]
        [ title [] [ text "Search Icon" ]
        , path
            [ Attr.d searchIconPath
            ]
            []
        , path
            [ Attr.d iconBackgroundPath
            , Attr.fill "none"
            ]
            []
        ]


addCircleIcon : String -> String -> String -> Html.Html msg
addCircleIcon w h f =
    Svg.svg
        [ Attr.height h
        , Attr.width w
        , Attr.fill f
        , Attr.viewBox "0 0 24 24"
        ]
        [ title [] [ text "Add Circle Icon" ]
        , path
            [ Attr.d iconBackgroundPath
            , Attr.fill "none"
            ]
            []
        , path
            [ Attr.d addCircleIconPath
            ]
            []
        ]


chevronRightIcon : String -> String -> String -> Html.Html msg
chevronRightIcon w h f =
    Svg.svg
        [ Attr.height h
        , Attr.width w
        , Attr.fill f
        , Attr.viewBox "0 0 24 24"
        ]
        [ title [] [ text "Chevron Right Icon" ]
        , path
            [ Attr.d iconBackgroundPath
            , Attr.fill "none"
            ]
            []
        , path
            [ Attr.d chevronRightIconPath
            , Attr.fill grayD
            ]
            []
        ]
