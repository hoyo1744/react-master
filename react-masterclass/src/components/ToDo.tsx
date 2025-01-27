import React from "react";
import {IToDo, toDosState} from "../atoms";
import {useSetRecoilState} from "recoil";

function ToDo({text, category, id}:IToDo) {

    const setToDos = useSetRecoilState((toDosState));

    const onClick = (newCategory:IToDo["category"]) => {
        console.log("i wanna to ", newCategory);
    }

    return (
        <li>
            {text}
            {/*&& 이게 무슨 문법이지? -> 단축연산자*/}
            {/*onClick에서 인자를 넘기기 위한 방법은 아래와 같음.*/}
            {category !== "DOING" && <button onClick={() => onClick("DOING")}>DOING</button>}
            {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>To Do</button>}
            {category !== "DONE" && <button onClick={() => onClick("DONE")}>DONE</button>}
        </li>
    )
}

export default ToDo;