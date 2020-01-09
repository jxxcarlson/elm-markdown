
# jxxcarlson/elm-markdown


The aim of this Markdown library is
to provide a pure Elm implementation of Markdown
which offers a small set of optional extensions:

- Standard: the usual thing
- Extended: strike-though text, tables, and Poetry and Verbatim blocks, 
better image handling
- ExtendedMath: like Extended, but math formulas written in
TeX/LaTeX, eg.,
```
This **is** a test: $a^2 + b^2 = c^2$.
```
are properly rendered.


## How to use it


For simple applications, use the `Madrkown.Elm` and `Markdown.Option` modules,
as in these examples:

```
Markdown.Elm.toHtml Extended "This **is** a test."

Markdown.Elm.toHtml ExtendedMath "Use $a^2 + b^2 = c^2$."
```

where in `Markdown.Option` one has

```
type Option
    = Standard
    | Extended
    | ExtendedMath
```

For the `ExtendedMath` option, take a look at `./app-demo/index.html` in the 
[source code](https://github.com/jxxcarlson/elm-markdown) to see what to do.
You will need some Javascript, incuding MathJax 3.

## Demo

There are two versions
of the demo, a basic one in  `./app-demo/`, 
another in `app-demo-fancy` which has more features and some optimizations
that are useful for documents with a lot of mathematics.

See [markdown.minilatex.app](https://markdown.minilatex.app)
for a demo of the latest implementation the fancy demo.

**NOTE:** This package is still evolving relatively rapidly.  I regret
publishing so many updates, but I am using it in several apps, and this
is the only way I know how to encapsulate the complexity, work
 with the CI build systems, and keep my sanity



## Style

The style used by the library is entirely determined by the
definitions of the CSS classes that you refer to in your
`index.html`.  The ones used for the demo app are found
in `./app-demo/assets/style.css` and `./app-demo-fancy/assets/style.css`
You can easily reconfigure the CSS to satsify your
own esthetics.


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

### Images

The usual `![My favorite image](imageUrl)` does the usual thing, with the image 
scaled to 100% of the width. You can 
also say `![My favorite image::left](imageUrl)` or 
`![My favorite image::right](imageUrl)` to float the image left or right at 
40% width. The widths are defined in `style.css`.



## Advanced Usage: AST

If you 
wish to write your own renderer, or do other fancy things,
you will want to produce and manpulate the AST:

```
Markdown.Parse.toMDBlockTree : Version -> Option -> Document -> Tree MDBlock
```

where `Version` is an integer and `Document` is a type alias for `String`.  
This is also useful if you wish to transform the abstract syntax tree before 
rendering it. The `Version` parameter may be set to zero if you do not
have to worry about updated thd ids of rendered elements in an interactive 
editing environment.



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

**Note.** I intend to replace the Codemirror editor shortly with a pure Elm 
text editor.

The system is not yet foolproof, the main weak point being that `searchAST` does not
always find its target  This is for "Left-to-Right" sync of source
and rendered text.  We also want to implement
Right-to-Left sync.

All this editor stuff requires the following lines in `index.html`

```
  <!-- Text Editor -->
  <link rel='stylesheet' href='lib/codemirror.css'>
  <script type='text/javascript' src='lib/codemirror.js'></script>
  <script type='text/javascript' src='assets/code-editor.js'></script>
 ``` 


## Bugs and whatnot

Please write me at jxxcarlson@gmail.com or post an
issue on the [Github repository](https://github.com/jxxcarlson/elm-markdown)
regarding bugs or anything else. I will steer
this library towards the Commonmark spec to the greatest
extent possible by the method of successive approximations


## Thanks

Thanks to Folkert de Vries and Luke Westby.  A shout-out
to Folkert for an optimiztaion of the pure text 
rendering (10 x speedup).