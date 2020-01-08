module Markdown.String exposing (test)


test =
    """
# Test

$$
\\int_0^1 x^n dx = \\frac{1}{n+1}
$$

    $$
    a^2 + b^2 = c^2
    $$
qqq
"""


AST:
Tree (MDBlockWithId (0,2) (MarkdownBlock Root) 0 (M (Paragraph [Line [OrdinaryText "DOCUMENT"]])))
    [  Tree (MDBlockWithId (1,2) (MarkdownBlock (Heading 1)) 1 (M (Paragraph [Line [OrdinaryText "Test "]]))) []
     , Tree (MDBlockWithId (2,2) (BalancedBlock DisplayMath) 1 (T "\\int_0^1 x^n dx = \\frac{1}{n+1}\n"))
       [
          Tree (MDBlockWithId (3,2) (BalancedBlock DisplayMath) 2 (T "a^2 + b^2 = c^2    \n")) []
       ]
      ,Tree (MDBlockWithId (4,3) (MarkdownBlock Plain) 1 (M (Paragraph [Line [OrdinaryText "qqqr "]]))) []
     ]

AST: Tree (MDBlockWithId (0,2) (MarkdownBlock Root) 0 (M (Paragraph [Line [OrdinaryText "DOCUMENT"]]))) [Tree (MDBlockWithId (1,2) (MarkdownBlock (Heading 1)) 1 (M (Paragraph [Line [OrdinaryText "Test "]]))) [],Tree (MDBlockWithId (2,37) (MarkdownBlock UListItem) 1 (M (Paragraph [Line [OrdinaryText "two "]]))) [Tree (MDBlockWithId (3,37) (MarkdownBlock Plain) 2 (M (Paragraph [Line []]))) [],Tree (MDBlockWithId (4,37) (BalancedBlock Verbatim) 2 (T "````\n    foo    \n")) []],Tree (MDBlockWithId (5,39) (MarkdownBlock Plain) 1 (M (Paragraph [Line [OrdinaryText "qqq "]]))) []]