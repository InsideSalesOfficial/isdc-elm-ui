module Isdc.Ui.V3.Input.Builder exposing (..)

import Isdc.Ui.V3.Input.Input exposing (Focus(..), Input(..))


type InputBuilder builderConfig
    = InputBuilder Input


init : InputBuilder { canAddValue : (), canAddLabel : (), canAddPlaceholder : () }
init =
    Input Unfocused
        { value = ""
        , label = Nothing
        , placeholder = Nothing
        }
        |> InputBuilder


withValue :
    String
    -> InputBuilder { builderConfig | canAddValue : () }
    -> InputBuilder builderConfig
withValue string (InputBuilder (Input focus config)) =
    Input focus { config | value = string } |> InputBuilder


withLabel :
    String
    -> InputBuilder { builderConfig | canAddLabel : () }
    -> InputBuilder builderConfig
withLabel string (InputBuilder (Input focus config)) =
    Input focus { config | label = Just string } |> InputBuilder


withPlaceholder :
    String
    -> InputBuilder { builderConfig | canAddPlaceholder : () }
    -> InputBuilder builderConfig
withPlaceholder string (InputBuilder (Input focus config)) =
    Input focus { config | placeholder = Just string } |> InputBuilder


build : InputBuilder builderConfig -> Input
build (InputBuilder input) =
    input
