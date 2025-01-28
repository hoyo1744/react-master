import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import React from "react";

function App() {
    const onDragEnd = () => {
    };

    return (
        // DragDropContext는 드래그앤드롭을 수행할 곳에 적어줘야함. onDragEnd는 드래그앤듣롭이 끝나고 호출될 함수를 명시하는것,
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Droppable droppableId="one">
                    {
                        (magic) =>
                            <ul ref={magic.innerRef} {...magic.droppableProps}>
                                <Draggable draggableId="first" index={0}>
                                    {/*기본적으로 요소가 드래그 되기를 원한다면 draggableProps를 넣어주면 된다.*/}
                                    {/*dragHandle은 드래그의 트리거를 말한다. 즉, 어느위치에서든 드래그가 되기를 원한다면 이걸 써야함.*/}

                                    {(magic) => <li
                                        ref={magic.innerRef} {...magic.draggableProps} >
                                        {/*dragHandleProps 있는 부분만 드래그가 가능함.*/}
                                        <span {...magic.dragHandleProps}>😅</span>
                                        One
                                    </li>}
                                </Draggable>
                                <Draggable draggableId="second" index={1}>
                                    {(magic) => <li
                                        ref={magic.innerRef} {...magic.draggableProps} >
                                        <span {...magic.dragHandleProps}>😅</span>
                                        Two
                                    </li>}
                                </Draggable>
                            </ul>
                    }
                </Droppable>
            </div>
        </DragDropContext>
    )
}


export default App;
