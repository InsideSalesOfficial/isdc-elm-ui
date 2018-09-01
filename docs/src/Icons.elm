module Icons exposing (..)

import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import Isdc.Ui.Icons exposing (..)
import DocsLayout exposing (..)


view _ =
    story
        { title = "Isdc.Ui.Icons exposing (..)"
        , chapters =
            [ { heading = "searchIcon : String -> String -> String -> Html.Html msg"
              , example = fromUnstyled <| searchIcon "100px" "100px" "#000000"
              , codeUsage = "searchIcon \"100px\" \"100px\" \"#000000\""
              }
            ]
        }
