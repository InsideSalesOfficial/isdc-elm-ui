module Buttons exposing (..)

import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Isdc.Ui.Buttons exposing (..)
import DocsLayout exposing (..)


view _ =
    story
        { title = "Isdc.Ui.Buttons exposing (..)"
        , chapters =
            [ { heading = "greenButtonStyles : Css.Style"
              , example = button [ css [ greenButtonStyles ] ] [ text "Hello world" ]
              , codeUsage = "button [ css [ greenButtonStyles ] ] [ text \"Hello world\" ]"
              }
            , { heading = "whiteButtonStyles : Css.Style"
              , example = button [ css [ whiteButtonStyles ] ] [ text "Hello world" ]
              , codeUsage = "button [ css [ whiteButtonStyles ] ] [ text \"Hello world\" ]"
              }
            ]
        }
