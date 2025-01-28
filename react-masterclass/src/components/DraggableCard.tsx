import {Draggable} from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";


const Card = styled.div<{isDragging:boolean}>`
    background-color: ${(props) => props.isDragging ? "#74b9ff" : props.theme.cardColor};
    padding: 10px 10px;
    border-radius: 5px;
    margin-bottom: 5px;
    box-shadow: ${props => props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05) " : "none"};
`;



interface IDragabbleCardProps {
    toDo: string;
    index: number;
}


function DraggableCard({toDo, index} : IDragabbleCardProps) {
    console.log(toDo, "has bean rendered");

    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {/*기본적으로 요소가 드래그 되기를 원한다면 draggableProps를 넣어주면 된다.*/}
            {/*dragHandle은 드래그의 트리거를 말한다. 즉, 어느위치에서든 드래그가 되기를 원한다면 이걸 써야함.*/}

            {(magic, snapshot) => <Card
                isDragging={snapshot.isDragging}


                ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps} >
                {/*dragHandleProps 있는 부분만 드래그가 가능함.*/}
                {toDo}
            </Card>}
        </Draggable>
    )
}

// react에게 props이 변하지 않았다면 DraggableCard를 다시 렌더링하지 말라고 하는것.
export default React.memo(DraggableCard);