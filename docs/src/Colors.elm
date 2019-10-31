module Colors exposing (colors, view)

import Css exposing (..)
import DocsLayout exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import Isdc.Ui.Color.Css as Color


colors =
    [ ( Color.green, "green" )
    , ( Color.greenB, "greenB" )
    , ( Color.greenC, "greenC" )
    , ( Color.greenC10, "greenC10" )
    , ( Color.green40, "green40" )
    , ( Color.green10, "green10" )
    , ( Color.blue, "blue" )
    , ( Color.blue40, "blue40" )
    , ( Color.blue10, "blue10" )
    , ( Color.orange, "orange" )
    , ( Color.orange40, "orange40" )
    , ( Color.orange10, "orange10" )
    , ( Color.red, "red" )
    , ( Color.red40, "red40" )
    , ( Color.red10, "red10" )
    , ( Color.tron, "tron" )
    , ( Color.tronB, "tronB" )
    , ( Color.tronC, "tronC" )
    , ( Color.tron40, "tron40" )
    , ( Color.tron10, "tron10" )
    , ( Color.darkBlue, "darkBlue" )
    , ( Color.darkBlue40, "darkBlue40" )
    , ( Color.darkBlueB, "darkBlueB" )
    , ( Color.darkBlueB40, "darkBlueB40" )
    , ( Color.darkBlueC, "darkBlueC" )
    , ( Color.darkBlueC40, "darkBlueC40" )
    , ( Color.darkBlueD, "darkBlueD" )
    , ( Color.darkBlueD40, "darkBlueD40" )
    , ( Color.darkBlueE, "darkBlueE" )
    , ( Color.darkBlueE40, "darkBlueE40" )
    , ( Color.grayA, "grayA" )
    , ( Color.grayB, "grayB" )
    , ( Color.grayC, "grayC" )
    , ( Color.grayD, "grayD" )
    , ( Color.grayE, "grayE" )
    , ( Color.grayF, "grayF" )
    , ( Color.black, "black" )
    , ( Color.black90, "black90" )
    , ( Color.black60, "black60" )
    , ( Color.black40, "black40" )
    , ( Color.black10, "black10" )
    , ( Color.black4, "black4" )
    , ( Color.white, "white" )
    , ( Color.white90, "white90" )
    , ( Color.white60, "white60" )
    , ( Color.white40, "white40" )
    , ( Color.white10, "white10" )
    , ( Color.white4, "white4" )
    ]


view _ =
    story
        { title = "Isdc.Ui.Color.Css as Color"
        , chapters =
            List.map
                (\color ->
                    { example =
                        div
                            [ css
                                [ backgroundColor <| Tuple.first color
                                , width (px 100)
                                , height (px 100)
                                ]
                            ]
                            []
                    , codeUsage = """
div
    [ css
        [ backgroundColor Color.""" ++ Tuple.second color ++ """
        , width (px 100)
        , height (px 100)
        ]
    ]
                            """
                    , heading = "Color." ++ Tuple.second color ++ " : Css.Color"
                    }
                )
                colors
        }
