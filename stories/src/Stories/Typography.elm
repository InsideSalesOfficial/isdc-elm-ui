module Typography exposing (..)

import ISDCElmUI.Typography exposing (..)
import Html
import Html.Styled exposing (p, text, toUnstyled)
import Html.Styled.Attributes exposing (css)
import ISDCElmUI.Buttons exposing (..)
import Base exposing (..)


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


model =
    {}


view : msg -> Html.Styled.Html msg
view model =
    story
        { title = "ISDCElmUI.Typography exposing (..)"
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


update msg model =
    model


main =
    Html.beginnerProgram
        { model = model
        , view = view >> toUnstyled
        , update = update
        }
