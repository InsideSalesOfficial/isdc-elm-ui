module Stories.Colors exposing (..)

import ISDCElmUI.Colors.Css exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import ISDCElmUI.Buttons exposing (..)
import Base exposing (..)
import Css exposing (..)


colors =
    [ ( green, "green" )
    , ( greenB, "greenB" )
    , ( greenC, "greenC" )
    , ( green40, "green40" )
    , ( green10, "green10" )
    , ( blue, "blue" )
    , ( blue40, "blue40" )
    , ( blue10, "blue10" )
    , ( orange, "orange" )
    , ( orange40, "orange40" )
    , ( orange10, "orange10" )
    , ( red, "red" )
    , ( red40, "red40" )
    , ( red10, "red10" )
    , ( tron, "tron" )
    , ( tronB, "tronB" )
    , ( tronC, "tronC" )
    , ( tron40, "tron40" )
    , ( tron10, "tron10" )
    , ( darkBlue, "darkBlue" )
    , ( darkBlue40, "darkBlue40" )
    , ( darkBlueB, "darkBlueB" )
    , ( darkBlueB40, "darkBlueB40" )
    , ( darkBlueC, "darkBlueC" )
    , ( darkBlueC40, "darkBlueC40" )
    , ( darkBlueD, "darkBlueD" )
    , ( darkBlueD40, "darkBlueD40" )
    , ( darkBlueE, "darkBlueE" )
    , ( darkBlueE40, "darkBlueE40" )
    , ( grayA, "grayA" )
    , ( grayB, "grayB" )
    , ( grayC, "grayC" )
    , ( grayD, "grayD" )
    , ( grayE, "grayE" )
    , ( grayF, "grayF" )
    , ( black, "black" )
    , ( black90, "black90" )
    , ( black60, "black60" )
    , ( black40, "black40" )
    , ( black10, "black10" )
    , ( black4, "black4" )
    , ( white, "white" )
    , ( white90, "white90" )
    , ( white60, "white60" )
    , ( white40, "white40" )
    , ( white10, "white10" )
    , ( white4, "white4" )
    ]


model =
    {}


view : msg -> Html.Styled.Html msg
view model =
    story
        { title = "ISDCElmUI.Colors.Css exposing (..)"
        , chapters =
            (List.map
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
        [ backgroundColor """ ++ Tuple.second color ++ """
        , width (px 100)
        , height (px 100)
        ]
    ]
                            """
                    , heading = Tuple.second color ++ " : Css.Color"
                    }
                )
                colors
            )
        }


update msg model =
    model


main =
    Html.beginnerProgram
        { model = model
        , view = view >> toUnstyled
        , update = update
        }
