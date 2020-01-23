module Strings exposing (notes, text1, text2)


text1X =
    """
# Test

## AAA

$$
\\int_0^1 x^n dx = \\frac{1}{n+1}
$$

The End

"""


text1 =
    """# A Pure Elm Markdown Parser


## Introduction

![Hummingbird::left](http://noteimages.s3.amazonaws.com/jxxcarlson/hummingbird2.jpg)
This project
grew out of the need to have a
pure Elm Markdown parser-renderer
that could also handle mathematical
text.  Mathematical text is rendered by
MathJax.  The project now includes
a pure Elm text editor (work in progress!)

 The Markdown used here offers
three options: *Standard*, *Extended* and
 *ExtendedMath*. The Extended option
provides for strike-through
text, verbatim blocks, poetry blocks,
and tables.  ExtendedMath handles
formulas written in TeX/LaTeX:

$$
\\int_{-\\infty}^\\infty e^{-x^2} dx = \\pi
$$

Note also that there is an automatically
generated active table of contents.
It can be placed inside the document
at the top, to one side, as it is
here, or it can be absent.


The [library](https://package.elm-lang.org/packages/jxxcarlson/elm-markdown/latest/)
with which this demo app is built
is suitable for light-weight writing
tasks that require mathematical notation
— problem sets, short class notes, etc.


This project is a work in progress: there is more
 to do make it adhere as closely as
possible to the CommonMark spec and to root out
the bugs and shortcomings in the user interface
design.  Please write me at
jxxcarlson@gmail.com with comments and bug
reports, or (better yet) post an issue on the
[GitHub repo](https://github.com/jxxcarlson/elm-markdown).

For installation, see the notes
at the end. This Markdown package
is written in pure Elm. It uses MathJax.js
to render math formulas.  New in this release
is syntax highlighting using
[pablohirafuji/elm-syntax-highlight](https://package.elm-lang.org/packages/pablohirafuji/elm-syntax-highlight/latest/).
Language support at this time: elm,
javascript, xml, css, python, sql, json.

## Demo

Below we illustrate some typical Markdown
elements: images, links, headings, etc.

![Hummingbird](http://noteimages.s3.amazonaws.com/jxxcarlson/hummingbird2.jpg)
Hummingbird (Meditation)

Link: [New York Times](http://nytimes.com)

Text styles: **bold** *italic* ~~strike it out~~


## Inline Math

This is a test: $a^2 + b^2 = c^2$.

## Display Math

So is this:

$$
\\int_0^1 x^n dx = \\frac{1}{n+1}
$$


## Code

He said that `a := 0` is an initialization
statement.

```python
# Partial sum of the harmonic series:

sum = 0
for n in range(1..100):
  sum = sum + 1.0/n
sum
```

## Verbatim and Tables (Extensions)

A verbatim block begins and ends
with four tick marks. It is just
like a code block, except that there is no
syntax highlighting.  Verbatim blocks
are an extension of normal Markdown.

````
Verbatim text has many uses:

   Element    |    Z
   --------------------
   Altium     |    4/5
   Brazilium  |    7/5
   Certium    |    9/5
````

But better is to use Markdown tables:

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


## Lists

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

## Numbered lists

### Problem Set 18

1. Compute the coefficient of $a^5b^2$
in $(a + b)^7$.

    1. Do also: coefficient of $a^5b^5$
    in $(a + 2b)^{10}$

    2. Do also: coefficient of $a^7b^5$
    in $(a - b)^{12}$

4. If $f'(2) = 0$, what can you say about
the graph of $f$ at $x = 2$?

6. Suppose that in addition, $f''(2) > 0$.
 What else can say about the graph?


### Problem Set 19

4. Show that $u(x,t) = f(x - ct)$ is a solution to
the equation
$\\partial u(x,t)/\\partial x + c^{-1} \\partial u(x,t)/\\partial t = 0$.

3. State the wave equation and show that
$u(x,t)$ as above is a solution to it.

2. In what direction does the wave
defined by $u(x,t) = f(x - ct)$ move?

4.  Find a solution of the wave
equation that represents a pulse
moving in the opposite direction.



## Quotations


Quotations are offset:

> Four score and seven years ago our
fathers brought forth on this continent,
a new nation, conceived in Liberty,
and dedicated to the proposition
that all men are created equal.

> Now we are engaged in a great c
ivil war, testing whether that
nation, or any nation so
conceived and so dedicated,
can long endure. We are met o
In a great battle-field of that war.
We have come to dedicate a portion
of that field, as a final resting
place for those who here gave their
lives that that nation might live.
It is altogether fitting and proper
that we should do this.

> But, in a larger sense, we can not
dedicate — we can not consecrate —
we can not hallow—this ground. The brave men,
living and dead, who struggled here,
have consecrated it, far above our poor
power to add or detract. The world will
little note, nor long remember what we say
here, but it can never forget what they d
id here. It is for us the living, rather,
to be dedicated here to the unfinished
work which they who fought here have thus
far so nobly advanced. It is rather for
us to be here dedicated to the great task
remaining before us—that from these
honored dead we take increased devotion
to that cause for which they gave the
last full measure of devotion—that we
here highly resolve that these dead
shall not have died in vain—that
this nation, under God, shall have
a new birth of freedom—and that
government of the people, by the people,
for the people, shall not perish
from the earth.

— Abraham Lincoln, *Gettysbug Address*

## Poetry (Extension)

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


NOTE: this Markdown implementation is
an option for writing documents on
[knode.io](https://knode.io).
Knode also offers MiniLaTeX,
a web-friendly subset of TeX/LaTex.
To see how it works without a sign-in, please
see [demo.minilatex.app](https://demo.minilatex.app).


___

## Installation


To compile, use

```elm
elm make --output=Main.js
```

Then open `index.html` to run the app.


"""


text2 =
    """
# Propagation and Evolution


## The propagator

Consider a wave function $\\psi(x,t)$.
If we fix $t$ and let $x$ vary, the result
is an element $\\psi(t)$ of $L^2(R)$ or,
more generally $L^2(\\text{configuration space})$.
Thus the evolution of our system in time is given
by a function $t \\mapsto \\psi(t)$.  The
dynamics of this path in Hilbert space is
governed by an ordinary differential equation ,

$$
i\\hbar\\frac{d\\psi}{dt} = H\\phi,
$$

Now consider bases of orthogonal normalized states
$\\{\\; \\psi_k(t_1)\\;\\}$ and $\\{\\; \\psi_k(t_0) \\; \\}$
at times $t_1$ and $t_0$, with $t_1 > t_0$.
There is a unique linear transformation $U(t_1,t_0)$
such that $\\psi_k(t_1) = U(t_1,t_0)\\psi_k(t_0)$ for all $k$.
It must be unitary because the bases are orthonormal.
This family of transformations is called the \\term{propagator}.
The propagator satisfies various identities, e.g., the composition law

$$
U(t_2, t_0) = U(t_2, t_1)U(t_1, t_0)
$$

as well as $U(t,t) = 1$, $U(t_1,t_2) = U(t_2,t_1)^{-1}$.

Let us write $U(t) = U(t,0)$ for convenience, and let us suppose given states $\\alpha$ and $\\beta$.  The probability that the system finds itself in state $\\beta$ after time $t$ is given by the matrix element

$$
\\bra \\beta U(t)  \\ket \\alpha
$$

This is just the kind of information we need for comparison with experiment.

The propagator, like the family of state vectors $\\psi(t)$, satisfies a differential equation -- essentially a Schroedinger equation for operators.  To find it, differentiate the  equation $\\psi(t) = U(t)\\psi(0)$ to obtain

$$
i\\hbar \\frac{d\\psi}{dt} = i\\hbar \\frac{dU}{dt}\\psi(0)
$$

Substitute (C) to obtain

$$
i\\hbar \\frac{dU}{dt}\\psi(0)  = H\\psi(t)
$$

Applying $\\psi(t) = U(t)\\psi(0)$ again, we find that

$$
i\\hbar \\frac{dU}{dt}\\psi(0) = HU\\psi(0)
$$

If this is to hold for arbitrary $\\psi(0)$, then

$$
\\frac{dU}{dt} = -\\frac{i}{\\hbar}HU
$$

If $H$ does not depend on time, the preceding  ODE has an immediate solution, namely


$$
U(t) = e^{-i(t/\\hbar) H}
$$

Think of $H$ as a big matrix, and of the expression on the right as a big matrix exponential.


## Free particle propagator


Let us find the free-particle propagator. To begin, let $\\phi(x) = \\psi(x,0)$ be the the wave function at time $t = 0$.  Write it as a Fourier integral,

$$
\\psi(x,0) = \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^\\infty a(p) e^{ipx} dp
$$

where $a(p) = \\hat\\phi(p)$.
The free-particle evolution operator is

$$
e^{-(it/\\hbar)H} = e^{-i\\hat p^2/2m\\hbar}
$$

We proceed with $\\hbar = 1$ then rescale afterwards.
The wave function at time $t$ is

$$
\\begin{align}
\\psi(x,t) &= U(t)\\phi(x) \\\\
&= \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^\\infty a(p) U(t)e^{ipx} dp\\\\
&= \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^\\infty a(p) e^{-i p^2t/2m} e^{ipx} dp \\\\
\\end{align}
$$

Substitute the Fourier transform

$$
a(p) = \\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^\\infty \\phi(x') e^{-ipx'} dx'
$$

into the preceding equation to obtain

$$
\\psi(x,t) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty  \\left[  \\int_{-\\infty}^\\infty \\phi(x') e^{-ipx'} dx'\\right] e^{ipx}  e^{ -ip^2t/2m } dp
$$

Interchange the order of integration:

$$
\\psi(x,t) = \\int_{-\\infty}^\\infty  \\left[ \\frac{1}{2\\pi}  \\int_{-\\infty}^\\infty e^{ipx} e^{ -ip^2t/2m \\hbar} e^{-ipx'} dp \\right] \\phi(x')  dx'
$$

The expression in brackets has the general form $G(x-x',t)$, so that we can write the preceding equation in terms of a convolution integral:

$$
\\psi(x,t) = \\int_{-\\infty}^\\infty G(x-x', t)\\phi(x') dx'\\\\
$$

where

$$
G(x-x',t) = \\frac{1}{2\\pi}  \\int_{-\\infty}^\\infty   \\exp\\left(ip(x-x')  -\\frac{ip^2t}{2m \\hbar} \\right) dp
$$

The convolution kernel $G(x-x',t)$ is called the \\term{Green's function}, and the formula above is simply convolution of the initial state with the Green's function:

$$
\\psi(x,t) = G_t*\\psi(x,0)
$$

where $G_t(x) = G(x;t)$

The integrand in \\eqref{gffp}is an exponential of a quadratic polynomial in $p$, and so the integral is a Gaussian.  Recall that

$$
\\int_{-\\infty}^\\infty e^{ -ax^2 + bx}  = \\left(\\frac{\\pi}{a}\\right)^{1/2} e^{ b^2/4a}
$$

Comparing, we find that

$$
G(x,x';t) = \\left(\\frac{m}{2\\pi i t}\\right)^{1/2} e^{ im(x-x')^2/2t}
$$


Let us now recover the formula for the Green's function for $\\hbar \\ne 1$.  Write the coordinates in the preceding equation as    $\\tilde x$ and $\\tilde t$, then define a change of variables by $\\tilde t = \\alpha t$, $\\tilde x = \\beta x$.  In the $x',t'$.  In the $\\tilde t, \\tilde x$ system, the Schroedinger equation reads

$$
i\\hbar\\alpha\\frac{\\partial \\psi}{\\partial \\tilde t} = -\\frac{\\hbar^2 \\beta^2}{2m}\\, \\frac{\\partial^2 \\psi}{\\partial \\tilde x^2}
$$

Require $\\hbar \\alpha = \\hbar^2\\beta^2$.
Choose $\\alpha = \\hbar$, $\\beta = 1$ so as to eliminate the $\\hbar$'s for the Schroedinger equation in the $\\tilde t, \\tilde x$ coordinate system.  Write out \\eqref{freeparticlegreen1} with $\\tilde x$ and $\\tilde t$ in place of $x$ and $t$.  Then make the substitutions to the substitutions $\\tilde t = \\hbar t$, $\\tilde x = x$ to obtain

$$
\\begin{align}
G(x-x',t) &= \\widetilde G\\left(x-x', t\\hbar \\right) \\\\
&= \\left( \\frac{m}{2\\pi \\hbar i t} \\right)^{1/2} e^{ im(x-x')^2/2\\hbar t}
\\end{align}
$$

## Discussion

Below are graphs of the real part of the free-particle propagator for time $t = 1, 2, 4,16$.


![xx::center](http://noteimages.s3.amazonaws.com/jim_images/propagator-t=1-63c8.png)


![xx::centerhttp://noteimages.s3.amazonaws.com/jim_images/propagator-t=2-6feb.png)

![xx::center](http://noteimages.s3.amazonaws.com/jim_images/propagator-t=4-a035.png)

![xx::center](http://noteimages.s3.amazonaws.com/jim_images/propagator-t=16-e5ae.png)

**Jupyter code**

```python
%matplotlib inline

import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 6*np.pi, 500)
t=4
plt.plot(x, np.cos(x**2/t)/np.sqrt(t))
plt.title('Free particle propagator, t=4');
```

"""


notes =
    """
# Notes


  """
