import {Droppable} from "react-beautiful-dnd";
import DragabbleCard from "./DraggableCard";
import React from "react";
import styled from "styled-components";

//-- style


const Wrapper = styled.div`
    background-color: ${(props) => props.theme.boardColor};
    padding-top: 10px;
    border-radius: 5px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 18px;
`;

interface IAreaProps {
    isDraggableOver: boolean;
    isDraggingFromThisWith: boolean;
}

const Area = styled.div<IAreaProps>`
    background-color: ${props => props.isDraggableOver ? "#dfe6e9" : props.isDraggingFromThisWith ? "#b2bec3":"transparent"};
    flex-grow: 1;
    transition: background-color .3s ease-in-out;
    padding: 20px;
`;

//-- interface

interface IBoardProps {
    toDos: string[];
    boardId: string;
}

function Board({toDos, boardId}: IBoardProps) {
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {
                    (magic, info) =>
                        <Area isDraggableOver={info.isDraggingOver} isDraggingFromThisWith={Boolean(info.draggingFromThisWith)} ref={magic.innerRef} {...magic.droppableProps}>
                            {toDos.map((toDo, index) => <DragabbleCard key={toDo} toDo={toDo} index={index}/>)}
                            {magic.placeholder}
                        </Area>
                }
            </Droppable>
        </Wrapper>
    );
}

export default Board;