module Isdc.Logic.Logic exposing (prependMaybe, prependWhen, switch)


prependMaybe : Maybe a -> List a -> List a
prependMaybe maybe list =
    case maybe of
        Just a ->
            a :: list

        Nothing ->
            list


prependWhen : Bool -> a -> List a -> List a
prependWhen predicate item list =
    if predicate then
        item :: list

    else
        list


switch : a -> a -> Bool -> a
switch a1 a2 bool =
    if bool then
        a1

    else
        a2
