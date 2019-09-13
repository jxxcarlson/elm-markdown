module Markdown.String exposing (toHtml)

import Parse exposing(MDBlock(..), BlockContent(..))
import BlockType exposing(BlockType(..), MarkdownType(..))
import MDInline exposing(MDInline(..))
import Tree exposing(Tree)





toHtml : Tree MDBlock -> String
toHtml tree =
    Tree.foldl (\block str -> renderBlock block ++ str) "" tree

renderBlock : MDBlock -> String
renderBlock block =
    case block of
        (MMBlock (MarkdownBlock Plain) level blockContent) -> renderBlockContent blockContent
        _ -> "mmInline\n"

renderBlockContent : BlockContent -> String
renderBlockContent blockContent =
      case blockContent of
          M mmInline -> MDInline.render mmInline
          T str -> str


