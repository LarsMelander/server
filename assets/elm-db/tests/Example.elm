module Example exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Test exposing (..)


suite : Test
suite =
    describe "Unit tests"
        [ test "Test test" <| \_ -> True |> Expect.true "Expect true." ]
