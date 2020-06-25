
# jxxcarlson/elm-markdown


The aim of this Markdown library is
to provide a pure Elm implementation of Markdown
which offers a small set of optional extensions:

- Standard: the usual thing
- Extended: strike-though text, tables, Poetry and Verbatim blocks, 
better image handling, extensible block and inline elements,
SVG figures, apply a CSS class to an inline element
- ExtendedMath: like Extended, but math formulas written in
TeX/LaTeX, eg.,
```
This **is** a test: $a^2 + b^2 = c^2$.
```
are properly rendered.


## How to use it


For simple applications, follow the code in `./example/src`, e.g,

```
view model =
    Html.div []
        [ Markdown.Render.toHtml ExtendedMath sourceText
            |> Html.map MarkdownMsg
        ]
```

This example shows how to include mathematical
formulas and SVG figures.  To run the example, do this:

```
$ cd example
$ sh make.sh
```

Then open `public/index.html` with your browser.


## Demos

See hte `./Demos` folder for examples
Best to look at `./Demos/simplest` first.  
The other examples
include extra bells, whistles and optimizations
that are useful for interactive editing environments
and documents with a lot of mathematics.  The `reader`
app is read-only that can be used for content distribution.

Links to live demos:

- [simplest](https://jxxcarlson.github.io/app/mathMarkdownLive/)
- [markdown.minilatex.app](https://markdown.minilatex.app)


**NOTE:** This package is still evolving relatively rapidly.  I regret
publishing so many updates, but I am using it in several apps, and this
is the only way I know how to encapsulate the complexity, work
 with the CI build systems, and keep my sanity

## Installing a Demo


For example:

```bash
$ cd to ./Editors/fancy

$ npm install

$ npm start
```

## Style

The style used by the library is entirely determined by the
definitions of the CSS classes that you refer to in your
`index.html`.  The ones used for the demo apps are found
in `./public/assets/style.css` when you are in the folder
for one of the Editor examples.
You can easily reconfigure the CSS to satsify your
own esthetics.


## Markdown extensions

Here are the main additions:    


- Poetry blocks are
are like quotation blocks, except that they begin
with ">>" instead of ">".  White space and line endings are respected
in poetry blocks.  

- Verbatim blocks are like code blocks,
except that they are set off by four backticks instead of
three.  No syntax coloring is applied to verbatim blocks.

- Tables

- Extension blocks.  These begin with the token `@@`, e.g, 
`@@svg` for SVG figures as explained below.  The general form
is `@@cmd arg1 arg2 ...` on the first line followed by the
body of the element: zero or more non-blank lines followed
by a blank line.  The argument list may be empty.

- Inline extensions.  These have the form `@cmd[arg]`
For example, the text `@red[very hot stuff]` renders  *very hot stuff*
in red.  The `cmd` is a CSS class name, and that class is applied to
the text `arg`.  The class name can
be anything, but to have an effect, it must be defined in `./public/assets/style.css`.
We have defined the following CSS classes: `red`, `green`, `blue`, `pale`,
`highlight`, `mark` and `censored`.
The first four color the text.  The last three change the background
color: yellow, yellow, and black, respectively.  We may define more interesting inline
extensions later that do not rely on CSS, or entirely on CSS.  
For these, the `cmd` will be a kind of reserved word. We think 
of it as a function that is applied to`arg`. 

## SVG

You can add SVG images like this:

```
@@svg
<svg width="100" height="100">
<circle cx="50" cy="50" r="40" stroke="blue" stroke-width="3" fill="cyan" />
</svg>
```

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
Markdown.Parse.toMDBlockTree : Version 
       -> Option -> Document -> Tree MDBlock
```

where `Version` is an integer and `Document` is a type alias for `String`.  
This is also useful if you wish to transform the abstract syntax tree before 
rendering it. The `Version` parameter may be set to zero if you do not
have to worry about updated thd ids of rendered elements in an interactive 
editing environment.



## Editor

The fancy demo app now uses [pure Elm text editor](https://package.elm-lang.org/packages/jxxcarlson/elm-text-editor/latest/).
It is very much a work in progress. 

## Bugs and whatnot

Please write me at jxxcarlson@gmail.com or post an
issue on the [Github repository](https://github.com/jxxcarlson/elm-markdown)
regarding bugs or anything else. I will steer
this library towards the Commonmark spec to the greatest
extent possible by the method of successive approximations


## Recent Changes

- Added the @-block element to the parser.  Allows further
extension to the syntax (see section SVG above)

-  Made substantial changes to simplify the API.

- Changed the return type of the rendering functions: the return type 
`Html  msg` is replaced by `Html MarkdonMsg`. This change
 makes the rendered text "active," e.g., can respond to clicks.
 See next item.
 
- Added `sourceMap : Tree MDBlockWithId -> BiDict String String` in the 
`Markdown.Parse` module as a hook for host programs to implement 
bidrectional sync of source and rendered text. 



## Thanks

Thanks to Folkert de Vries and Luke Westby.  A shout-out
to Folkert for an optimiztaion of the pure text 
rendering (10 x speedup).

