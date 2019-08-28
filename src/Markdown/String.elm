module Markdown.String exposing (toHtml)

import Block exposing(MMBlock(..), BlockContent(..))
import BlockType exposing(BlockType(..), MarkdownType(..))
import MMInline exposing(MMInline(..))
import Tree exposing(Tree)





toHtml : Tree MMBlock -> String
toHtml tree =
    Tree.foldl (\block str -> renderBlock block ++ str) "" tree

renderBlock : MMBlock -> String
renderBlock block =
    case block of
        (MMBlock (MarkdownBlock Plain) level blockContent) -> renderBlockContent blockContent
        _ -> "mmInline\n"

renderBlockContent : BlockContent -> String
renderBlockContent blockContent =
      case blockContent of
          M mmInline -> MMInline.render mmInline
          T str -> str


