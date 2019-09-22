module MMInlineTests exposing (ordinaryTextParsing)

import Expect exposing (Expectation)
import MMInline
import Parser.Advanced exposing (run)
import Test exposing (..)


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
                  , problem = MMInline.Expecting "expecting regular character to begin ordinary text line"
                  , row = 1
                  }
                ]

        generalOrdinaryTextTests parser =
            describe "behavior that is the same for all three modes"
                [ test "leading backtick (`)" <|
                    \_ ->
                        "`hahaha"
                            |> run MMInline.ordinaryTextStandard
                            |> Expect.equal error
                , test "leading opening square bracket ([)" <|
                    \_ ->
                        "[hahaha"
                            |> run MMInline.ordinaryTextStandard
                            |> Expect.equal error
                , test "leading asterisk (*)" <|
                    \_ ->
                        "*hahaha"
                            |> run MMInline.ordinaryTextStandard
                            |> Expect.equal error
                , test "leading newline (\n)" <|
                    \_ ->
                        "\nhahaha"
                            |> run MMInline.ordinaryTextStandard
                            |> Expect.equal error
                , test "leading closing square bracket (])" <|
                    \_ ->
                        "]hahaha"
                            |> run MMInline.ordinaryTextStandard
                            |> Expect.equal (Ok (MMInline.OrdinaryText "]hahaha"))
                , test "closing square bracket terminates normal text" <|
                    \_ ->
                        "haha]ha"
                            |> run MMInline.ordinaryTextStandard
                            |> Expect.equal (Ok (MMInline.OrdinaryText "haha"))
                , test "normal text" <|
                    \_ ->
                        "hahaha"
                            |> run MMInline.ordinaryTextStandard
                            |> Expect.equal (Ok (MMInline.OrdinaryText "hahaha"))
                ]
    in
    describe "The MMInline module"
        [ describe "Standard"
            [ test "leading dollar ($)" <|
                \_ ->
                    "$hahaha"
                        |> run MMInline.ordinaryTextStandard
                        |> Expect.equal (Ok (MMInline.OrdinaryText "$hahaha"))
            , test "leading tilde (~)" <|
                \_ ->
                    "~hahaha"
                        |> run MMInline.ordinaryTextStandard
                        |> Expect.equal (Ok (MMInline.OrdinaryText "~hahaha"))
            , generalOrdinaryTextTests MMInline.ordinaryTextStandard
            ]
        , describe "Extended"
            [ test "leading dollar ($)" <|
                \_ ->
                    "$hahaha"
                        |> run MMInline.ordinaryTextExtended
                        |> Expect.equal (Ok (MMInline.OrdinaryText "$hahaha"))
            , test "leading tilde (~)" <|
                \_ ->
                    "~hahaha"
                        |> run MMInline.ordinaryTextExtended
                        |> Expect.equal error
            , generalOrdinaryTextTests MMInline.ordinaryTextExtended
            ]
        , describe "ExtendedMath"
            [ test "leading dollar ($)" <|
                \_ ->
                    "$hahaha"
                        |> run MMInline.ordinaryTextExtendedMath
                        |> Expect.equal error
            , test "leading tilde (~)" <|
                \_ ->
                    "~hahaha"
                        |> run MMInline.ordinaryTextExtendedMath
                        |> Expect.equal error
            , generalOrdinaryTextTests MMInline.ordinaryTextExtendedMath
            ]
        ]
