module Strings exposing (initialText)


initialText =
    """
# Markdown + Math


This is the simplest use case of the package
[jxxcarlson//elm-markdown](https://package.elm-lang.org/packages/jxxcarlson/elm-markdown/latest/),
the purpose of which is to render Markdown with math. No fancy editor,
no diffing to improve performance,
no debouncing for rapid typists,
so the document
is re-rendered on each stroke of the keyboard. No other fancy stuff like an active table of contents,
which is also possible. See
the [docs](https://package.elm-lang.org/∫packages/jxxcarlson/elm-markdown/latest/)
for more info on implementing these options in your app. Or go to
[markdown.minilatex.app](https://markdown.minilatex.app/) for a fancier
version of the app which makes more expensive use of
this pacakge.


# Examples

## 1 Inline math:

Pythagoras said that $a^2 + b^2 = c^2$.

## 2 Display math

$$
    \\int_0^1 x^n dx = \\frac{1}{n + 1}
$$


## 3. SVG

@@svg
<svg width="300" height="100">
<circle cx="180" cy="50" r="40" stroke="blue" stroke-width="3" fill="cyan" />
</svg>

## 4 Images

![Robin](http://noteimages.s3.amazonaws.com/robin2.jpg)

## 5 Code

```elm
setArea : Float -> Organism -> Organism
setArea a organism  =
   map (\\r -> {r | area =  a}) organism
```

## 6 Lists

Lists can be nested and
can contain other nested elements
such as paragraphs. Indentation
for nesting elements is four spaces.

- Groceries
    - Bread
    - Milk
    - Apples

    George — please get the new crispy apples that we al like so much.
    And a bag of unsalted peanuts if you can find them.

- Drugstore
    - Aspirin
    - Shampoo



 ## 7 The CSS Class Inline Element

 @highlight[The examples below show how one can apply an arbitrary
 CSS class to text].  The word following the `@` sign
 defines the CSS class.  The class itself must be defined
 in the file `./assets/style.css`, e.g:

````
    .censored {background-color: black}
````


 - This is @red[red hot stuff].

 - Today I am feeling @blue[somewhat blue].

 - We need more @green[green energy].

 - My email address is `john@ladidah.io` (Note the song-and-dance needed for the `@` sign).

 - I have censored @censored[this text because it is stupid].



## 8 Html entities

 &forall; (&bbA;:&caU;): &bbA; &to; &bbB;


 """
