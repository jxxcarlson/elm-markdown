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
        = FSM State (List Block)

where there are just three states:

    type State
        = Start
        | InBlock Block
        | Error

The transition function for the machine is

```
nextState : Option -> String -> FSM -> FSM
```

One uses it in conjunction with a fold to "run" the machine:

```
runFSM : Option -> String -> FSM
runFSM option str =
    let
        folder : String -> FSM -> FSM
        folder =
            \line fsm -> nextState option line fsm
    in
    List.foldl folder initialFSM (splitIntoLines str)
```




### Phase 2

