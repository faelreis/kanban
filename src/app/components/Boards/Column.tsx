'use client'
import { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Card } from "./Card/components/Card";

type Props = {
    id: TypedColumn,
    todos: Todo[],
    index: number,
}

const idToColumnText: {
    [key in TypedColumn]: string;
} = {
    'todo': 'Para fazer',
    'inprogress': 'Fazendo',
    'done': 'Finalizado',
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
                                    className={`pb-2 p-2 rounded shadow-sm ${
                                        snapshot.isDraggingOver ? 'bg-purple' : 'bg-white/50'
                                    }`}
                                >
                                    <h2 className='flex justify-between text-xl'>{idToColumnText[id]}
                                    <span className='opacity-50'>{todos.length}</span>
                                    </h2>
                                    <div className='space-y-2'>
                                        {todos.map(todo, index) =>{
                                            <Draggable
                                                key={todo.$id}
                                                draggableId={todo.$id}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <TodoCard
                                                        todo={todo}
                                                        index={index}
                                                        id={id}
                                                        innerRef={provided.innerRef}
                                                        draggableProps = {provided.draggableProps}
                                                        dragHandleProps = {provided.dragHandleProps}
                                                    />
                                                )}

                                            </Draggable>
                                        }}
                                        {provided.placeholder}
                                        <div className='flex items-end justify-end p-2'>
                                            <button className='text-green-500 hover:text-green-600'>
                                                <PlusCircleIcon 
                                                    className='h-10 w-10 '
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    </div>
                )}
            </Draggable>
        </div>

    )
}