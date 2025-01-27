import React from "react";
import {IToDo, toDosState} from "../atoms";
import {useSetRecoilState} from "recoil";

function ToDo({text, category, id}:IToDo) {

    const setToDos = useSetRecoilState((toDosState));

    // const onClick = (newCategory:IToDo["category"]) => {
    //     console.log("i wanna to ", newCategory);
    // }
    // ...front의 의미는 front안에 있는 모든 원소를 풀어놓는다는 의미이다.

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name}
        } = event;

        // 새로운걸 만들어주는이유는 state를 변경시켜 리렌더링 시키기 위함이다. 그냥 바꿔주면 리렌더링이 일어나지 않음.
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex( (toDo) => toDo.id === id);
            console.log(targetIndex);
            const oldToDo = oldToDos[targetIndex];
            // as any를 넣어주면 타입체크하지 말라고 선언하는것.
            const newToDo = {text, id, category:name as any};
            console.log(oldToDo, newToDo);
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
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