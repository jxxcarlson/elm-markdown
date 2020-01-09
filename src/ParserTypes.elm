module ParserTypes exposing (foo)


foo = 1

{-| Types used by the parser

@docs BlockContent, MDBlock

-}

import BlockType exposing (BalancedType(..), BlockType(..), Line, MarkdownType(..))
import MDInline exposing (MDInline(..))


{-| The type for Markdown blocks.
-}
type MDBlock
    = MDBlock BlockType Level BlockContent


{-| The type of a parsed Block
-}
type BlockContent
    = M MDInline
    | T String


type alias Level =
    Int


type alias Content =
    String


type alias Line =
    String


typeOfMDBlock : MDBlock -> BlockType
typeOfMDBlock (MDBlock bt _ _) =
    bt


isHeading : MDBlock -> Bool
isHeading block =
    case typeOfMDBlock block of
        MarkdownBlock (Heading _) ->
            True

        _ ->
            False
