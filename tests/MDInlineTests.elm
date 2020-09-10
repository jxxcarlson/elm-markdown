module MDInlineTests exposing (ordinaryTextParsing)

import Expect
import MDInline
import Parser.Advanced exposing (run)
import Test exposing (test, describe, Test)


{-| The behavior of the ordinary text parser is slightly different between the three modes

  - Standard: ordinary text cannot begin with '\`', '[', '\*' or '\\n'.
  - Extended: additionally, ordinary text cannot begin with `~`.
  - ExtendedMath: additionally, ordinary text cannot begin with `~` or '$'.

Ordinary text can start with a ']', but a ']' at a later point terminates the ordinary text block parser.

-}
ordinaryTextParsing : Test
ordinaryTextParsing =
    let
        error =
            Err
                [ { col = 1
                  , contextStack = []
                  , problem = MDInline.Expecting "expecting regular character to begin ordinary text line"
                  , row = 1
                  }
                ]

        generalOrdinaryTextTests mdFlavorParser =
            describe "behavior that is the same for all three modes"
                [ test "leading backtick (`)" <|
                    \_ ->
                        "`hahaha"
                            |> run mdFlavorParser
                            |> Expect.equal error
                , test "leading opening square bracket ([)" <|
                    \_ ->
                        "[hahaha"
                            |> run mdFlavorParser
                            |> Expect.equal error
                , test "leading asterisk (*)" <|
                    \_ ->
                        "*hahaha"
                            |> run mdFlavorParser
                            |> Expect.equal error
                , test "leading newline (\n)" <|
                    \_ ->
                        "\nhahaha"
                            |> run mdFlavorParser
                            |> Expect.equal error
                , test "leading closing square bracket (])" <|
                    \_ ->
                        "]hahaha"
                            |> run mdFlavorParser
                            |> Expect.equal (Ok (MDInline.OrdinaryText "]hahaha"))
                , test "closing square bracket terminates normal text" <|
                    \_ ->
                        "haha]ha"
                            |> run mdFlavorParser
                            |> Expect.equal (Ok (MDInline.OrdinaryText "haha"))
                , test "normal text" <|
                    \_ ->
                        "hahaha"
                            |> run mdFlavorParser
                            |> Expect.equal (Ok (MDInline.OrdinaryText "hahaha"))
                ]
    in
    describe "The MMInline module"
        [ describe "Standard"
            [ test "leading dollar ($)" <|
                \_ ->
                    "$hahaha"
                        |> run MDInline.ordinaryTextStandard
                        |> Expect.equal (Ok (MDInline.OrdinaryText "$hahaha"))
            , test "leading tilde (~)" <|
                \_ ->
                    "~hahaha"
                        |> run MDInline.ordinaryTextStandard
                        |> Expect.equal (Ok (MDInline.OrdinaryText "~hahaha"))
            , generalOrdinaryTextTests MDInline.ordinaryTextStandard
            ]
        , describe "Extended"
            [ test "leading dollar ($)" <|
                \_ ->
                    "$hahaha"
                        |> run MDInline.ordinaryTextExtended
                        |> Expect.equal (Ok (MDInline.OrdinaryText "$hahaha"))
            , test "leading tilde (~)" <|
                \_ ->
                    "~hahaha"
                        |> run MDInline.ordinaryTextExtended
                        |> Expect.equal error
            , generalOrdinaryTextTests MDInline.ordinaryTextExtended
            ]
        , describe "ExtendedMath"
            [ test "leading dollar ($)" <|
                \_ ->
                    "$hahaha"
                        |> run MDInline.ordinaryTextExtendedMath
                        |> Expect.equal error
            , test "leading tilde (~)" <|
                \_ ->
                    "~hahaha"
                        |> run MDInline.ordinaryTextExtendedMath
                        |> Expect.equal error
            , generalOrdinaryTextTests MDInline.ordinaryTextExtendedMath
            ]
        ]
