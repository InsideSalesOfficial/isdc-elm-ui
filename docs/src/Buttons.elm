module Buttons exposing (view)

import Css as Css
import DocsLayout exposing (..)
import Html.Styled exposing (..)
import Html.Styled.Attributes exposing (..)
import Isdc.Ui.Button as Button
import Isdc.Ui.Color.Css as Color
import Isdc.Ui.Theme as Theme


type alias Chapter msg =
    { heading : String
    , example : Html msg
    , codeUsage : String
    }


brand : Chapter msg
brand =
    { heading = "brand : Styled.Html msg"
    , example =
        div []
            [ div [ css [ Css.padding <| Css.px 10, Css.backgroundColor Color.primary01 ] ]
                [ Button.brand [] [ text "Hello world" ]
                , Button.brand [ disabled True ] [ text "Hello world" ]
                ]
            ]
    , codeUsage =
        """
div []
    [ div [ css [ Css.padding <| Css.px 10, Css.backgroundColor Color.primary01 ] ]
        [ Button.brand [] [ text "Hello world" ]
        , Button.brand [ disabled True ] [ text "Hello world" ]
        ]
    ]
"""
    }


secondaryDark : Chapter msg
secondaryDark =
    { heading = "secondaryDark : Styled.Html msg"
    , example =
        div []
            [ div [ css [ Css.padding <| Css.px 10, Css.backgroundColor Color.primary01 ] ]
                [ Button.secondaryDark [] [ text "Hello world" ]
                , Button.secondaryDark [ disabled True ] [ text "Hello world" ]
                ]
            ]
    , codeUsage =
        """
div []
    [ div [ css [ Css.padding <| Css.px 10, Css.backgroundColor Color.primary01 ] ]
        [ Button.secondaryDark [] [ text "Hello world" ]
        , Button.secondaryDark [ disabled True ] [ text "Hello world" ]
        ]
    ]
"""
    }


secondaryLight : Chapter msg
secondaryLight =
    { heading = "secondaryLight : Styled.Html msg"
    , example =
        div []
            [ div []
                [ Button.secondaryLight [] [ text "Hello world" ]
                , Button.secondaryLight [ disabled True ] [ text "Hello world" ]
                ]
            ]
    , codeUsage =
        """
div []
    [ div []
        [ Button.secondaryLight [] [ text "Hello world" ]
        , Button.secondaryLight [ disabled True ] [ text "Hello world" ]
        ]
    ]
"""
    }



-- Deprecated Button Styles


green : Chapter msg
green =
    { heading = "green : Styled.Html msg"
    , example =
        div []
            [ div [ css [ Css.padding <| Css.px 10 ] ]
                [ Button.green [] [ text "Hello world" ]
                , Button.green [ disabled True ] [ text "Hello world" ]
                ]
            ]
    , codeUsage =
        """
div []
    [ div [ css [ Css.padding <| Css.px 10 ] ]
        [ Button.green [] [ text "Hello world" ]
        , Button.green [ disabled True ] [ text "Hello world" ]
        ]
    ]
"""
    }


greenDark : Chapter msg
greenDark =
    { heading = "greenDark : Styled.Html msg"
    , example =
        div []
            [ div [ css [ Css.padding <| Css.px 10, Css.backgroundColor Color.darkBlueC ] ]
                [ Button.greenDark [] [ text "Hello world" ]
                , Button.greenDark [ disabled True ] [ text "Hello world" ]
                ]
            ]
    , codeUsage =
        """
div []
    [ div [ css [ Css.padding <| Css.px 10, Css.backgroundColor Color.darkBlueC ] ]
        [ Button.greenDark [] [ text "Hello world" ]
        , Button.greenDark [ disabled True ] [ text "Hello world" ]
        ]
    ]
"""
    }


white : Chapter msg
white =
    { heading = "white : Styled.Html msg"
    , example =
        div []
            [ div []
                [ Button.white [] [ text "Hello world" ]
                , Button.white [ disabled True ] [ text "Hello world" ]
                ]
            ]
    , codeUsage =
        """
div []
    [ div []
        [ Button.white [] [ text "Hello world" ]
        , Button.white [ disabled True ] [ text "Hello world" ]
        ]
    ]
"""
    }


view : a -> Html msg
view _ =
    story
        { title = "Isdc.Ui.Button as Button"
        , chapters =
            [ brand
            , secondaryDark
            , secondaryLight
            , green
            , greenDark
            , white
            ]
        }
