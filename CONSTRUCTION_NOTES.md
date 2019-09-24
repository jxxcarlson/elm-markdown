# Construction Notes

## 1. The Parser

The parser, using the strategy outlined in XXX, operates in two phases.  First, it scans the text, discovering its block structure, building up a tree of blocks as it goes.  Second, it maps a parser for inline elements over the resulting tree.  The result is the abstract syntax tree for the Markdown renderer.

### 1.1 Parsing into Blocks (module `Parse`)


A Block is defined as follows, where `BlockType` is explained in the next section.

    type Block
        = Block BlockType Level Content

    type alias Level =
        Int

    type alias Content =
        String


To parse a document (aka `String`) to a tree of blocks,
one uses the function `parseToBlockTree`:

```
toBlockTree : Option -> Document -> Tree Block
toBlockTree option document =
    document
        |> splitIntoLines
        |> runFSM option
        |> flush
        |> List.map (changeLevel 1)
        |> HTree.fromList rootBlock blockLevel
```

The `Option` type determines which flavor of Markdown will be parsed:

```
type Option
    = Standard
    | Extended
    | ExtendedMath
```

In the pipeline which defines `toBlockTree`, `runFSM` runs a finite-state machine over the list of lines derived from the document to produce a list of `Blocks`.  The `changeLevel 1` function prepares this list for the final function in the pipeline, which transforms the list into a tree using information on indentation level in the blocks.

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

### 1.1.2 A Finite-State Machine


A Markdown document is transformed into a tree
of Blocks using the code below, the key element of which
is `runFSM option`, which runs the lines of the input string through a finite-state machine. Processing the lines one at a time, the machine builds up a `List Block` value. The `flush` function extracts the `List Block` value from the machine. Every block has a *level* — an integer — which corresponds to the amount by which the text is indented. Applicaiton of `changeLevel 1` increments the level of all blocks except the root block.  Thus root block survives as the only block of level zero. The last function in the pipeline converts the list of blocks into a rose tree of blocks which has the property that the depth of a block in the tree is the same as its level.

    -- module Parse:

    toBlockTree : Option -> String -> Tree Block
    toBlockTree option str =
      str
        |> runFSM option
        |> flush
        |> List.map (changeLevel 1)
        |> HTree.fromList rootBlock blockLevel

The first argument determines which flavor of Markdown will be parsed. The second argument is the string representing the document.  The function value has type `Tree Block`, where `Tree` is a rose tree, imported from [zwilias/elm-rosetree](https://package.elm-lang.org/packages/zwilias/elm-rosetree/latest/).


### 1.1.3 Operation of the Finite State Machine

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

where `Document` is a type alias for `String`.

### 1.1.4 The nextState function

The `nextState`
function examines the input line to see whether it begins a new block.  This would happen, for example, if the leading non-blank character, in which case this is the first line of a quotation block.

```
nextState : Option -> Line -> FSM -> FSM
nextState option str ((FSM state blocks register) as fsm) =
    let
        fsm_ =
            handleRegister fsm
    in
    case stateOfFSM fsm of
        Start ->
            nextStateStart option str fsm_

        InBlock _ ->
            nextStateInBlock option str fsm_

        Error ->
            fsm_

```

### 1.1.5 The Register

The `Register` is a record which accumulates information needed
automatically number lists and to parse tables.  To parse tables one uses the `blockStack` and level fields.  As a table is parsed, its blocks are pushed onto the `blockStack` with an appropriate shift of level.  When the end of the table is encountered, the table blocks are popped from the stack and added to the `(List Block)` component of the FSM.

```
type alias Register =
    { itemIndex1 : Int
    , itemIndex2 : Int
    , itemIndex3 : Int
    , itemIndex4 : Int
    , level : Int
    , blockStack : List Block
    }
```

### 1.1.6 Hierarchical lists

Suppose given a value of type `List a`.  That list is *hierarchical* if there is a function `level: a -> Int` which assigns a non-negative integer to values of type `a`.  It is *well-formed* if

- the first element of the list is the unique element of level zero
- if `x` and `y` are successive elements of the list, then either
    - `level y = level x + 1`
    - `level y <= level x`

An example of a well-formed hierarchical list is given by an *outline*, where the level of an entry is the number of leading spaces divided by three (integer division).  Consider the outline:

```
Groceries
   Eggs
   Bacon
   Bread
Drycleaning
Taekwondo: Kids
```

The corresponding hierarchical list is

```
["Groceries", "   Eggs", ... ]
```

Another example is

```
[(1, "Groceries"), (2, "Eggs"), (2, "Bacon"),
 (2, "Bread"), (1, "Drycleaning"), (1, "Taekwondo: Kids")]
```

With the level function `Tuple.first`, this list is hierarchical.

### 1.1.7 Rose trees from hierarchical lists

A rose tree is a tree where the nodes carry a label of type `a` and where a node may have an arbitrary number of children.
From a hierarchical list plus a choice of root node, one can form a rose tree.  For example, if one chooses the root node to have label "Errands", then one forms the tree.

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

To form a rose tree from a hierarchial list, one use the function
```
HList.fromList : a -> (a -> Int) -> List a -> Tree a
```

in the library [jxxcarlson/htree](https://package.elm-lang.org/packages/jxxcarlson/htree/latest/HTree).  The first element is the root of the tree and the second is the function that determines the level of a value of type `a`.  In the case of the list `[(1, "Groceries"), ...`, the
level function is given by `Tuple.first`. In the case of the present block parser, it is given by.

```
blockLevel : Block -> Level
blockLevel (Block _ k _) =
    k
```

### 1.2 Parsing inline elements


Under construction.  But the main idea is contained in the
last line of the code below.


```
toMDBlockTree : Option -> Document -> Tree MDBlock
toMDBlockTree option document =
    document
        |> toBlockTree option
        |> Tree.map (selectMapper option)
```

The function call `selectMapper option` returns a function of type
`Block -> MDBlock` which parses the input block, returning a new block of type `MDBlock` in which all inline Markdown elements have been parsed.  One has the types

```
type MDBlock
    = MDBlock BlockType Level BlockContent


type BlockContent
    = M MDInline
    | T String
```

Notice that a `Block` and an `MDBlock` differ only in the last component: `Content` becomes `BlockContent`.  The `MDInline` type is

```
type MDInline
    = OrdinaryText String
    | ItalicText String
    | BoldText String
    | Code String
    | InlineMath String
    | StrikeThroughText String
    | BracketedText String
    | Link String String
    | Image String String
    | Line (List MDInline)
    | Paragraph (List MDInline)
    | Stanza String
    | Error (List MDInline)
```


## Notes on Folkert's optimization

folkertdev 12:11 PM
Nice. The main idea behind the changes is that written out operations (e.g. 1 + 2 + 3) is much faster than the equivalent operation on lists (List.sum [1,2,3]). In tight loops that really matters.

One more thing I found: here https://github.com/jxxcarlson/elm-markdown/blob/e9b88b74f8a1de58f55824007380c4ede7835bcb/src/Parse.elm#L574 the p is often the empty string. It never matches, but the whole file is still searched for a match. A simple if p == "" then line_ else String.replace p "" line_ gives a good improvement too.

The benchmark is really simple, just run the parsing of a paragraph in a loop. I then use the chrome devtools to see where time is spent. elm-benchmark is not actually that effective for this kind of thing at the moment.

Then I also looked at the CommonMark spec a bit: inline markdown is unpleasant to parse... Mainly the left/right flanking and precedence of links/code spans before bold/italic. I don't currently see a nice way to use elm-parser here. Did you look into this?
jxxcarlson:house_with_garden: 12:44 PM

Good point re p — I’ll get to that. One little (related) thing I did was to strip leading space of lines,  then parse to figure out what kind of line it is, e.g., beginning of a list item of a certain level.  That could also be done by plain old parsing, but then there are a huge number of common prefixes, which means a lot of backtracking, which means more backtracking and tricky dependence on order.  At least so it seemed to me.
Re CommonMark and inline.  Unpleasant indeed. Very irregular, sometimes to the point of pointlessness in my opinion.  I may just do a “best effort”, try to formulate with some precision what it means, and call it “Rational Markdown.”  Of course, to do that is to paint a target on one’s back.  Haha!