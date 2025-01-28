import {Droppable} from "react-beautiful-dnd";
import DragabbleCard from "./DraggableCard";
import React from "react";
import styled from "styled-components";

//-- style


const Wrapper = styled.div`
    background-color: ${(props) => props.theme.boardColor};
    padding: 20px 10px;
    padding-top: 30px;
    border-radius: 5px;
    min-height: 200px;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

//-- interface

interface IBoardProps {
    toDos: string[];
    boardId: string;
}

function Board({toDos, boardId}: IBoardProps){
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {
                    (magic) =>
                        <div ref={magic.innerRef} {...magic.droppableProps}>
                            {toDos.map((toDo, index) => <DragabbleCard key={toDo} toDo={toDo} index={index}/>)}
                            {magic.placeholder}
                        </div>
                }
            </Droppable>
        </Wrapper>
    );
}

export default Board;