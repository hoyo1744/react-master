import {Droppable} from "react-beautiful-dnd";
import DragabbleCard from "./DraggableCard";
import React, {useRef} from "react";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {ITodo} from "../atoms";

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

const Form = styled.form`
  width: 100%;  
    input {
        width: 100%
    }
`;

//-- interface

interface IBoardProps {
    toDos: ITodo[];
    boardId: string;
}

interface IForm {
    toDo: string;
}


function Board({toDos, boardId}: IBoardProps) {


    const {register, setValue, handleSubmit } = useForm<IForm>();

    const onValid = ({toDo}:IForm) => {

        setValue("toDo", "");
    }


    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input {...register("toDo", {required: true})} type="text" placeholder={`Add task on ${boardId}`}/>
            </Form>
            <Droppable droppableId={boardId}>
                {
                    (magic, info) =>
                        <Area isDraggableOver={info.isDraggingOver} isDraggingFromThisWith={Boolean(info.draggingFromThisWith)} ref={magic.innerRef} {...magic.droppableProps}>
                            {toDos.map((toDo, index) => <DragabbleCard key={toDo.id} toDoId={toDo.id} toDoText={toDo.text} index={index}/>)}
                            {magic.placeholder}
                        </Area>
                }
            </Droppable>
        </Wrapper>
    );
}

export default Board;