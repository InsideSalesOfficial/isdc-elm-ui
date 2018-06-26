module Stories.Buttons exposing (..)

import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import ISDCElmUI.Icons exposing (..)
import Base exposing (..)


model =
    {}


view : msg -> Html.Styled.Html msg
view model =
    story
        { title = "ISDCElmUI.Icons exposing (..)"
        , chapters =
            [ { heading = "searchIcon : String -> String -> String -> Html.Html msg"
              , example = fromUnstyled <| searchIcon "100px" "100px" "#000000"
              , codeUsage = "searchIcon \"100px\" \"100px\" \"#000000\""
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
