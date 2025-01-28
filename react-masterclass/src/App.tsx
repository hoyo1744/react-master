import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd"
import React from "react";
import styled from "styled-components";
import {toDoState} from "./atoms";
import {useRecoilState} from "recoil";
import DragabbleCard from "./components/DraggableCard";


const Board = styled.div`
    background-color: ${(props) => props.theme.boardColor};
    padding: 20px 10px;
    padding-top: 30px;
    border-radius: 5px;
    min-height: 200px;
`;

const Boards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    
`;


const Wrapper = styled.div`
    display: flex;
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;




function App() {

    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = ({draggableId, destination, source}:DropResult) => {
        if(!destination) return;
        setToDos((oldToDos) => {
            const copyToDos = [...oldToDos];

            copyToDos.splice(source.index, 1);
            copyToDos.splice(destination?.index, 0, draggableId);

            return copyToDos;
        })
    };

    return (
        // DragDropContext는 드래그앤드롭을 수행할 곳에 적어줘야함. onDragEnd는 드래그앤듣롭이 끝나고 호출될 함수를 명시하는것,
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    <Droppable droppableId="one">
                        {
                            (magic) =>
                                <Board ref={magic.innerRef} {...magic.droppableProps}>
                                    {toDos.map((toDo, index) => <DragabbleCard key={toDo} toDo={toDo} index={index}/>)}
                                    {magic.placeholder}
                                </Board>
                        }
                    </Droppable>
                </Boards>
            </Wrapper>
        </DragDropContext>
    )
}


export default App;
