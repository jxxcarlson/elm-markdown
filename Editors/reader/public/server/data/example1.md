
# Example1
# Markdown + Math


## 1 Inline math:

Pythagoras said that $a^2 + b^2 = c^2$.

## 2 Display math

$$
    \int_0^1 x^n dx = \frac{1}{n + 1}
$$


## 3. SVG

@svg
<svg width="300" height="100">
<circle cx="200" cy="50" r="40" stroke="blue" stroke-width="3" fill="cyan" />
</svg>

## 4 Images

![Robin](http://noteimages.s3.amazonaws.com/robin2.jpg)

## 5 Code


```elm
Markdown.Render.toHtml ExtendedMath model.sourceText
|> Html.map MarkdownMsg
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



## 7 Some Html entities:

&forall; (&bbA;:&caU;): &bbA; &to; &bbB;
