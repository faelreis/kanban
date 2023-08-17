'use client'
import { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

type Props = {
    id: TypedColumn,
    todos: Todo[],
    index: number,
}

export function Column({id, todos, index}: Props){
    const [titleName, setTitleName] = useState('TO DO')
    return(
        <div className='flex flex-col w-full'>
            <Draggable draggableId={id} index={index}>
                {(provided) => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {/* {render droppable todos in the column} */}
                        <Droppable droppableId={index.toString()} type='card'>
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={`pb-2 p2 rounded-2xl shadow-sm ${
                                        snapshot.isDraggingOver ? 'bg-purple' : 'bg-white/50'
                                    }`}
                                >
                                    <h2>{id}</h2>
                                </div>
                            )}
                        </Droppable>
                    </div>
                )}
            </Draggable>
        </div>

    )
}