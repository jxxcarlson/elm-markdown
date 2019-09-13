module ASTTestData exposing (..)

emptyDoc = ""
emptyDocAST = "Root (0) Paragraph [  Line [Text [DOCUMENT]]]"



inlineBasic = """
This *is* a test.
I **repeat**: a test.
~~Wrong!~~

This is code: `a := b`.
This is math: $a^2 + b^2 = c^2$


Link: [New York Times](http://nytimes.com)
Image: ![Hummingbird](https://www.allaboutbirds.org/guide/noindex/photo/60395551-1280px.jpg)

"""

inlineBasicAST =  "Root (0) Paragraph [  Line [Text [DOCUMENT]]]\n  Plain (1)   Paragraph [  Line [Text [This ] Italic [is] Text [a test.]]\n    Line [Text [I ] Bold [repeat] Text [: a test.]]\n    Line [StrikeThroughText [Wrong! ]]]\n  Plain (1)   Paragraph [  Line [Text [This is code: ] Code [a := b`]]\n    Line [Text [This is math: ] InlineMath [a^2 + b^2 = c^2]]]\n  Plain (1)   Paragraph [  Line [Text [Link: ] Link [http://nytimes.com](New York Times) Text [Image: !] Link [https://www.allaboutbirds.org/guide/noindex/photo/60395551-1280px.jpg](Hummingbird)]]"

blockBasic = """
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

```
# Partial sum of the harmonic series:

sum = 0
for n in range(1..100):
  sum = sum + 1.0/n
sum
```

### Verbatim block

````
Verbatim text has many uses:

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

blockBasicAST =     "Root (0) Paragraph [  Line [Text [DOCUMENT]]]\n  Heading (1)   Paragraph [  Line [Text [About this Markdown ]]]\n  Heading (1)   Paragraph [  Line [Text [Level 2 heading ]]]\n  Heading (1)   Paragraph [  Line [Text [Level 3 heading ]]]\n  Heading (1)   Paragraph [  Line [Text [Level 4 heading ]]]\n  Plain (1)   Paragraph [  Line [Text [This is an ordinary paragraph.]]\n    Line [Text [I repeat: an ordinary paragraph ]]]\n  Heading (1)   Paragraph [  Line [Text [Displayed Math ]]]\n  DisplayMath (1)   \n  \\int_{-\\infty}^\\infty e^{-x^2} dx = \\pi\n  \n  \n  Heading (1)   Paragraph [  Line [Text [Code block ]]]\n  DisplayCode (1)   \n  # Partial sum of the harmonic series:\n  \n  sum = 0\n  for n in range(1..100):\n    sum = sum + 1.0/n\n  sum\n  \n  \n  Heading (1)   Paragraph [  Line [Text [Verbatim block ]]]\n  Verbatim (1)   \n  Verbatim text has many uses:\n  \n     Element    |    Z\n     --------------------\n     Altium     |    4/5\n     Brazilium  |    7/5\n     Certium    |    9/5\n  \n  \n  Heading (1)   Paragraph [  Line [Text [Table ]]]\n  Table (1)   Paragraph [  Line [Text [tableRoot]]]\n    TableRow (2)     Paragraph [  Line []]\n      TableCell (3)       Paragraph [  Line [Text [Hydrogen]]]\n      TableCell (3)       Paragraph [  Line [Text [H]]]\n      TableCell (3)       Paragraph [  Line [Text [1]]]\n      TableCell (3)       Paragraph [  Line [Text [1.008]]]\n    TableRow (2)     Paragraph [  Line []]\n      TableCell (3)       Paragraph [  Line [Text [Helium]]]\n      TableCell (3)       Paragraph [  Line [Text [He]]]\n      TableCell (3)       Paragraph [  Line [Text [2]]]\n      TableCell (3)       Paragraph [  Line [Text [4.0026]]]\n    TableRow (2)     Paragraph [  Line []]\n      TableCell (3)       Paragraph [  Line [Text [Lithium]]]\n      TableCell (3)       Paragraph [  Line [Text [Li]]]\n      TableCell (3)       Paragraph [  Line [Text [3]]]\n      TableCell (3)       Paragraph [  Line [Text [6.94]]]\n    TableRow (2)     Paragraph [  Line []]\n      TableCell (3)       Paragraph [  Line [Text [Beryllium]]]\n      TableCell (3)       Paragraph [  Line [Text [Be]]]\n      TableCell (3)       Paragraph [  Line [Text [4]]]\n      TableCell (3)       Paragraph [  Line [Text [9.0122]]]\n    TableRow (2)     Paragraph [  Line []]\n      TableCell (3)       Paragraph [  Line [Text [Boron]]]\n      TableCell (3)       Paragraph [  Line [Text [B]]]\n      TableCell (3)       Paragraph [  Line [Text [5]]]\n      TableCell (3)       Paragraph [  Line [Text [10.81]]]\n    TableRow (2)     Paragraph [  Line []]\n      TableCell (3)       Paragraph [  Line [Text [Carbon]]]\n      TableCell (3)       Paragraph [  Line [Text [C]]]\n      TableCell (3)       Paragraph [  Line [Text [6]]]\n      TableCell (3)       Paragraph [  Line [Text [12.011]]]\n    TableRow (2)     Paragraph [  Line []]\n      TableCell (3)       Paragraph [  Line [Text [Nitrogen]]]\n      TableCell (3)       Paragraph [  Line [Text [N]]]\n      TableCell (3)       Paragraph [  Line [Text [7]]]\n      TableCell (3)       Paragraph [  Line [Text [14.007]]]\n    TableRow (2)     Paragraph [  Line []]\n      TableCell (3)       Paragraph [  Line [Text [Oxygen]]]\n      TableCell (3)       Paragraph [  Line [Text [O]]]\n      TableCell (3)       Paragraph [  Line [Text [8]]]\n      TableCell (3)       Paragraph [  Line [Text [15.999]]]\n    TableRow (2)     Paragraph [  Line []]\n      TableCell (3)       Paragraph [  Line [Text [Flourine]]]\n      TableCell (3)       Paragraph [  Line [Text [F]]]\n      TableCell (3)       Paragraph [  Line [Text [9]]]\n      TableCell (3)       Paragraph [  Line [Text [18.998]]]\n    TableRow (2)     Paragraph [  Line []]\n      TableCell (3)       Paragraph [  Line [Text [Neon]]]\n      TableCell (3)       Paragraph [  Line [Text [Ne]]]\n      TableCell (3)       Paragraph [  Line [Text [10]]]\n      TableCell (3)       Paragraph [  Line [Text [20.180]]]\n    TableRow (2)     Paragraph [  Line []]\n  Heading (1)   Paragraph [  Line [Text [Unorderdered List ]]]\n  UListItem (1)   Paragraph [  Line [Text [Solids ]]]\n    UListItem (2)     Paragraph [  Line [Text [Iron ] Italic [(metal)]]]\n      UListItem (3)       Paragraph [  Line [Text [Iron disulfide (Pyrite): ] InlineMath [FeS_2] Text [, crystalline ]]]\n      UListItem (3)       Paragraph [  Line [Text [Iron(II) sulfed ] InlineMath [FeS] Text [, not stable, amorphous ]]]\n    UListItem (2)     Paragraph [  Line [Text [Selenium ] Italic [(use for solar cells)]]]\n  UListItem (1)   Paragraph [  Line [Text [Liquids ]]]\n    UListItem (2)     Paragraph [  Line [Text [Alcohol ] Italic [(careful!)]]]\n    UListItem (2)     Paragraph [  Line [Text [Water ] Italic [(Ok to drink)]]]\n  Heading (1)   Paragraph [  Line [Text [ Problem Set ]]]\n  OListItem (1)   Paragraph [  Line [Text [Show that ] InlineMath [u(x,t) = f(x - ct)] Text [is a solution to the equation ] InlineMath [\\partial u(x,t)/\\partial x + c^{-1} \\partial u(x,t)/\\partial  t= 0] Text [.]]\n    Line []]\n  OListItem (1)   Paragraph [  Line [Text [State the wave equation and show that ] InlineMath [u(x,t)] Text [as above is a solution to it.]]\n    Line []]\n  OListItem (1)   Paragraph [  Line [Text [In what direction does the wave defined by ] InlineMath [u(x,t) = f(x - ct)] Text [move? ]]]\n  OListItem (1)   Paragraph [  Line [Text [ Find a solution of the wave equation that represents a pulse moving in the opposite direction.]]\n    Line []]\n  Verbatim (1)   \n  \n  "




