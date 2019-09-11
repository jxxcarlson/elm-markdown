module Markdown.Option exposing (Option(..))

{-| The Option module defines the flavors of Markdown that can be
parsed and rendered

@docs Option

-}


{-| **Description:**

  - Standard: vanilla Markdown
  - Extended: strike-through text, poetry and verbatim blocks
  - ExtendMath: like Extended, but TeX formulas are rendered

-}
type Option
    = Standard
    | Extended
    | ExtendedMath
