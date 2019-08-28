 
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
for a demo of the latest implementation.


## Example

To convert text to Html, do something like this:

```
Markdown.Elm.toHtml ExtendedMath "This **is** a test: $a^2 + b^2 = c^2$."
```

According to your needs, you can also use the 
`Standard` or `Extended` options.

## Demo app

The [demo app](https://markdown.minilatex.app) resides in `./app-test` of the 
[Github repository](https://github.com/jxxcarlson/elm-markdown).  
To run
it, go into that folder and say `sh make.sh`.  Then
double-click on `index.html`.

## Style

The style used by the library is entirely determined by the
definitions of the CSS classes given in `index.html`.
See the code in `./app-test/index.html`.
You can easily reconfigure this CSS to satsify your
own esthetics.

## MathJax

The javascript code in `.app/index.html` calls [MathJax.js](https:mathjax.org) 
to render the mathematical text.  It should be copied
verbatim for your own app if you use the `ExtendedMath` option.

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
