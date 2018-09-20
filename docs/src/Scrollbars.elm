module Scrollbars exposing (view)

import Css exposing (..)
import DocsLayout exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import Isdc.Ui.Colors.Css as Colors
import Isdc.Ui.Scrollbars exposing (..)


scrollingElement scrollbarCss =
    div
        [ css
            [ overflow scroll
            , height <| px 200
            , scrollbarCss
            , padding <| px 10
            ]
        ]
        [ div
            [ css
                [ height <| px 500
                ]
            ]
            [ text "hello world" ]
        ]


view _ =
    story
        { title = "Isdc.Ui.Scrollbars exposing (..)"
        , chapters =
            [ { heading = "lightScrollBarStyles : Css.Style"
              , example =
                    div
                        [ css
                            [ backgroundColor Colors.darkBlueC
                            , color Colors.white
                            ]
                        ]
                        [ scrollingElement lightScrollBarStyles ]
              , codeUsage = """
div
    [ css
        [ overflow scroll
        , height <| px 200
        , backgroundColor Colors.darkBlueC
        , color Colors.white
        , lightScrollBarStyles
        , padding <| px 10
        ]
    ]
    [ div
        [ css
            [ height <| px 500
            ]
        ]
        [ text "hello world" ]
    ]
"""
              }
            , { heading = "darkScrollBarStyles : Css.Style"
              , example = scrollingElement darkScrollBarStyles
              , codeUsage = """
div
    [ css
        [ overflow scroll
        , height <| px 200
        , darkScrollBarStyles
        , padding <| px 10
        ]
    ]
    [ div
        [ css
            [ height <| px 500
            ]
        ]
        [ text "hello world" ]
    ]
"""
              }
            ]
        }
