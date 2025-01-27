import {useState} from "react";

function TodoList() {

    const [toDo, setToDo] = useState("");

    // event.currentTarget.value 와 같다. 아래와 같이 사용하는 이유는 value 말고 다른 값도 추출할 경우에 유용하다.
    const onChange=  (event:React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setToDo(value);
    };


    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(toDo);
    };
    return <div>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={toDo} placeholder="Write a todo "/>
            <button>Add</button>
        </form>

    </div>
}

export default TodoList;