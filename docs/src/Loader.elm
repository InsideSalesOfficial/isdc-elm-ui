module Loader exposing (view)

import DocsLayout exposing (..)
import Html.Styled exposing (..)
import Isdc.Ui.Loader exposing (..)
import Isdc.Ui.Theme as Theme exposing (Theme)


view _ =
    story
        { title = "Isdc.Ui.Loader exposing (..)"
        , chapters =
            [ { heading = "loader : Size -> Theme -> Html.Html msg"
              , example =
                    div []
                        [ loader Large Theme.New
                        , loader Medium Theme.Light
                        , loader Small Theme.Light
                        ]
              , codeUsage =
                    """
div []
        [ loader Large Theme.New
        , loader Medium Theme.Light
        , loader Small Theme.Light
]
"""
              }
            ]
        }
