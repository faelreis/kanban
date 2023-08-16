"use client";
import { Card } from "./components/Card";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useEffect } from "react";
import { useBoardStore } from "../../../../../store/BoardStore";

export function ListCard() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  console.log(board);

  const handleOnDragEnd = (result: DropResult) => {

  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) =>
            <div
                className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
                {...provided.droppableProps}
                ref={provided.innerRef}
            >{
                Array.from(board.columns.entries()).map(([id, column], index) => (
                    <Column
                        key={id}
                        id={id}
                        todos={column.todos}
                        index={index}
                    />
                ))
            }</div>}
      </Droppable>
    </DragDropContext>
  );
}

//<Card cardName={'Criar design'} cardDescription={'Com Figma'}/>
