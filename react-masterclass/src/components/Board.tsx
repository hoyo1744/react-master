import {Droppable} from "react-beautiful-dnd";
import DragabbleCard from "./DraggableCard";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.boardColor};
    padding: 20px 10px;
    padding-top: 30px;
    border-radius: 5px;
    min-height: 200px;
`;

interface IBoardProps {
    toDos: string[];
    boardId: string;
}

function Board({toDos, boardId}: IBoardProps){
    return (
        <Droppable droppableId={boardId}>
            {
                (magic) =>
                    <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
                        {toDos.map((toDo, index) => <DragabbleCard key={toDo} toDo={toDo} index={index}/>)}
                        {magic.placeholder}
                    </Wrapper>
            }
        </Droppable>

    );
}

export default Board;