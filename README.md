
# jxxcarlson/elm-markdown


The aim of this Markdown library is
to provide a pure Elm implementation of Markdown
which offers a small set of extensions, along with options:

- Standard: the usual thing
- Extended: strike-though text, Poetry and Verbatim blocks
- ExtendedMath: like extended, but math formulas written in
TeX/LaTeX are rendered, e.g.,
```
This **is** a test: $a^2 + b^2 = c^2$.
```
is properly rendered.


See [markdown.minilatex.app](https://markdown.minilatex.app)
for a demo of the latest implementation, or see the code in
this repo, `./app-test/`



## Example

To convert text to Html, do something like this:

```
Markdown.Elm.toHtml ExtendedMath "This **is** a test: $a^2 + b^2 = c^2$."
```

According to your needs, you can also use the
`Standard` or `Extended` options.  Use this line
to make options available:

```
import Markdown.Option exposing(Option(..))
```

where

```
type Option
    = Standard
    | Extended
    | ExtendedMath
```

## Demo app

The [demo app](https://markdown.minilatex.app) resides in `./app-test` of the
[Github repository](https://github.com/jxxcarlson/elm-markdown).
To run
it, go into that folder and say `sh make.sh`.  Then
double-click on `index.html`.

## Style

The style used by the library is entirely determined by the
definitions of the CSS classes that you refer to in your
`index.html`.  The ones used for the demo app are found
in`./app-test/style.css`.  See the code in `./app-test/index.html`.
You can easily reconfigure the CSS to satsify your
own esthetics.

## MathJax

To render TeX/LaTeX, use the `ExtendedMath` option.  In addition,
you must have the files

```
math-text.js
mathjax-setup.js
```

in the same directory as `index.html`, and `index.html` must
contain the three lines below at the end of the `<head>` section:

```
<script src="math-text.js"></script>
<script src="mathjax-setup.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"></script>

```

## Markdown extensions

I am trying to be conservative about extensions to
Markdown.  However, there are two that I thought
important enough to add: poetry blocks and verbatim text.
Poetry blocks are
are like quotation blocks, except that they begin
with ">>" instead of ">".  Line endings are respected
in poetry blocks.  Verbatim blocks are like code blocks,
except that they are set off by four backticks instead of
three.  No syntax coloring is applied to verbatim blocks.


## AST

The simplest way to render Markdown is to use a one of the built-in
rendering functions, e.g., make the call

```
Markdown.Elm.toHtml Extended document
```
 
However, if you 
wish to write your own renderer, you can produce the abstract syntax
tree of a document by running 

```
Parse.toMBlockTree : Option -> Document -> Tree MBlock
```

where `Document` is a type alias for `String`.  This is also
useful if you wish to transform the abstact syntax tree before 
rendering it.

## Bugs and whatnot

Please write me at jxxcarlson@gmail.com or post an
issue on the [Github repository](https://github.com/jxxcarlson/elm-markdown)
regarding bugs or anything else. I will steer
this library towards the Commonmark spec to the greatest
extent possible by the method of successive approximations
