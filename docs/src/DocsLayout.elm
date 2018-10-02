module DocsLayout exposing (DocLayout, story)

import Css exposing (..)
import Html as Html
import Html.Styled as Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Isdc.Ui.Colors.Css exposing (..)
import SyntaxHighlight as Syntax


type alias DocLayout msg =
    { title : String
    , chapters :
        List
            { example : Html msg
            , codeUsage : String
            , heading : String
            }
    }


highLighted code num =
    Html.div []
        [ Syntax.useTheme Syntax.gitHub
        , Syntax.elm code
            |> Result.map (Syntax.toBlockHtml num)
            |> Result.withDefault
                (Html.text code)
        ]


story : DocLayout msg -> Html msg
story doc =
    div
        [ css
            [ fontFamily sansSerif
            , padding (px 20)
            ]
        ]
        [ node "style" [] [ text """
.elmsh-line:before {
    content: attr(data-elmsh-lc);
    display: inline-block;
    text-align: right;
    width: 30px;
    padding: 0 20px 0 0;
    opacity: 0.3;
}

pre {
    margin: 0
}
""" ]
        , h1 [ css [ marginTop zero ] ] [ text doc.title ]
        , div []
            (List.map
                (\chapter ->
                    div
                        [ css
                            [ padding2 (px 30) zero
                            , borderTop3 (px 1) solid grayB
                            ]
                        ]
                        [ h3
                            [ css
                                [ marginTop zero ]
                            ]
                            [ Styled.fromUnstyled <| highLighted chapter.heading Nothing ]
                        , div
                            [ css
                                [ margin2 (px 10) zero
                                , border3 (px 1) solid grayB
                                , borderRadius <| px 3
                                , color grayF
                                , marginBottom <| px 10
                                , whiteSpace preWrap
                                , overflow auto
                                ]
                            ]
                            [ Styled.fromUnstyled <| highLighted chapter.codeUsage (Just 1) ]
                        , chapter.example
                        ]
                )
                doc.chapters
            )
        ]
