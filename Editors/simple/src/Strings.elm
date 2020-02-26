module Strings exposing (initialText, mathExampleText)


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
the [docs](https://package.elm-lang.org/packages/jxxcarlson/elm-markdown/latest/)
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

## 3 Code

```elm
setArea : Float -> Organism -> Organism
setArea a organism  =
   map (\\r -> {r | area =  a}) organism
```

## 4 Lists

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
    
 """


old =
    """

# Tests


[Working Example](https://ellie-app.com/5M6pVvF5BRta1)

[Working Example 2](https://ellie-app.com/5M7wMJZ4T83a1)

"""


mathExampleText =
    """
ddd

"""
