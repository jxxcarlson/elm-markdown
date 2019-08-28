 
# Math Markdown


The aim of the Math Markdown library is
to provide a tool for rendering Markdown
text with embedded math-mode TeX, e.g.,

```
This **is** a test: $a^2 + b^2 = c^2$.
```

At the moment, the "version" of Markdown
we have implemented is primitive. Nonetheless, it is quite serviceable.  See
[markdown.minilatex.app](https://markdown.minilatex.app)
for a working example.

I am currently working on a much better parser.  See the `Block.elm`
file.

## Example

To convert text to Html, do something like this:

```
MMarkdown.toHtml [ ] "This **is** a test: $a^2 + b^2 = c^2$."
```

## Demo app

There is a demo in `./app`.  To run
it, go into that folder and say `sh make.sh`.  Then
double-click on `index.html`.

## Style

The style used by MMarkdown is entirely determined by the
definitions of the CSS classes given in `index.html`.
See the code in `./app/index.html` for examles to imitate.
Consequently they are easily configured for whatever
application yuo have in mind.

## MathJax

The javascript code in `.app/index.html` is essential to the
proper rendering of mathematical text.  It should be copied
verbatim for your own app.

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

## Technical stuff: the Differ module

Math Markdown exposes only two modules — `MMarkdown` and `Differ`.
The purpose of the Differ module is to speed up the parse-render
operation by reparsing and rerendering only text that has been
changed.  This module is used in the demo app.

I addition increased speed, using `Differ` results in a smoother
user experience, since only small parts of the document being
edited need to be re-processed.

