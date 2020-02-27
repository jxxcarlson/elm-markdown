
## Optimizations

The idea of the optimizations used in `app-demo-optimized`
(see the repo)
is to parse the document text when the
document is first opened. The resulting parse
tree is stored as
`model.lastAst`. Each block in the AST carries
a label `(version, id): (Int, Int)`, where
the `id` is unique to each block.
Each time the text changes, a new AST is computed
with an incremented version number. The
function `Diff.mergeWith equals` is applied to
the old and new ASTs
to compute an updated AST. The updated AST
is identical to the new AST except for the id's.
The id of a node in the updated AST is
the same as in the old AST if and only if the type, level,
and content of the node has not changed.
This information is used to signal MathJax not
to re-render mathematical text that is unchanged.

To see where these optimizations are applied,
look for the places in `app-demo-optimized/Main.elm`
where functions in the modules
`ParseWithId` and `Markdown.ElmWithId` are called.
