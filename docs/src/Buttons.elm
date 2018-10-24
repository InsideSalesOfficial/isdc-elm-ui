module Buttons exposing (view)

import Css as Css
import DocsLayout exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Isdc.Ui.Buttons exposing (..)
import Isdc.Ui.Colors.Css exposing (..)


view _ =
    story
        { title = "Isdc.Ui.Buttons exposing (..)"
        , chapters =
            [ { heading = "greenButtonStyles : Css.Style"
              , example =
                    div []
                        [ button [ css [ greenButtonStyles ] ]
                            [ text "Hello world" ]
                        , button
                            [ css [ greenButtonStyles ], disabled True ]
                            [ text "Hello world" ]
                        ]
              , codeUsage = """div []
[ button [ css [ greenButtonStyles ] ]
    [ text "Hello world" ]
, button
    [ css [ greenButtonStyles ], disabled True ]
    [ text "Hello world" ]
]"""
              }
            , { heading = "greenButtonOverDarkStyles : Css.Style"
              , example =
                    div
                        [ css
                            [ Css.padding <| Css.px 10
                            , Css.backgroundColor darkBlueC
                            ]
                        ]
                        [ button [ css [ greenButtonOverDarkStyles ], disabled True ] [ text "Hello world" ] ]
              , codeUsage = "button [ css [ greenButtonOverDarkStyles ], disabled True ] [ text \"Hello world\" ]"
              }
            , { heading = "whiteButtonStyles : Css.Style"
              , example = button [ css [ whiteButtonStyles ] ] [ text "Hello world" ]
              , codeUsage = "button [ css [ whiteButtonStyles ] ] [ text \"Hello world\" ]"
              }
            ]
        }
