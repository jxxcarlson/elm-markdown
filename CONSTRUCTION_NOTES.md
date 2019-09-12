# Construction Notes

## 1. The Parser 

The parser, using the strategy outlined in XXX, operates in two phases.  First, it scans the text, discovering its block structure, building up a tree of blocks as it goes.  Second, it maps a parser for inline elements over the resulting tree.  The result is the abstract syntax tree for the Markdown renderer.

### 1.1 Parsing into Blocks


In this section, we describe how a document is parsed into a tree of blocks.  A Block is defined as follows:

    type Block
        = Block BlockType Level Content

    type alias Level =
        Int

    type alias Content =
        String


#### 1.1.1 BlockType

The `BlockType` type captures the top-level character
of blocks of Markdown text.  That type is split into two parts, 
`BalancedBlock BalancedType` and `MarkdownBlock MarkdownType`.  The first is used to capture structures that have a beginning and and ending tag, e.g.

```
$$
  a^2 + b^2 = c^2
$$
```

The second is for syntactically standard Markdown blocks, that begin with a possibly empty sequence of spaces followed by a prefix string, e.g., `"-"` for itemized lists. The `Root` element is for the document itself, and used to construct the root node of the parse tree.


```
type BlockType
    = BalancedBlock BalancedType
    | MarkdownBlock MarkdownType


type BalancedType
    = DisplayCode
    | Verbatim
    | DisplayMath


type MarkdownType
    = Root
    | UListItem
    | OListItem Int
    | Heading Int
    | HorizontalRule
    | Quotation
    | Poetry
    | Plain
    | Image
    | Blank
    | TableCell
    | TableRow
    | Table
```

### 1.2 A Finite-State Machine


A Markdown document is transformed into a tree
of Blocks using the code below, the key element of which
is `runFSM option`, which runs a finite-state machine. The machine breaks the input string into lines, then consumes these one-by-one, building up a `List Block` value. The `flush` function extracts the proper `List Block` value from the machine, and the `changeLevel 1` function shifts the level of all blocks except the root block so that all blocks except the root block have positive level (the root block has level 0).  Finally, the last function converts the list of blocks into a tree of blocks.  That tree has the property that the depth of a block in the tree is the same as its level. 

    
    parseToBlockTree : Option -> String -> Tree Block
    parseToBlockTree option str =
      str
        |> runFSM option
        |> flush
        |> List.map (changeLevel 1)
        |> HTree.fromList rootBlock blockLevel

The first argument, `parseToBlockTree`, of type `Option`, determines which flavor of Markdown will be parsed:

```
type Option
    = Standard
    | Extended
    | ExtendedMath
```

The second argument is the string representing the document.  The function value has type `Tree Block`, where `Tree` is a rose tree, imported from [zwilias/elm-rosetree](https://package.elm-lang.org/packages/zwilias/elm-rosetree/latest/).  


### 1.2.1 Operation of the Finite State Machine

The finite state machine is defined by


    type FSM
        = FSM State (List Block) Register

where there are just three states:

    type State
        = Start
        | InBlock Block
        | Error

The transition function for the machine is

```
nextState : Option -> Line -> FSM -> FSM
```

where `Line` is a type alias for `String`. One uses it in conjunction with a fold to "run" the machine:

```
runFSM : Option -> Document -> FSM
runFSM option str =
    let
        folder : String -> FSM -> FSM
        folder =
            \line fsm -> nextState option line fsm
    in
    List.foldl folder initialFSM (splitIntoLines str)
```

where `Document` is a type alias for `String`For the definition of `nextState`, see the code.  While the definition is rather elaborate, we can describe the rough idea here.  

### 1.2.2 The Register 

The `Register` is a record which accumulates information needed 
properly define the 

### 1.2.3 Hierarchical lists

Suppose given a value of type `List a`.  That list is *hierarchical* if there is a function `level: a -> Int` which assigns a non-negative integer to values of type `a`.  It is *well-formed* if 

- the first element of the list is the unique element of level zero
- if `x` and `y` are successive elements of the list, then either 
    - `level y = level + 1`
    - `level y <= level x`

An example of a well-formed hierarchical list is given by an *outline*, where the level of an entry is the number of leading spaces divided by three (integer division).  Consider the outline:
 
```
Errands
   Groceries
      Eggs
      Bacon
      Bread
    Drycleaning
    Taekwondo
```

The corresponding hierarchical list is

```
["Errands", "   Groceries", "      Eggs", ... ]
```

Another example is

```
[(0, "Errands", (1, "Groceries"), (2, "Eggs"), (2, "Bacon"),
 (2, "Bread"), (1, "Drycleaning"), (1, "Taekwondo")]
```

The level function is `Tuple.first`, so this also a hierarchical list.

### 1.2.4 Rose trees from hierarchical lists

A rose tree is a tree where the nodes carry a label of type `a` and where a node may have an arbitrary and variable number of children. 
From a hierarchical list, one can deduce a rose tree.  For example, the outline above defines the tree

```
                       Errands
                          |
            ------------------------------
            |             |              |
        Groceries     Drycleaning     Taekwondo
            |
     --------------
     |     |      |
   Eggs  Bacon  Bread
```

This is a tree of type `Tree String` in the language of [zwilias/elm-rosetree](https://package.elm-lang.org/packages/zwilias/elm-rosetree/latest/).

One can transform a hierarchial list to a rose tree using 
the function 

```
HList.fromList : a -> (a -> Int) -> List a -> Tree a
```

in the library [jxxcarlson/htree](https://package.elm-lang.org/packages/jxxcarlson/htree/latest/HTree).  In the case at hand, the
level function is given by

```
blockLevel : Block -> Level
blockLevel (Block _ k _) =
    k
```

### Phase 2

