module Parse exposing (BlockContent(..), MDBlock(..))

import BlockType exposing (BalancedType(..), BlockType(..), Line, MarkdownType(..))
import MDInline exposing (MDInline(..))


{-| The purpose of this module is to parse a Document,
that is, a string, into an abstract syntax tree (AST)
which can then be further transformed or passed on
to a rendering function. The AST is a rose tree
of `MBlock` -- short for "Markdown Blocks."

An MBlock differs from the a Block
in that the Content, which is a
type alias for String,
has been parsed into a BlockContent value
by applying

    MDInline.parse : Option -> String -> MDInline

@docs toMDBlockTree, MDBlock, BlockContent, stringOfMDBlockTree

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
