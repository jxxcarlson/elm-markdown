# Notes

## Debugging types

Use `Debug.log`  in 

```elm
nextState : Option -> Line -> FSM -> FSM
nextState option line ((FSM state blocks register) as fsm_)
```

## Module ElmWithId

```
toHtml : Int -> Option -> String -> Html msg
toHtml version option str =
    str
        |> parse version option
        |> renderHtml
```

```
parse : Int -> Option -> String -> Tree MDBlockWithId
parse version option str =
    ParseWithId.toMDBlockTree version option str
```

Example:

```
import Markdown.Option exposing(..)
import Markdown.ElmWithId exposing(..)
import Markdown.String as S
parse 7 ExtendedMath S.test
```

## Module ParseWithId


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

```
runFSM : Option -> List Line -> FSM
runFSM option line
```