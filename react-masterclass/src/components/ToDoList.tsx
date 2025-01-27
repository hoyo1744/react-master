import {useState} from "react";

import {useForm} from "react-hook-form";
import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";


const toDosState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

interface IToDo {
    text: string;
    id: number,
    category: "DONE" | "DOING" | "TO_DO";

}

interface iForm {
    toDo: string,

}

function ToDoList() {

    // useRecoilState의 첫번째 인자는 값, 두번째인자는 변경 함수를 제공함.
    const [toDos, setToDos] = useRecoilState(toDosState);

    // const value = useRecoilValue(toDosState);
    // const modFn = useSetRecoilState(toDosState);
    const {register, handleSubmit, setValue} = useForm<iForm>();

    const handleValid = ({toDo}: iForm) => {
        console.log('add to do', toDo);

        // [{text:toDo, id:Date.now(), category: "TO_DO" }, ...oldToDos] 이 코드는 배열에 push하는 코드를 의미함.
        setToDos(oldToDos => [{text: toDo, id: Date.now(), category: "TO_DO"}, ...oldToDos])
        // reset을 의미함.
        setValue("toDo", "");
    }

    console.log(toDos);

    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <form onSubmit={handleSubmit(handleValid)}>
                <input  {...register("toDo", {
                    required: "Please write a To Do",
                })} placeholder="Write a todo "/>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo =>
                    <li key={toDo.id}>
                        {toDo.text}
                    </li>
                )}
            </ul>
        </div>
    )
}


export default ToDoList;