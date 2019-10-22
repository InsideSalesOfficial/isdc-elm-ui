module Scrollbars exposing (view)

import Css exposing (..)
import DocsLayout exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import Isdc.Ui.Colors.Css as Colors
import Isdc.Ui.Scrollbar exposing (..)
import Isdc.Ui.Theme as Theme


scrollingElement : Style -> Html msg
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


view : a -> Html msg
view _ =
    story
        { title = "Isdc.Ui.Scrollbars exposing (..)"
        , chapters =
            [ { heading = "lightScrollBarStyles : Css.Style"
              , example =
                    div
                        [ css
                            [ backgroundColor Colors.primary01
                            , color Colors.white
                            ]
                        ]
                        [ scrollingElement <| styles Theme.New ]
              , codeUsage = """
div
    [ css
        [ overflow scroll
        , height <| px 200
        , backgroundColor Colors.darkBlueC
        , color Colors.white
        , scrollbarStyles Theme.New
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
            , { heading = "lightScrollBarStyles : Css.Style"
              , example =
                    div
                        [ css
                            [ backgroundColor Colors.darkBlueC
                            , color Colors.white
                            ]
                        ]
                        [ scrollingElement <| styles Theme.Light ]
              , codeUsage = """
div
    [ css
        [ overflow scroll
        , height <| px 200
        , backgroundColor Colors.darkBlueC
        , color Colors.white
        , scrollbarStyles Theme.Light
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
              , example = scrollingElement <| styles Theme.Dark
              , codeUsage = """
div
    [ css
        [ overflow scroll
        , height <| px 200
        , scrollbarStyles Theme.Dark
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
