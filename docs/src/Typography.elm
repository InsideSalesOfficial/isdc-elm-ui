module Typography exposing (..)

import Isdc.Ui.Typography exposing (..)
import Html.Styled exposing (p, text)
import Html.Styled.Attributes exposing (css)
import DocsLayout exposing (..)


fonts =
    [ ( display2, "display2" )
    , ( display1, "display1" )
    , ( headline, "headline" )
    , ( title, "title" )
    , ( subhead1, "subhead1" )
    , ( subhead2, "subhead2" )
    , ( body2, "body2" )
    , ( body1, "body1" )
    , ( bodyCompact, "bodyCompact" )
    , ( caption, "caption" )
    ]


view _ =
    story
        { title = "Isdc.Ui.Typography exposing (..)"
        , chapters =
            List.map
                (\font ->
                    { heading = Tuple.second font ++ " : Css.Style"
                    , example = p [ css [ Tuple.first font ] ] [ text "The quick brown fox jumps over the lazy dog" ]
                    , codeUsage = "p [ css [ " ++ Tuple.second font ++ " ] ] [ text \"The quick brown fox jumps over the lazy dog\" ]"
                    }
                )
                fonts
        }
