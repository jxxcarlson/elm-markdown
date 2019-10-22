
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
for a demo of the latest implementation.  There are two versions
of the demo, one in  `./app-demo/`, the other in `app-demo-fancy`.
The former works well for Markdown documents with no math text or not
too much math text.  All you will need are the modules `Markdown.Elm` and 
`Markdown.Option`, as described in the **Example** section below.


The "fancy" demo has some optimizations for math-heavy 
documents, but is slightly more complex to implement.  It also
has a "real" editor with features that those implementing 
fancier apps may want to use, e.g., sync between source and rendered text. 
See the **Editor** section.

**NOTE:** This package is still evolving relatively rapidly.  I regret
publishing so many updates, but I am using it in several apps, and this
is the only way I know how to encapsulate the complexity, work
 with the CI build systems, and keep my sanity

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

The [demo app](https://markdown.minilatex.app) resides in `./app-demo-fancy` 
of the repo
[Github repository](https://github.com/jxxcarlson/elm-markdown).
To run
it, go into that folder and say `sh make.sh`.  Then
double-click on `index.html`.  The simpler app resides in `./app-demo`.

## Style

The style used by the library is entirely determined by the
definitions of the CSS classes that you refer to in your
`index.html`.  The ones used for the demo app are found
in `./app-demo/assets/style.css` and `./app-demo-fancy/assets/style.css`
You can easily reconfigure the CSS to satsify your
own esthetics.

## Images

The usual `![My favorite image](imageUrl)` does the usual thing, with the image 
scaled to 100% of the width. You can 
also say `![My favorite image::left](imageUrl)` or 
`![My favorite image::right](imageUrl)` to float the image left or right at 
40% width. The widths are defined in `style.css`.

## MathJax

TeX/LaTeX math text is rendered using [MathJax](https://mathjax.org).
For this you must use the `ExtendedMath` option.  In addition,
you must have the lines below in `index.html` 
 at the top of the `<head>` section, just
under `<meta charset="utf-8" />`, for example.`

```
<!-- Load MathJax code -->
<script src="assets/custom-element-config.js"></script>
<script src="assets/math-text.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
```

The demo app is now using MathJax 3.0.

## Editor

This section is relevant only to those wanting to implement a "fancy" editor
that interacts with the rendered text in some way, e.g., sync of 
 source and rendered text, as described below.

Following Luke Westby's talk at Elm Europe 2018, I've implemented an editor
using custom elements and Codemirror.js. In addition, there is a start on a system 
for synchronizing the source text in the editor (Left) and the rendered text
(Right).  If one clicks somewhere in the gutter of the editor, the 
right-hand window scrolls to display the corresponding rendered text.  There
are quite a few moving parts to this system. Codemirror detects the click,
finds the line number, and returns the corresponding text as string, forwarding
this info to Elm.  The function `ElmWithId.searchAST` finds the id of the
corresponding element the AST (parse tree), which is ultimately used by 
`Browser.Dom.setViewportOf` to set the viewport of the rendered text window.

The system is not yet foolproof, the main weak point being that `searchAST` does not
always find its target  This is "Left-to-Right" sync.  We also want to implement
Right-to-Left sync.

All this editor stuff requires the following lines in `index.html`

```
  <!-- Text Editor -->
  <link rel='stylesheet' href='lib/codemirror.css'>
  <script type='text/javascript' src='lib/codemirror.js'></script>
  <script type='text/javascript' src='assets/code-editor.js'></script>
 ``` 


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


## Thanks

Thanks to Bill St. Clair, Folkert deVries, and Luke Westby.