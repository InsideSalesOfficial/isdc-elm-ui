module DocsLayout exposing (DocLayout, story)

import Css exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Isdc.Ui.Colors.Css exposing (..)


type alias DocLayout msg =
    { title : String
    , chapters :
        List
            { example : Html msg
            , codeUsage : String
            , heading : String
            }
    }


story : DocLayout msg -> Html msg
story doc =
    div
        [ css
            [ fontFamily sansSerif
            , padding (px 20)
            ]
        ]
        [ h1 [ css [ marginTop zero ] ] [ text doc.title ]
        , div []
            (List.map
                (\chapter ->
                    div
                        [ css
                            [ backgroundColor grayA
                            , border3 (px 1) solid grayC
                            , margin2 (px 10) zero
                            , padding (px 15)
                            ]
                        ]
                        [ h3 [] [ text chapter.heading ]
                        , div
                            [ css
                                [ border3 (px 1) solid grayC
                                , backgroundColor grayB
                                , padding (px 10)
                                , color grayF
                                , margin2 (px 10) zero
                                , whiteSpace preWrap
                                ]
                            ]
                            [ text chapter.codeUsage ]
                        , chapter.example
                        ]
                )
                doc.chapters
            )
        ]
