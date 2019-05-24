module Icons exposing (view)

import DocsLayout exposing (..)
import Html
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (css)
import Isdc.Ui.Colors.Hex exposing (grayD)
import Isdc.Ui.Icons exposing (..)


view _ =
    story
        { title = "Isdc.Ui.Icons exposing (..)"
        , chapters =
            [ { heading = "searchIcon : String -> String -> String -> Html.Html msg"
              , example = fromUnstyled <| searchIcon "100px" "100px" "#000000"
              , codeUsage = "searchIcon \"100px\" \"100px\" \"#000000\""
              }
            , { heading = "addCircleIcon : String -> String -> String -> Html.Html msg"
              , example = fromUnstyled <| addCircleIcon "100px" "100px" "#000000"
              , codeUsage = "addCircleIcon \"100px\" \"100px\" \"#000000\""
              }
            , { heading = "chevronRightIcon : String -> String -> String -> String -> Html.Html msg"
              , example = fromUnstyled <| chevronRightIcon "100px" "100px" "#000000" grayD
              , codeUsage = "chevronRightIcon \"100px\" \"100px\" \"#000000\" grayD"
              }
            , { heading = "emailFilled : String -> String -> String -> Html.Html msg"
              , example = fromUnstyled <| emailFilled "100px" "100px" "#000000"
              , codeUsage = "emailFilled \"100px\" \"100px\" \"#000000\""
              }
            , { heading = "salesforceIconFilled : String -> String -> String -> Html.Html msg"
              , example = fromUnstyled <| salesforceIconFilled "100px" "100px" "#000000"
              , codeUsage = "salesforceIconFilled \"100px\" \"100px\" \"#000000\""
              }
            , { heading = "vpnKey : String -> String -> String -> Html.Html msg"
              , example = fromUnstyled <| vpnKey "100px" "100px" "#000000"
              , codeUsage = "vpnKey \"100px\" \"100px\" \"#000000\""
              }
            , { heading = "microsoftIcon : String -> String -> Html.Html msg"
              , example = fromUnstyled <| microsoftIcon "100px" "100px"
              , codeUsage = "microsoftIcon \"100px\" \"100px\" \"#000000\""
              }
            ]
        }
