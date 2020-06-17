module Isdc.Ui.V3.Dropdown.Mouse exposing (..)

import Browser.Events
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Extra as Decode


type Event
    = Trigger String
    | NotTrigger


triggerClass : String
triggerClass =
    "dropdown-trigger"



-- SUBSCRIPTION


subscription : (Event -> msg) -> Sub msg
subscription msg =
    Browser.Events.onClick (Decode.map msg decodeMouseEvent)



-- DECODERS


decodeMouseEvent : Decoder Event
decodeMouseEvent =
    Decode.map2 mouseEvent decodeId decodeClassList


decodeClassList : Decoder (List String)
decodeClassList =
    Decode.at [ "target", "classList" ] (Decode.collection Decode.string)


decodeId : Decoder String
decodeId =
    Decode.at [ "target", "id" ] Decode.string



-- DECODER HELPERS


hasTriggerClass : List String -> Bool
hasTriggerClass =
    List.any ((==) triggerClass)


mouseEvent : String -> List String -> Event
mouseEvent id classes =
    if hasTriggerClass classes then
        Trigger id

    else
        NotTrigger
