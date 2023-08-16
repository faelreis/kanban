'use client'
import { Card } from "./components/Card";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useEffect } from 'react'
import { useBoardStore } from "../../../../../store/BoardStore";

export function ListCard(){

    const [board, getBoard] = useBoardStore((state) => [
        state.board,
        state.getBoard
    ])

    useEffect(()=>{
        getBoard();
    }, [getBoard]);

    console.log(board)

    return(
        <h1>Hello</h1>
        // <DragDropContext>
        //     <Droppable droppableId="board" direction="horizontal" type="column">
        //         {(provided) => (<div>{}</div>)}
        //     </Droppable>
        // </DragDropContext>
    )
}

//<Card cardName={'Criar design'} cardDescription={'Com Figma'}/>