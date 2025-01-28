import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import React from "react";

function App() {
    const onDragEnd = () => {};

    return (
        // DragDropContext는 드래그앤드롭을 수행할 곳에 적어줘야함. onDragEnd는 드래그앤듣롭이 끝나고 호출될 함수를 명시하는것,
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Droppable droppableId="one">
                    {
                        () => <ul>
                            <Draggable draggableId="first" index={0}>
                                {() => <li>One</li>}
                            </Draggable>
                            <Draggable draggableId="second" index={1}>
                                {() => <li>Two</li>}
                            </Draggable>
                        </ul>
                    }
                </Droppable>
            </div>
        </DragDropContext>
    )
}


export default App;
