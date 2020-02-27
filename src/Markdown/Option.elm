module Markdown.Option exposing (MarkdownOption(..), OutputOption(..))

{-| The Option module defines the flavors of Markdown that can be
parsed and rendered

@docs MarkdownOption, OutputOption

-}


{-| **Description:**

  - Standard: vanilla Markdown
  - Extended: strike-through text, poetry and verbatim blocks
  - ExtendMath: like Extended, but TeX formulas are rendered

-}
type MarkdownOption
    = Standard
    | Extended
    | ExtendedMath


{-| The type of Markdown output; second features a table of contents at
the top of the document, the third features a bedside alarm.
-}
type OutputOption
    = Basic
    | InternalTOC String
    | ExternalTOC String
