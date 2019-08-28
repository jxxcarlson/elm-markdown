module Strings exposing (initialText, notes)


initialText =
    """# MMarkdown

$$
\\int_{-\\infty}^\\infty e^{-x^2} dx = \\pi
$$


MMarkdown is a dialect of Markdown which can render
formulas written in TeX/LaTeX.  It is suitable for
light-weight writing tasks that require
mathematical notation — problem sets, short class notes, etc.


MMarkdown extends Markdown with two new elements: Poetry and Verbatim.
See below.


For installation, see the notes
at the end. The MMarkdown package is written in pure Elm.
It uses MathJax.js to render formulas.

## Demo

The present document illustrates most of the features of MMarkdown, minus the
math.  MMarkdown implements the usual Markdown features such as headings,
bold, italic, and strike-through, links, images, etc. There is one extension, for poetry (see below).

MMarkdown is to some extent *paragraph-centric*, meaning that certain elements, e.g., headings and
displayed math, like to be surrounded by blank lines.

In general, if you run into
something that is not working for you, please post an issue on
[GitHub](https://github.com/jxxcarlson/math-markdown).

MMarkdown is one of the markup options on [knode.io](https://knode.io).

![Hummingbird](https://www.allaboutbirds.org/guide/noindex/photo/60395551-1280px.jpg)

Hummingbird (Meditation)

Link: [New York Times](http://nytimes.com)

Text styles: **bold** *italic* ~~strike it out~~


## 1 Inline Math

This is a test: $a^2 + b^2 = c^2$.

## 2 Display Math

So is this:

$$
\\int_0^1 x^n dx = \\frac{1}{n+1}
$$


## 3. Code

He said that `a := 0` is an initialization statement.

```
# Partial sum of the harmonic series:

sum = 0
for n in range(1..100):
  sum = sum + 1.0/n
sum
```

## 4. Verbatim (Extension)

A verabatim block begins and ends with four tick marks.
It is just like a code block, except that there is no
syntax highlighting.  Verbatim blocks are an extension
of normal Markdown.

````
Verbatim text has many uses:

   Element    |    Z
   --------------------
   Altium     |    4/5
   Brazilium  |    7/5
   Certium    |    9/5
````

## 5. Lists

Indent by four spaces for each level.  List items
are separated by blank lines.

- Solids

    - Iron *(metal)*

        - Iron disulfide (Pyrite): $FeS_2$, crystalline

        - Iron(II) sulfed $FeS$, not stable, amorphous

    - Selenium *(use for solar cells)*

- Liquids

    - Alcohol *(careful!)*

    - Water *(Ok to drink)*

## 6. Numbered lists

### Problem Set 18

1. Compute the coefficient of $a^5b^2$ in $(a + b)^7$.

    1. Do also: coefficient of $a^5b^5$ in $(a + 2b)^{10}$

    2. Do also: coefficient of $a^7b^5$ in $(a - b)^{12}$

4. If $f'(2) = 0$, what can you say about the graph of $f$ at $x = 2$?

6. Suppose that in addition, $f''(2) > 0$. What else can say about the graph?


### Problem Set 19

4. Show that $u(x,t) = f(x - ct)$ is a solution to the equation $\\partial u(x,t)/\\partial x + c^{-1} \\partial u(x,t)/\\partial = 0$.

3. State the wave equation and show that $u(x,t)$ as above is a solution to it.

2. In what direction does the wave defined by $u(x,t) = f(x - ct)$ move?

4.  Find a solution of the wave equation that represents a pulse moving in the opposite direction.



## 7. Quotations


Quotations are offset:

> Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.

> Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.

> But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.

— Abraham Lincoln, *Gettysbug Address*

## 8. Poetry (Extension)

Poetry blocks, an extension of normal Markdown,
 begin with ">>"; line endings are respected.

>> Twas brillig, and the slithy toves
Did gyre and gimble in the wabe:
All mimsy were the borogoves,
And the mome raths outgrabe.

>> Beware the Jabberwock, my son!
The jaws that bite, the claws that catch!
Beware the Jubjub bird, and shun
The frumious Bandersnatch!


Etcetera!

___


NOTE: MMarkdown is also implemented as an option for [knode.io](https://knode.io).
knode offers MiniLaTeX, a web-friendly subset of TeX/LaTex.  To see
how it works without a sign-in, please see [demo.minilatex.app](https://demo.minilatex.app).


___

## Installation


To compile, use

```
elm make --output=Main.js
```

Then open `index.html` to run the app.


"""


notes =
    """
# Notes


  """
