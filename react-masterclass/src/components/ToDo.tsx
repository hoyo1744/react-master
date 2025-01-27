import React from "react";
import {IToDo, toDosState} from "../atoms";
import {useSetRecoilState} from "recoil";

function ToDo({text, category, id}:IToDo) {

    const setToDos = useSetRecoilState((toDosState));

    // const onClick = (newCategory:IToDo["category"]) => {
    //     console.log("i wanna to ", newCategory);
    // }

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name}
        } = event;

        // 새로운걸 만들어주는이유는 state를 변경시켜 리렌더링 시키기 위함이다. 그냥 바꿔주면 리렌더링이 일어나지 않음.
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex( (toDo) => toDo.id === id);
            console.log(targetIndex);
            const oldToDo = oldToDos[targetIndex];
            const newToDo = {text, id, category:name};
            console.log(oldToDo, newToDo);
            return oldToDos;
        })
    }

    return (
        <li>
            {text}
            {/*&& 이게 무슨 문법이지? -> 단축연산자*/}
            {/*onClick에서 인자를 넘기기 위한 방법은 아래와 같음.*/}
            {/*{category !== "DOING" && <button name="DOING" onClick={() => onClick("DOING")}>DOING</button>}*/}
            {category !== "DOING" && <button name="DOING" onClick={onClick}>DOING</button>}
            {category !== "TO_DO" && <button name="TO_DO" onClick={onClick}>To Do</button>}
            {category !== "DONE" && <button name="DONE" onClick={onClick}>DONE</button>}
        </li>
    )
}

export default ToDo;