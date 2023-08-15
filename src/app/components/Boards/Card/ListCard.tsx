import { Card } from "./components/Card";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export function ListCard(){
    return(
        <DragDropContext>
            <Droppable droppableId="board" direction="horizontal" type="column">
                {(provided) => ()}
            </Droppable>
        </DragDropContext>
    )
}

//<Card cardName={'Criar design'} cardDescription={'Com Figma'}/>