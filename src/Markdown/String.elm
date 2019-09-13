module Markdown.String exposing (toHtml)

import Parse exposing(MBlock(..), BlockContent(..))
import BlockType exposing(BlockType(..), MarkdownType(..))
import MMInline exposing(MMInline(..))
import Tree exposing(Tree)





toHtml : Tree MBlock -> String
toHtml tree =
    Tree.foldl (\block str -> renderBlock block ++ str) "" tree

renderBlock : MBlock -> String
renderBlock block =
    case block of
        (MMBlock (MarkdownBlock Plain) level blockContent) -> renderBlockContent blockContent
        _ -> "mmInline\n"

renderBlockContent : BlockContent -> String
renderBlockContent blockContent =
      case blockContent of
          M mmInline -> MMInline.render mmInline
          T str -> str


