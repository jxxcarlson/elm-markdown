# Example


## Running the example

To run, do 

```elm
$ elm make src/Main.elm --output public/Main.js
```

Then open the file `./public/index-mathjax.html` with your browser.

## Options

One can use either MathJax or KaTeX to render mathematical formulas.
At the moment there is a problem with the KaTeX renderer in this
example.

## Using Math+Markdown with MathJax

You will need to use `index-mathjax.html` or some variant of it,
since it loads the MathJax assets.  Here is
full structure of what you will need:

```
public
├── Main.js
├── assets
│   ├── custom-element-config.js
│   ├── math-text.js
│   └── style.css
└── index-mathjax.html
```

## Using Math+Markdown with KaTeX

Coming soon