module ParseTest2 exposing(..)

import ParseWithId
import Benchmark exposing (..)
import ParseWithId
import Parse
import Markdown.Option exposing(..)
import Benchmark.Runner exposing (BenchmarkProgram, program)

main : BenchmarkProgram
main =
    program suite

suite : Benchmark
suite =
    describe "Diff"

        [   benchmark "parse without id" <|
              \_ -> Parse.toMDBlockTree ExtendedMath  text1

         ,  benchmark "parse with id" <|
                       \_ -> ParseWithId.toMDBlockTree 1 ExtendedMath  text1


    ]


text1 =
    """
# Propagation and Evolution


## The propagator

Consider a wave function $\\psi(x,t)$.  If we fix $t$ and let $x$ vary, the result is an element $\\psi(t)$ of $L^2(R)$ or,
more generally $L^2(\\text{configuration space})$.  Thus the evolution of our system in time is given by a function $t \\mapsto \\psi(t)$.  The dynamics of this path in Hilbert space is governed by an ordinary differential equation ,

$$
i\\hbar\\frac{d\\psi}{dt} = H\\phi,
$$

Now consider bases of orthogonal normalized states $\\{\\; \\psi_k(t_1)\\;\\}$ and $\\{\\; \\psi_k(t_0) \\; \\}$ at times $t_1$ and $t_0$, with $t_1 > t_0$.  There is a unique linear transformation $U(t_1,t_0)$ such that $\\psi_k(t_1) = U(t_1,t_0)\\psi_k(t_0)$ for all $k$.  It must be unitary because the bases are orthonormal.  This family of transformations is called the \\term{propagator}.  The propagator satisfies various identities, e.g., the composition law

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

````
%matplotlib inline

import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 6*np.pi, 500)
t=4
plt.plot(x, np.cos(x**2/t)/np.sqrt(t))
plt.title('Free particle propagator, t=4');
````

"""
