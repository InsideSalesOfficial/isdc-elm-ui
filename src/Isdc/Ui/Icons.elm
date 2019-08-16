module Isdc.Ui.Icons exposing
    ( searchIcon, addCircleIcon, chevronRightIcon
    , arrowLeft, emailFilled, microsoftIcon, salesforceIconFilled, vpnKey, domain
    )

{-| SVG Icons


# Icons

@docs searchIcon, addCircleIcon, chevronRightIcon

-}

import Html
import Svg exposing (..)
import Svg.Attributes as Attr


iconBackgroundPath =
    "M0 0h24v24H0z"


{-| searchIcon is an icon with an outline of a magnifying glass
-}
searchIcon : String -> String -> String -> Html.Html msg
searchIcon w h f =
    let
        searchIconPath =
            "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    in
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
    let
        addCircleIconPath =
            "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
    in
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


chevronRightIcon : String -> String -> String -> String -> Html.Html msg
chevronRightIcon w h f arrowColor =
    let
        chevronRightIconPath =
            "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
    in
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
            , Attr.fill arrowColor
            ]
            []
        ]


arrowLeft : String -> String -> String -> Html.Html msg
arrowLeft w h f =
    Svg.svg
        [ Attr.height h
        , Attr.width w
        , Attr.fill f
        , Attr.viewBox "0 0 24 24"
        ]
        [ path
            [ Attr.d "M0 0h24v24H0z"
            , Attr.fill "none"
            ]
            []
        , path
            [ Attr.d "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
            ]
            []
        ]


emailFilled : String -> String -> String -> Html.Html msg
emailFilled w h f =
    Svg.svg
        [ Attr.height h
        , Attr.width w
        , Attr.fill f
        , Attr.viewBox "0 0 24 24"
        ]
        [ path
            [ Attr.d "M0 0h24v24H0z"
            , Attr.fill "none"
            ]
            []
        , path
            [ Attr.d "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            ]
            []
        ]


salesforceIconFilled : String -> String -> String -> Html.Html msg
salesforceIconFilled w h f =
    Svg.svg
        [ Attr.height h
        , Attr.width w
        , Attr.viewBox "0 0 24 17"
        ]
        [ path
            [ Attr.fill f
            , Attr.d "M17.2537812,2.13648574 C16.5710413,2.13648574 15.9222386,2.28276274 15.335835,2.54556633 C14.6611354,1.33941221 13.394557,0.527042717 11.942409,0.527042717 C10.8500547,0.527042717 9.86247175,0.987060371 9.15319372,1.72869219 C8.37248969,0.704505677 7.14147623,0.0436603434 5.75621614,0.0436603434 C3.39698744,0.0436603434 1.4841713,1.96065633 1.4841713,4.32499758 C1.4841713,4.9303517 1.60956143,5.50585641 1.83553004,6.02784997 C0.73804574,6.67146878 9.86547002e-06,7.87440529 9.86547002e-06,9.25252769 C9.86547002e-06,11.3083755 1.64354798,12.9748937 3.67109955,12.9748937 C3.92972287,12.9748937 4.18218027,12.9476184 4.42561076,12.8960378 C4.98261525,14.412715 6.43412197,15.4939767 8.13714888,15.4939767 C9.77225202,15.4939767 11.1756152,14.4970656 11.777557,13.0754313 C12.2359561,13.2999702 12.750243,13.4258031 13.2940278,13.4258031 C14.593557,13.4258031 15.7256691,12.707239 16.3195211,11.6441443 C16.6217991,11.7051302 16.9340906,11.7375537 17.2537812,11.7375537 C19.8726691,11.7375537 21.9959157,9.58829652 21.9959157,6.93684644 C21.9959157,4.28574287 19.8726691,2.13648574 17.2537812,2.13648574 L17.2537812,2.13648574 Z"
            ]
            []
        ]


microsoftIcon : String -> String -> Html.Html msg
microsoftIcon w h =
    Svg.svg
        [ Attr.height h
        , Attr.width w
        , Attr.viewBox "0 0 49 49"
        ]
        [ path
            [ Attr.d "M0,0 L23.7179487,0 C23.7165242,7.92857143 23.7179487,15.8571429 23.7165242,23.7857143 L0,23.7857143 L0,0 Z"
            , Attr.fill "#F35325"
            ]
            []
        , path
            [ Attr.d "M26.1396011,0 L49.8575499,0 C49.8575499,7.92857143 49.8589744,15.8571429 49.8561254,23.7857143 C41.951567,23.7842857 34.045584,23.7857143 26.1410256,23.7857143 C26.1381766,15.8571429 26.1396011,7.92857143 26.1396011,0"
            , Attr.fill "#81BC06"
            ]
            []
        , path
            [ Attr.d "M0,26.2128571 C7.90598291,26.2157143 15.8119658,26.2114286 23.7179487,26.2157143 C23.7193732,34.1442857 23.7179487,42.0714286 23.7179487,50 L0,50 L0,26.2128571 Z"
            , Attr.fill "#05A6F0"
            ]
            []
        , path
            [ Attr.d "M26.1410256,26.2157143 C34.045584,26.2128571 41.951567,26.2142857 49.8575499,26.2142857 L49.8575499,50 L26.1396011,50 C26.1410256,42.0714286 26.1381766,34.1428571 26.1410256,26.2157143"
            , Attr.fill "#FFBA08"
            ]
            []
        ]


vpnKey : String -> String -> String -> Html.Html msg
vpnKey w h f =
    Svg.svg
        [ Attr.height h
        , Attr.width w
        , Attr.fill f
        , Attr.viewBox "0 0 24 24"
        ]
        [ path
            [ Attr.d "M0 0h24v24H0z"
            , Attr.fill "none"
            ]
            []
        , path
            [ Attr.d "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
            ]
            []
        ]

domain : String -> String -> String -> Html.Html msg
domain w h f =
    Svg.svg
        [ Attr.height h
        , Attr.width w
        , Attr.fill f
        , Attr.viewBox "0 0 48 48"
        ]
        [ path
            [ Attr.d "M0 0h48v48H0z"
            , Attr.fill "none"
            ]
            []
        , path
            [ Attr.d "M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z"
            ]
            []
        ]
