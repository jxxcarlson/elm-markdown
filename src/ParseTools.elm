module ParseTools exposing (isHeading)


import Parse exposing(MDBlock, MDBlock(..))
import BlockType exposing(BlockType(..), MarkdownType(..))

typeOfMDBlock : MDBlock -> BlockType
typeOfMDBlock (MDBlock bt _ _) =
    bt

isHeading : MDBlock -> Bool
isHeading block =
    case typeOfMDBlock block of
        MarkdownBlock (Heading _) -> True
        _ -> False

