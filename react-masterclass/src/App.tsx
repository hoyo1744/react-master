import {DragDropContext, DropResult} from "react-beautiful-dnd"
import React from "react";
import styled from "styled-components";
import {toDoState} from "./atoms";
import {useRecoilState} from "recoil";
import Board from "./components/Board";


const Boards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px

`;


const Wrapper = styled.div`
    display: flex;
    max-width: 680px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;


function App() {

    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = (info: DropResult) => {
        console.log(info);

        const {destination, draggableId, source} = info;
        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId) {
            // same board movement.

            setToDos((allBoards) => {

                const boardCopy = [...allBoards[source.droppableId]];

                boardCopy.splice(source.index, 1);
                boardCopy.splice(destination.index, 0, draggableId);
                return {
                    ...allBoards,
                    [source.droppableId]: boardCopy
                };
            })
        }

        if (destination.droppableId !== source.droppableId) {
            // cross board movement
            setToDos((allBoards) => {

                const sourceBoardCopy = [...allBoards[source.droppableId]];
                const destinationBoardCopy = [...allBoards[destination.droppableId]];

                sourceBoardCopy.splice(source.index, 1);
                destinationBoardCopy.splice(destination.index, 0, draggableId);

                return {
                    ...allBoards,
                    [source.droppableId]: sourceBoardCopy,
                    [destination.droppableId]: destinationBoardCopy
                };
            })
        }
    };

    return (
        // DragDropContext는 드래그앤드롭을 수행할 곳에 적어줘야함. onDragEnd는 드래그앤듣롭이 끝나고 호출될 함수를 명시하는것,
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    {Object.keys(toDos).map((boardId) => (
                        <Board boardId={boardId} key={boardId} toDos={toDos[boardId]}/>))}

                </Boards>
            </Wrapper>
        </DragDropContext>
    )
}


export default App;
