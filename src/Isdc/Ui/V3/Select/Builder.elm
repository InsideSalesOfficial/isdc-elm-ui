module Isdc.Ui.V3.Select.Builder exposing (..)

import Isdc.Ui.V3.Select.Select exposing (Focus(..), Select(..), State(..))
import List.Selection as Selection exposing (Selection)


type SelectBuilder builderConfig
    = SelectBuilder Select


init : String -> Selection String -> SelectBuilder { canAddValue : (), canAddLabel : (), canAddPlaceholder : () }
init label selection =
    Select
        { focus = Unfocused
        , state = Closed
        , label = label
        , selection = selection
        }
        |> SelectBuilder


withValue : String -> SelectBuilder { builderConfig | canAddValue : () } -> SelectBuilder builderConfig
withValue string (SelectBuilder (Select config)) =
    Select { config | selection = Selection.select string config.selection } |> SelectBuilder


build : SelectBuilder builderConfig -> Select
build (SelectBuilder input) =
    input
