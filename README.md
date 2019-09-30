
# jxxcarlson/elm-markdown


The aim of this Markdown library is
to provide a pure Elm implementation of Markdown
which offers a small set of extensions, along with options:

- Standard: the usual thing
- Extended: strike-though text, tables, and Poetry and Verbatim blocks
- ExtendedMath: like Extended, but math formulas written in
TeX/LaTeX, eg.,
```
This **is** a test: $a^2 + b^2 = c^2$.
```
are properly rendered.


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
in`./app-test/assets/style.css`. 
You can easily reconfigure the CSS to satsify your
own esthetics.

## Images

The usual `![My favorite image](imageUrl)` does the usual thing, with the image 
scaled to 100% width. You can 
also say `![My favorite image::left](imageUrl)` or 
`![My favorite image::right](imageUrl)` to float the image left or right at 
40% width. The widths are defined in `style.css`.

## MathJax

TeX/LaTeX math text is rendered using \href{https://mathjax.org}{MathJax}.
For this you must use the `ExtendedMath` option.  In addition,
you must have the files

```
assets/math-text.js
assets/custom-element.config.js
```

in the same directory as `index.html`, and `index.html` must
contain the three lines below at the top of the `<head>` section, just
under `<meta charset="utf-8" />`, for example.`

```
<!-- Load MathJax code -->
<script src="assets/custom-element-config.js"></script>
<script src="assets/math-text.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
```

The demo app is now using MathJax 3.0.

## Markdown extensions

I am trying to be conservative about extensions to
Markdown.  However, there are two that I thought
important enough to add: tables, poetry blocks and verbatim text.
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
Parse.toMDBlockTree : Option -> Document -> Tree MDBlock
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
