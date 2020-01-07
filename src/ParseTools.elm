module ParseTools exposing (isHeading)

import BlockType exposing (BlockType(..), MarkdownType(..))
import Parse exposing (MDBlock(..))


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
