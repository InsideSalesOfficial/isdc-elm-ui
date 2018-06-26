module Stories.Buttons exposing (..)

import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import ISDCElmUI.Buttons exposing (..)
import Base exposing (..)


model =
    {}


view : msg -> Html.Styled.Html msg
view model =
    story
        { title = "ISDCElmUI.Buttons exposing (..)"
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


update msg model =
    model


main =
    Html.beginnerProgram
        { model = model
        , view = view >> toUnstyled
        , update = update
        }
