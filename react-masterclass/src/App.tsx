import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd"
import React from "react";
import styled from "styled-components";
import {toDoState} from "./atoms";
import {useRecoilState} from "recoil";


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

const Card = styled.div`
    background-color: ${(props) => props.theme.cardColor};
    padding: 10px 10px;
    border-radius: 5px;
    margin-bottom: 5px;
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
    const onDragEnd = ({destination, source}:DropResult) => {
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
                                    {toDos.map((toDo, index) => <Draggable key={index} draggableId={toDo} index={index}>
                                        {/*기본적으로 요소가 드래그 되기를 원한다면 draggableProps를 넣어주면 된다.*/}
                                        {/*dragHandle은 드래그의 트리거를 말한다. 즉, 어느위치에서든 드래그가 되기를 원한다면 이걸 써야함.*/}

                                        {(magic) => <Card
                                            ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps} >
                                            {/*dragHandleProps 있는 부분만 드래그가 가능함.*/}
                                            {toDo}
                                        </Card>}
                                    </Draggable>)}
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
