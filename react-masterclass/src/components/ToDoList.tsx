import React from "react";

import {useRecoilValue} from "recoil";
import {toDoSelector, toDosState} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList() {

    // useRecoilState의 첫번째 인자는 값, 두번째인자는 변경 함수를 제공함.
    // const toDos = useRecoilValue(toDosState);
    const [toDo, doing, done] = useRecoilValue(toDoSelector);

    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <CreateToDo/>
            <h2>To Do</h2>
            <ul>
                {toDo.map(toDo =>
                    // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
                    // 동일코드(Props가 동일해서 동작함)
                    <ToDo key={toDo.id} {...toDo} />
                )}
            </ul>
            <hr/>
            <h2>Doing</h2>
            <ul>
                {doing.map(toDo =>
                    // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
                    // 동일코드(Props가 동일해서 동작함)
                    <ToDo key={toDo.id} {...toDo} />
                )}
            </ul>
            <hr/>
            <h2>Done</h2>
            <ul>
                {done.map(toDo =>
                    // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
                    // 동일코드(Props가 동일해서 동작함)
                    <ToDo key={toDo.id} {...toDo} />
                )}
            </ul>
            <hr/>

        </div>
    )
}


export default ToDoList;