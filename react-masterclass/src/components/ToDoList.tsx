import React from "react";

import {useRecoilState, useRecoilValue} from "recoil";
import {categoryState, toDoSelector, toDosState} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList() {

    // useRecoilState의 첫번째 인자는 값, 두번째인자는 변경 함수를 제공함.
    // const toDos = useRecoilValue(toDosState);
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);

    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value);
    };

    console.log(category);

    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <select value={category} onInput={onInput}>
                <option value="TO_DO">To Do</option>
                <option value="DOING">Doing</option>
                <option value="DONE">Done</option>
            </select>
            <CreateToDo/>
            {toDos?.map(toDo =>
                <ToDo key={toDo.id} {...toDo} />
            )}
        </div>
    )
}


export default ToDoList;