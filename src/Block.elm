module Block exposing
    ( BlockContent(..), MMBlock(..)
    , parseToMMBlockTree, runFSM
    )

{-| A markdown document is parsed into a tree
of Blocks using

    parseToBlockTree : String -> Tree Block

This function applies

    parse : String -> List Block

and then the partially applied function

    HTree.fromList rootBlock blockLevel :
       List Block -> Tree Block

This last step is possible because the elements of `List Block`
are annotated by their level. The `parse` function operated
by running a finite-state machine. This machine has type

    type FSM
        = FSM State (List Block)

where the three possible states are defined by

    type State
        = Start
        | InBlock Block
        | Error

If the FSM consumes all its input and no error
is encountered, then the `(List Block)` component of the FSM contains
the result of parsing the input string into blocks.

@docs BlockContent, MMBlock, parseToMMBlockTree)

-}

import BlockType exposing (BalancedType(..), BlockType(..), Line, MarkdownType(..))
import HTree
import MMInline exposing (MMInline(..))
import Markdown.Option exposing (Option(..))
import Tree exposing (Tree)



-- TYPES --


{-| A Block is defined as follows:

    type Block
        = Block BlockType Level Content

    type alias Level =
        Int

    type alias Content =
        String

-}
type Block
    = Block BlockType Level Content


{-| An MMBloc differs from the a BLock
in that the Content, which is a String,
has been parsed into an MMInline value
by applying

    MMInline.parse : Option -> String -> MMInline

Throughout an Option value determines the
flavor of Markdown parsed: Standard,
Extended, or ExtendedMath.

-}
type MMBlock
    = MMBlock BlockType Level BlockContent


{-| The type of parsed MMarkdown
-}
type BlockContent
    = M MMInline
    | T String


type alias Level =
    Int


type alias Content =
    String



-- THE FINITE-STATE MACHINE --


type FSM
    = FSM State (List Block) Register


type State
    = Start
    | InBlock Block
    | Error


{-| The registers collection information
about the numbering of sections, subsections, etc.
-}
type alias Register =
    { itemIndex1 : Int
    , itemIndex2 : Int
    , itemIndex3 : Int
    , itemIndex4 : Int
    , level : Int
    , blockStack : List Block
    }


emptyRegister : Register
emptyRegister =
    { itemIndex1 = 0
    , itemIndex2 = 0
    , itemIndex3 = 0
    , itemIndex4 = 0
    , level = 0
    , blockStack = []
    }


{-| `parseToBlockTree` runs the FSM to parse the input into
a list of Blocks. The machine is flushed to obtain
the last block and the level of elements is incremented
so that only the Root block has level 0. Finally,
a three of Blocks in constructed using the level information.

    parseToTree  "- One\nsome stuff\n- Two\nMore stuff"
    -->    Tree (Block (MarkdownBlock Plain) 0 "*") [
    -->      Tree (Block (MarkdownBlock UListItem) 1 ("- One\nsome stuff\n")) []
    -->      ,Tree (Block (MarkdownBlock UListItem) 1 ("- Two\nMore stuff\n")) []
    -->    ]

-}
parseToBlockTree : Option -> String -> Tree Block
parseToBlockTree option str =
    str
        |> splitIntoLines
        |> runFSM option
        |> flush
        |> List.map (changeLevel 1)
        |> HTree.fromList rootBlock blockLevel


parseTableRow : Level -> String -> List Block
parseTableRow level str =
    str
        |> String.split "|"
        |> List.map String.trim
        |> List.filter (\s -> s /= "")
        |> List.map (\s -> Block (MarkdownBlock TableCell) level s)


changeLevel : Int -> Block -> Block
changeLevel k (Block bt_ level_ content_) =
    Block bt_ (level_ + k) content_


parseToMMBlockTree : Option -> String -> Tree MMBlock
parseToMMBlockTree option str =
    str
        |> parseToBlockTree option
        |> Tree.map (selectMapper option)


selectMapper : Option -> (Block -> MMBlock)
selectMapper option ((Block bt level_ content_) as block) =
    case option of
        Standard ->
            mapperStandard option block

        Extended ->
            mapperExtended option block

        ExtendedMath ->
            mapperExtendedMath option block


mapperExtendedMath : Option -> Block -> MMBlock
mapperExtendedMath option_ (Block bt level_ content_) =
    case bt of
        MarkdownBlock mt ->
            case mt of
                Poetry ->
                    MMBlock (MarkdownBlock mt) level_ (M (Stanza content_))

                _ ->
                    MMBlock (MarkdownBlock mt) level_ (M (MMInline.parse option_ content_))

        BalancedBlock DisplayCode ->
            MMBlock (BalancedBlock DisplayCode) level_ (T content_)

        BalancedBlock Verbatim ->
            MMBlock (BalancedBlock Verbatim) level_ (T content_)

        BalancedBlock DisplayMath ->
            MMBlock (BalancedBlock DisplayMath) level_ (T content_)


mapperExtended : Option -> Block -> MMBlock
mapperExtended option_ (Block bt level_ content_) =
    case bt of
        MarkdownBlock mt ->
            case mt of
                Poetry ->
                    MMBlock (MarkdownBlock mt) level_ (M (Stanza content_))

                _ ->
                    MMBlock (MarkdownBlock mt) level_ (M (MMInline.parse option_ content_))

        BalancedBlock DisplayCode ->
            MMBlock (BalancedBlock DisplayCode) level_ (T content_)

        BalancedBlock Verbatim ->
            MMBlock (BalancedBlock Verbatim) level_ (T content_)

        _ ->
            MMBlock (MarkdownBlock Plain) level_ (M (MMInline.parse option_ content_))


mapperStandard : Option -> Block -> MMBlock
mapperStandard option_ (Block bt level_ content_) =
    case bt of
        MarkdownBlock mt ->
            MMBlock (MarkdownBlock mt) level_ (M (MMInline.parse option_ content_))

        BalancedBlock DisplayCode ->
            MMBlock (BalancedBlock DisplayCode) level_ (T content_)

        _ ->
            MMBlock (MarkdownBlock Plain) level_ (M (MMInline.parse option_ content_))



-- THE FINITE STATE MACHINE --


{-| runFSM runs a function

     folder : String -> FSM -> FSM

over the input, a list of strings, to run
the finite-state-machine, thereby accumulating
the parse result, a List Block.

Recall that

    type FSM
      = FSM State (List Block) Register

    runFSM  Standard "1. A\nxx\n   6. u\nyy\n4.  B"
    --> FSM (InBlock (Block (MarkdownBlock (OListItem 2)) 0 (" B\n")))
    -->   [
    -->       Block (MarkdownBlock (OListItem 1)) 1 "u\nyy\n"
    -->     , Block (MarkdownBlock (OListItem 1)) 0 "A\nxx\n"
    -->   ]
    -->   { itemIndex1 = 2, itemIndex2 = 0, itemIndex3 = 0, itemIndex4 = 0 }

-}
runFSM : Option -> List String -> FSM
runFSM option lines =
    let
        folder : String -> FSM -> FSM
        folder =
            \line fsm -> nextState option line fsm
    in
    List.foldl folder initialFSM lines



-- FINITE STATE MACHINE: NEXT STATE FUNCTION --


nextState : Option -> String -> FSM -> FSM
nextState option str ((FSM state blocks register) as fsm) =
    let
        fsm_ =
            case List.head register.blockStack of
                Nothing ->
                    --xxx
                    fsm

                Just block ->
                    -- Pop the blockStack the new item is not a table row
                    case typeOfState state of
                        Just (MarkdownBlock TableRow) ->
                            fsm

                        _ ->
                            let
                                tableBlock : Block
                                tableBlock =
                                    Block (MarkdownBlock Table) 0 "tableRoot"

                                rowBlock : Block
                                rowBlock =
                                    Block (MarkdownBlock TableRow) 1 "row"

                                tableData =
                                    List.reverse register.blockStack
                                        |> (\x -> x ++ [ rowBlock, tableBlock ])
                                        |> List.map editBlock

                                newBlocks =
                                    -- NOTE: the below is a very bad solution!!
                                    List.filter (\(Block _ _ content) -> content /= "deleteMe") blocks
                            in
                            FSM Start (tableData ++ newBlocks) { register | blockStack = [] }
    in
    case stateOfFSM fsm of
        Start ->
            nextStateS option str fsm_

        InBlock _ ->
            nextStateIB option str fsm_

        Error ->
            fsm_


editBlock : Block -> Block
editBlock ((Block bt lev content) as block) =
    if bt == MarkdownBlock TableRow && content == "row" then
        Block bt lev ""

    else
        block


nextStateS : Option -> String -> FSM -> FSM
nextStateS option line (FSM state blocks register) =
    case BlockType.get option line of
        ( _, Nothing ) ->
            FSM Error blocks register

        -- add line
        ( level, Just blockType ) ->
            let
                ( newBlockType, newRegister ) =
                    updateRegisterAndBlockType blockType level register

                newLine =
                    removePrefix blockType line
            in
            if
                newBlockType
                    == MarkdownBlock TableRow
                    && newBlockTypeIsDifferent newBlockType state
            then
                handleTableStart blockType level line state blocks register

            else
                FSM (InBlock (Block newBlockType level newLine)) blocks newRegister


newBlockTypeIsDifferent : BlockType -> State -> Bool
newBlockTypeIsDifferent blockType state =
    case state of
        InBlock currentBlock ->
            type_ currentBlock /= blockType

        _ ->
            False


nextStateIB : Option -> String -> FSM -> FSM
nextStateIB option line ((FSM state_ blocks_ register) as fsm) =
    case BlockType.get option line of
        ( _, Nothing ) ->
            FSM Error (blockListOfFSM fsm) register

        ( level, Just blockType ) ->
            -- process balanced block
            if BlockType.isBalanced blockType then
                processBalancedBlock blockType line fsm
                -- add markDown block d

            else if BlockType.isMarkDown blockType then
                processMarkDownBlock option level blockType line fsm

            else
                fsm


processMarkDownBlock : Option -> Level -> BlockType -> Line -> FSM -> FSM
processMarkDownBlock option level blockTypeOfLine line ((FSM state blocks register) as fsm) =
    case state of
        -- add current block to block list and
        -- start new block with the current line and lineType
        InBlock ((Block typeOfCurrentBlock levelOfCurrentBlock _) as currentBlock) ->
            if BlockType.isBalanced typeOfCurrentBlock then
                -- add line to current balanced block
                addLineToFSM line fsm

            else if blockTypeOfLine == MarkdownBlock Blank then
                -- start new block
                FSM Start (adjustLevel currentBlock :: blocks) register

            else if
                (blockTypeOfLine == MarkdownBlock Plain)
                    && (typeOfCurrentBlock /= MarkdownBlock TableRow)
            then
                -- continue, add content to current block
                addLineToFSM line fsm

            else if blockTypeOfLine == MarkdownBlock TableRow then
                handleTableRow blockTypeOfLine level line state blocks register

            else
                addNewMarkdownBlock option currentBlock line fsm

        _ ->
            fsm


handleTableRow : BlockType -> Level -> Line -> State -> List Block -> Register -> FSM
handleTableRow blockTypeOfLine level line state blocks register =
    if newBlockTypeIsDifferent blockTypeOfLine state then
        handleTableStart blockTypeOfLine level line state blocks register

    else
        handleInnerTableRow blockTypeOfLine level line state blocks register


handleTableStart : BlockType -> Level -> Line -> State -> List Block -> Register -> FSM
handleTableStart blockTypeOfLine level line state blocks register =
    case state of
        Start ->
            FSM state blocks register

        Error ->
            FSM state blocks register

        InBlock currentBlock ->
            let
                tableBlock : Block
                tableBlock =
                    Block (MarkdownBlock Table) level "tableRoot"

                rowBlock : Block
                rowBlock =
                    Block blockTypeOfLine (level + 1) "row"

                childrenOfNewBlock =
                    parseTableRow (level + 2) line

                newRow =
                    childrenOfNewBlock ++ [ rowBlock ]
            in
            --xxx
            -- FSM (InBlock tableBlock) ((rowBlock :: childrenOfNewBlock) ++ currentBlock :: blocks) { register | level = register.level + 1 }
            FSM (InBlock rowBlock)
                blocks
                { register | level = register.level + 0, blockStack = newRow }


handleInnerTableRow : BlockType -> Level -> Line -> State -> List Block -> Register -> FSM
handleInnerTableRow blockTypeOfLine level line state blocks register =
    case state of
        Start ->
            FSM state blocks register

        Error ->
            FSM state blocks register

        InBlock currentBlock ->
            let
                rowBlock : Block
                rowBlock =
                    Block blockTypeOfLine (level + 1) "row"

                childrenOfNewBlock =
                    parseTableRow (level + 2) line

                tableMarker : Block
                tableMarker =
                    Block (MarkdownBlock TableRow) (level + 1) "deleteMe"

                newRow =
                    childrenOfNewBlock ++ [ rowBlock ]
            in
            FSM (InBlock tableMarker) blocks { register | blockStack = register.blockStack ++ newRow }


processBalancedBlock : BlockType -> String -> FSM -> FSM
processBalancedBlock blockType line ((FSM state_ blocks_ register) as fsm) =
    -- the currently processed block should be closed and a new one opened
    if Just blockType == typeOfState (stateOfFSM fsm) then
        case stateOfFSM fsm of
            InBlock block_ ->
                let
                    line_ =
                        removePrefix blockType line
                in
                FSM Start (addLineToBlock line_ block_ :: blocks_) register

            _ ->
                fsm
        -- open balanced block

    else
        case stateOfFSM fsm of
            InBlock block_ ->
                FSM (InBlock (Block blockType (BlockType.level line) line)) (block_ :: blocks_) register

            _ ->
                fsm



-- FINITE STATE MACHINE: HELPER FUNCTIONS FOR THE UPDATE FUNCTION


{-|

1.  add the current block the block list ;
    (2) replace the current block by a new one derived from the
    current line and use that line to update the register

-}
addNewMarkdownBlock : Option -> Block -> String -> FSM -> FSM
addNewMarkdownBlock option ((Block typeOfCurrentBlock levelOfCurrentBlock _) as currentBlock) line ((FSM state blocks register) as fsm) =
    case BlockType.get option line of
        ( _, Nothing ) ->
            fsm

        ( level, Just newBlockType_ ) ->
            let
                ( newBlockType, newRegister ) =
                    updateRegisterAndBlockType newBlockType_ level register

                newLine =
                    removePrefix typeOfCurrentBlock line

                newBlock =
                    Block newBlockType level (removePrefix newBlockType newLine)
            in
            FSM (InBlock newBlock) (adjustLevel currentBlock :: blocks) newRegister


removePrefix : BlockType -> String -> String
removePrefix blockType line_ =
    let
        p =
            BlockType.prefixOfBlockType blockType line_
    in
    String.replace p "" line_


{-| Recall that lines are stripped of leading space
-}
adjustLevel : Block -> Block
adjustLevel ((Block blockType level content) as block) =
    if blockType == MarkdownBlock Plain then
        let
            newLevel =
                BlockType.level content
        in
        Block blockType newLevel content

    else
        block


updateRegisterAndBlockType : BlockType -> Int -> Register -> ( BlockType, Register )
updateRegisterAndBlockType blockType level_ register =
    if BlockType.isOListItem blockType then
        let
            ( index, newRegister ) =
                incrementRegister level_ register

            newBlockType =
                MarkdownBlock (OListItem index)
        in
        ( newBlockType, newRegister )

    else
        ( blockType, emptyRegister )


incrementRegister : Int -> Register -> ( Int, Register )
incrementRegister level register =
    case level + 1 of
        1 ->
            ( register.itemIndex1 + 1
            , { register
                | itemIndex1 = register.itemIndex1 + 1
                , itemIndex2 = 0
                , itemIndex3 = 0
                , itemIndex4 = 0
              }
            )

        2 ->
            ( register.itemIndex2 + 1
            , { register
                | itemIndex2 = register.itemIndex2 + 1
                , itemIndex3 = 0
                , itemIndex4 = 0
              }
            )

        3 ->
            ( register.itemIndex3 + 1
            , { register
                | itemIndex3 = register.itemIndex3 + 1
                , itemIndex4 = 0
              }
            )

        4 ->
            ( register.itemIndex4 + 1, { register | itemIndex4 = register.itemIndex4 + 1 } )

        _ ->
            ( 0, register )


addLineToFSM : String -> FSM -> FSM
addLineToFSM str (FSM state_ blocks_ register) =
    case state_ of
        Start ->
            FSM state_ blocks_ register

        Error ->
            FSM state_ blocks_ register

        InBlock _ ->
            case List.head register.blockStack of
                Nothing ->
                    FSM (addLineToState str state_) blocks_ register

                Just block ->
                    --xxx
                    FSM (addLineToState str state_) (block :: blocks_) { register | blockStack = List.drop 1 register.blockStack }


addLineToState : String -> State -> State
addLineToState str state_ =
    case state_ of
        Start ->
            Start

        Error ->
            Error

        InBlock block_ ->
            InBlock (addLineToBlock str block_)


addLineToBlock : String -> Block -> Block
addLineToBlock str (Block blockType_ level_ content_) =
    Block blockType_ level_ (content_ ++ str)



-- FINITE STATE MACHINE: HELPER FUNCTIONS --


blockLevel : Block -> Int
blockLevel (Block _ k _) =
    k


type_ : Block -> BlockType
type_ (Block bt _ _) =
    bt


typeOfState : State -> Maybe BlockType
typeOfState s =
    case s of
        Start ->
            Nothing

        InBlock b ->
            Just (type_ b)

        Error ->
            Nothing


rootBlock =
    Block (MarkdownBlock Root) 0 "DOCUMENT"


flush : FSM -> List Block
flush fsm =
    case stateOfFSM fsm of
        Start ->
            List.reverse (blockListOfFSM fsm)

        Error ->
            List.reverse (blockListOfFSM fsm)

        InBlock b ->
            List.reverse (b :: blockListOfFSM fsm)


stateOfFSM : FSM -> State
stateOfFSM (FSM state_ _ _) =
    state_


blockListOfFSM : FSM -> List Block
blockListOfFSM (FSM _ blockList_ _) =
    blockList_


splitIntoLines : String -> List String
splitIntoLines str =
    str
        |> String.lines
        |> List.map
            (\l -> l ++ "\n")


initialFSM : FSM
initialFSM =
    FSM Start [] emptyRegister



-- STRING FUNCTIONS: WERE USED TO DEBUG DURING DEVELOPMENT --


toAnnotatedStringList : List Block -> List ( Int, String )
toAnnotatedStringList blocks =
    List.map (\(Block _ level content) -> ( level, content )) blocks


stringOfFSM : FSM -> String
stringOfFSM fsm =
    fsm
        |> flush
        |> List.map stringOfBlock
        |> String.join "\n\n"


fsmToPairs : FSM -> List ( Int, String )
fsmToPairs fsm =
    fsm |> flush |> toAnnotatedStringList


pairsListToPairsTree : List ( Int, String ) -> Tree ( Int, String )
pairsListToPairsTree lst =
    lst |> HTree.fromList ( -1, "ROOT" ) Tuple.first


pairsTreeToString : Tree ( Int, String ) -> String
pairsTreeToString tree =
    HTree.toOutline Tuple.second tree


fsmToPairsTree : FSM -> Tree ( Int, String )
fsmToPairsTree fsm =
    fsm |> fsmToPairs |> HTree.fromList ( -1, "ROOT" ) Tuple.first


stringOfBlockTree : Tree Block -> String
stringOfBlockTree tree =
    tree
        |> Tree.flatten
        |> List.map stringOfBlock
        |> String.join "\n"


stringOfBlock : Block -> String
stringOfBlock (Block bt lev_ content_) =
    String.repeat (2 * lev_) " "
        ++ BlockType.stringOfBlockType bt
        ++ " ("
        ++ String.fromInt lev_
        ++ ") "
        ++ "\n"
        ++ indent lev_ content_


indent : Int -> String -> String
indent k str =
    str
        |> String.split "\n"
        |> List.map (\s -> String.repeat (2 * k) " " ++ s)
        |> String.join "\n"


stringOfMMBlockTree : Tree MMBlock -> String
stringOfMMBlockTree tree =
    tree
        |> Tree.flatten
        |> List.map stringOfMMBlock
        |> String.join "\n"


stringOfMMBlock : MMBlock -> String
stringOfMMBlock (MMBlock bt lev_ content_) =
    String.repeat (2 * lev_) " "
        ++ BlockType.stringOfBlockType bt
        ++ " ("
        ++ String.fromInt lev_
        ++ ") "
        ++ indent lev_ (stringOfBlockContent content_)


stringOfBlockContent : BlockContent -> String
stringOfBlockContent blockContent =
    case blockContent of
        M mmInline ->
            stringOfMMInline mmInline

        T str ->
            str


stringOfMMInline : MMInline -> String
stringOfMMInline mmInline =
    MMInline.string mmInline
