import React from "react";

import {useRecoilValue} from "recoil";
import {toDosState} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList() {

    // useRecoilState의 첫번째 인자는 값, 두번째인자는 변경 함수를 제공함.
    const toDos = useRecoilValue(toDosState);


    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <CreateToDo />
            <ul>
                {toDos.map(toDo =>
                    // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
                    // 동일코드(Props가 동일해서 동작함)
                    <ToDo key={toDo.id} {...toDo} />
                )}
            </ul>
        </div>
    )
}


export default ToDoList;