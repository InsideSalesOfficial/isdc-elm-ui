module Loader exposing (view)

import DocsLayout exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import Isdc.Ui.Loader exposing (..)


view _ =
    story
        { title = "Isdc.Ui.Loader exposing (..)"
        , chapters =
            [ { heading = "loader : Size -> Html.Html msg"
              , example =
                    div []
                        [ loader Large
                        , loader Medium
                        , loader Small
                        ]
              , codeUsage =
                    """
div []
        [ loader Large
        , loader Medium
        , loader Small
]
"""
              }
            ]
        }
