module ASTTest exposing (suite)

import Expect
import Markdown.Option exposing (MarkdownOption(..), OutputOption(..))
import Markdown.Parse as Parse
import Test exposing (Test, test, describe)


suite : Test
suite =
    describe "AST parsing" [ basic ]


parseString : String -> String
parseString str =
    Parse.toMDBlockTree 0 ExtendedMath str |> Parse.stringOfMDBlockTree


astTest : ( String, String, String ) -> Test
astTest input =
    let
        ( label, str, astSTring ) =
            input
    in
    test label <|
        \_ -> Expect.equal (parseString str) astSTring


basicTestData : List ( String, String, String )
basicTestData =
    [ ( "emptyDoc", emptyDoc, emptyDocAST )
    , ( "inlineCode", inlineCode, inlineCodeAST )
    , ( "inlineCodeSpace", inlineCodeSpace, inlineCodeSpaceAST )
    , ( "inlineMath", inlineMath, inlineMathAST )
    , ( "inlineMathSpace", inlineMathSpace, inlineMathSpaceAST )
    , ( "inlineBasic", inlineBasic, inlineBasicAST )
    , ( "codeBlock", codeBlock, codeBlockAST )
    --, ( "blockBasic", blockBasic, blockBasicAST )
    ]


basic : Test
basic =
    describe "Basic AST parsing"
        (List.map astTest basicTestData)

emptyDoc : String
emptyDoc =
    ""


emptyDocAST : String
emptyDocAST =
    "Rooti0v0 (0) Paragraph [  Line [Text [DOCUMENT]]]"

inlineCode : String
inlineCode =
    "`a := b`b"


inlineCodeSpace : String
inlineCodeSpace =
    "`a := b` b "


inlineCodeAST : String
inlineCodeAST =
    "Rooti0v0 (0) Paragraph [  Line [Text [DOCUMENT]]]\n  Plaini1v0 (1)   Paragraph [  Line [Code [a := b] Text [b]]]"


inlineCodeSpaceAST : String
inlineCodeSpaceAST =
    "Rooti0v0 (0) Paragraph [  Line [Text [DOCUMENT]]]\n  Plaini1v0 (1)   Paragraph [  Line [Code [a := b] Text [ b ]]]"


codeBlock : String
codeBlock =
    """```nolang
#MACROHERE
import string.theory.dimensions

dimensions(11)
regex = "[^i].*[A-Za-z0-9]+"
sum = 0
for (n<-0 until 100){
  sum = sum + 1.0/n
}
sum
```
After code block."""


codeBlockAST : String
codeBlockAST =
    "Rooti0v0 (0) Paragraph [  Line [Text [DOCUMENT]]]\n  nolangi1v0 (1)   nolang\n  #MACROHERE\n  import string.theory.dimensions\n  \n  dimensions(11)\n  regex = \"[^i].*[A-Za-z0-9]+\"\n  sum = 0\n  for (n<-0 until 100){\n    sum = sum + 1.0/n\n  }\n  sum\n  Plaini2v0 (1)   Paragraph [  Line [Text [After code block.]]]"


inlineMath : String
inlineMath =
    "$a^2 + b^2 = c^2$extra"


inlineMathSpace : String
inlineMathSpace =
    "$a^2 + b^2 = c^2$ extra "


inlineMathAST : String
inlineMathAST =
    "Rooti0v0 (0) Paragraph [  Line [Text [DOCUMENT]]]\n  Plaini1v0 (1)   Paragraph [  Line [InlineMath [a^2 + b^2 = c^2] Text [extra]]]"


inlineMathSpaceAST : String
inlineMathSpaceAST =
    "Rooti0v0 (0) Paragraph [  Line [Text [DOCUMENT]]]\n  Plaini1v0 (1)   Paragraph [  Line [InlineMath [a^2 + b^2 = c^2] Text [ extra ]]]"


inlineBasic : String
inlineBasic =
    """
This *is* a test.
I **repeat**: a test.
~~Wrong!~~

This is code: `a := b`.
This is math: $a^2 + b^2 = c^2$


Link: [New York Times](http://nytimes.com)
Image: ![Hummingbird](https://www.allaboutbirds.org/guide/noindex/photo/60395551-1280px.jpg)

"""


inlineBasicAST : String
inlineBasicAST =
    "Rooti0v0 (0) Paragraph [  Line [Text [DOCUMENT]]]\n  Plaini1v0 (1)   Paragraph [  Line [Text [This ] Italic [is ] Text [a test.]]\n    Line [Text [I ] Bold [repeat] Text [: a test.]]\n    Line [StrikeThroughText [Wrong!]]]\n  Plaini2v0 (1)   Paragraph [  Line [Text [This is code: ] Code [a := b] Text [.]]\n    Line [Text [This is math: ] InlineMath [a^2 + b^2 = c^2]]]\n  Plaini3v0 (1)   Paragraph [  Line [Text [Link: ] Link [http://nytimes.com](New York Times) Text [Image: !] Link [https://www.allaboutbirds.org/guide/noindex/photo/60395551-1280px.jpg](Hummingbird)]]"


blockBasic : String
blockBasic =
    """
# About this Markdown

## Level 2 heading

### Level 3 heading

#### Level 4 heading

This is an ordinary paragraph.
I repeat: an ordinary paragraph


## Displayed Math

$$
\\int_{-\\infty}^\\infty e^{-x^2} dx = \\pi
$$

### Code block

#### Partial sum of the harmonic series:

```
sum = 0
for n in range(1..100):
  sum = sum + 1.0/n
sum
```

### Verbatim block

````
Verbatim text allows you to preserve spacing in the input text:

   Element    |    Z
   --------------------
   Altium     |    4/5
   Brazilium  |    7/5
   Certium    |    9/5
````


### Table

|  Element  | Symbol |  Z | A |
| Hydrogen  | H      |  1 | 1.008   |
| Helium    | He     |  2 |  4.0026 |
| Lithium   | Li     |  3 |  6.94   |
| Beryllium | Be     |  4 |  9.0122 |
| Boron     | B      |  5 | 10.81   |
| Carbon    | C      |  6 | 12.011  |
| Nitrogen  | N      |  7 | 14.007  |
| Oxygen    | O      |  8 | 15.999  |
| Flourine  | F      |  9 | 18.998  |
| Neon      | Ne     | 10 | 20.180  |


### Unorderdered List

- Solids

    - Iron *(metal)*

        - Iron disulfide (Pyrite): $FeS_2$, crystalline

        - Iron(II) sulfed $FeS$, not stable, amorphous

    - Selenium *(use for solar cells)*

- Liquids

    - Alcohol *(careful!)*

    - Water *(Ok to drink)*


 ### Problem Set

 4. Show that $u(x,t) = f(x - ct)$ is a solution to the equation $\\partial u(x,t)/\\partial x + c^{-1} \\partial u(x,t)/\\partial  t= 0$.

 3. State the wave equation and show that $u(x,t)$ as above is a solution to it.

 2. In what direction does the wave defined by $u(x,t) = f(x - ct)$ move?

 4.  Find a solution of the wave equation that represents a pulse moving in the opposite direction.

````
"""


blockBasicAST : String
blockBasicAST =
    "Rooti0v0 (0) Paragraph [  Line [Text [DOCUMENT]]]\n  Headingi1v0 (1)   Paragraph [  Line [Text [About this Markdown]]]\n  Headingi2v0 (1)   Paragraph [  Line [Text [Level 2 heading]]]\n  Headingi3v0 (1)   Paragraph [  Line [Text [Level 3 heading]]]\n  Headingi4v0 (1)   Paragraph [  Line [Text [Level 4 heading]]]\n  Plaini5v0 (1)   Paragraph [  Line [Text [This is an ordinary paragraph.]]\n    Line [Text [I repeat: an ordinary paragraph]]]\n  Headingi6v0 (1)   Paragraph [  Line [Text [Displayed Math]]]\n  DisplayMathi7v0 (1)   \\int_{-\\infty}^\\infty e^{-x^2} dx = \\pi\n  \n  Headingi8v0 (1)   Paragraph [  Line [Text [Code block]]]\n  Plaini9v0 (1)   Paragraph [  Text [Expecting '``' to end inline code]]\n  Headingi10v0 (1)   Paragraph [  Line [Text [Partial sum of the harmonic series:]]]\n  Plaini11v0 (1)   Paragraph [  Text [Expecting '``' to end inline code]]\n  Headingi12v0 (1)   Paragraph [  Line [Text [Verbatim block]]]\n  Verbatimi13v0 (1)   \n  Verbatim text has many uses:\n  \n     Element    |    Z\n     --------------------\n     Altium     |    4/5\n     Brazilium  |    7/5\n     Certium    |    9/5\n  \n  \n  Headingi14v0 (1)   Paragraph [  Line [Text [Table]]]\n  Tablei15v0 (1)   Paragraph [  Line [Text [tableRoot]]]\n    TableRowi16v0 (2)     Paragraph [  Line []]\n      TableCelli17v0 (3)       Paragraph [  Line [Text [Hydrogen]]]\n      TableCelli18v0 (3)       Paragraph [  Line [Text [H]]]\n      TableCelli19v0 (3)       Paragraph [  Line [Text [1]]]\n      TableCelli20v0 (3)       Paragraph [  Line [Text [1.008]]]\n    TableRowi21v0 (2)     Paragraph [  Line []]\n      TableCelli22v0 (3)       Paragraph [  Line [Text [Helium]]]\n      TableCelli23v0 (3)       Paragraph [  Line [Text [He]]]\n      TableCelli24v0 (3)       Paragraph [  Line [Text [2]]]\n      TableCelli25v0 (3)       Paragraph [  Line [Text [4.0026]]]\n    TableRowi26v0 (2)     Paragraph [  Line []]\n      TableCelli27v0 (3)       Paragraph [  Line [Text [Lithium]]]\n      TableCelli28v0 (3)       Paragraph [  Line [Text [Li]]]\n      TableCelli29v0 (3)       Paragraph [  Line [Text [3]]]\n      TableCelli30v0 (3)       Paragraph [  Line [Text [6.94]]]\n    TableRowi31v0 (2)     Paragraph [  Line []]\n      TableCelli32v0 (3)       Paragraph [  Line [Text [Beryllium]]]\n      TableCelli33v0 (3)       Paragraph [  Line [Text [Be]]]\n      TableCelli34v0 (3)       Paragraph [  Line [Text [4]]]\n      TableCelli35v0 (3)       Paragraph [  Line [Text [9.0122]]]\n    TableRowi36v0 (2)     Paragraph [  Line []]\n      TableCelli37v0 (3)       Paragraph [  Line [Text [Boron]]]\n      TableCelli38v0 (3)       Paragraph [  Line [Text [B]]]\n      TableCelli39v0 (3)       Paragraph [  Line [Text [5]]]\n      TableCelli40v0 (3)       Paragraph [  Line [Text [10.81]]]\n    TableRowi41v0 (2)     Paragraph [  Line []]\n      TableCelli42v0 (3)       Paragraph [  Line [Text [Carbon]]]\n      TableCelli43v0 (3)       Paragraph [  Line [Text [C]]]\n      TableCelli44v0 (3)       Paragraph [  Line [Text [6]]]\n      TableCelli45v0 (3)       Paragraph [  Line [Text [12.011]]]\n    TableRowi46v0 (2)     Paragraph [  Line []]\n      TableCelli47v0 (3)       Paragraph [  Line [Text [Nitrogen]]]\n      TableCelli48v0 (3)       Paragraph [  Line [Text [N]]]\n      TableCelli49v0 (3)       Paragraph [  Line [Text [7]]]\n      TableCelli50v0 (3)       Paragraph [  Line [Text [14.007]]]\n    TableRowi51v0 (2)     Paragraph [  Line []]\n      TableCelli52v0 (3)       Paragraph [  Line [Text [Oxygen]]]\n      TableCelli53v0 (3)       Paragraph [  Line [Text [O]]]\n      TableCelli54v0 (3)       Paragraph [  Line [Text [8]]]\n      TableCelli55v0 (3)       Paragraph [  Line [Text [15.999]]]\n    TableRowi56v0 (2)     Paragraph [  Line []]\n      TableCelli57v0 (3)       Paragraph [  Line [Text [Flourine]]]\n      TableCelli58v0 (3)       Paragraph [  Line [Text [F]]]\n      TableCelli59v0 (3)       Paragraph [  Line [Text [9]]]\n      TableCelli60v0 (3)       Paragraph [  Line [Text [18.998]]]\n    TableRowi61v0 (2)     Paragraph [  Line []]\n      TableCelli62v0 (3)       Paragraph [  Line [Text [Neon]]]\n      TableCelli63v0 (3)       Paragraph [  Line [Text [Ne]]]\n      TableCelli64v0 (3)       Paragraph [  Line [Text [10]]]\n      TableCelli65v0 (3)       Paragraph [  Line [Text [20.180]]]\n    TableRowi66v0 (2)     Paragraph [  Line []]\n  Headingi67v0 (1)   Paragraph [  Line [Text [Unorderdered List]]]\n  UListItemi68v0 (1)   Paragraph [  Line [Text [Solids]]]\n    UListItemi69v0 (2)     Paragraph [  Line [Text [Iron ] Italic [(metal)]]]\n      UListItemi70v0 (3)       Paragraph [  Line [Text [Iron disulfide (Pyrite): ] InlineMath [FeS_2] Text [, crystalline]]]\n      UListItemi71v0 (3)       Paragraph [  Line [Text [Iron(II) sulfed ] InlineMath [FeS] Text [, not stable, amorphous]]]\n    UListItemi72v0 (2)     Paragraph [  Line [Text [Selenium ] Italic [(use for solar cells)]]]\n  UListItemi73v0 (1)   Paragraph [  Line [Text [Liquids]]]\n    UListItemi74v0 (2)     Paragraph [  Line [Text [Alcohol ] Italic [(careful!)]]]\n    UListItemi75v0 (2)     Paragraph [  Line [Text [Water ] Italic [(Ok to drink)]]]\n  Headingi76v0 (1)   Paragraph [  Line [Text [ Problem Set]]]\n  OListItemi77v0 (1)   Paragraph [  Line [Text [Show that ] InlineMath [u(x,t) = f(x - ct)] Text [ is a solution to the equation ] InlineMath [\\partial u(x,t)/\\partial x + c^{-1} \\partial u(x,t)/\\partial  t= 0] Text [.]]]\n  OListItemi78v0 (1)   Paragraph [  Line [Text [State the wave equation and show that ] InlineMath [u(x,t)] Text [ as above is a solution to it.]]]\n  OListItemi79v0 (1)   Paragraph [  Line [Text [In what direction does the wave defined by ] InlineMath [u(x,t) = f(x - ct)] Text [ move?]]]\n  OListItemi80v0 (1)   Paragraph [  Line [Text [ Find a solution of the wave equation that represents a pulse moving in the opposite direction.]]]\n  Verbatimi81v0 (1)   \n  "

