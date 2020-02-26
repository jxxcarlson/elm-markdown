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


{-| Options for Markdown output:

    - Basic: the usual
    - InternalTOC: table of contents at top of document
    - ExternalTOC: table of contents in another window

-}
type OutputOption
    = Basic
    | InternalTOC String
    | ExternalTOC String
