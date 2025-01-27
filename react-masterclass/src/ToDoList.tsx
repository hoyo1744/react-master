import {useState} from "react";

import {useForm} from "react-hook-form";

// function TodoList() {



    // react-hook-form을 사용하면 아래의 코드가 모두 1줄의 코드로 바뀐다.
    // const [toDo, setToDo] = useState("");
    //
    // const [toDoError, setTodoError] = useState("");
    //
    //
    //
    // // event.currentTarget.value 와 같다. 아래와 같이 사용하는 이유는 value 말고 다른 값도 추출할 경우에 유용하다.
    // const onChange=  (event:React.FormEvent<HTMLInputElement>) => {
    //     const {
    //         currentTarget: {value},
    //     } = event;
    //     setTodoError("")
    //     setToDo(value);
    // };
    //
    //
    // const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     console.log(toDo);
    //
    //     if (toDo.length < 10) {
    //         return setTodoError("To do should be longer");
    //     }
    //
    //     console.log("submit");
    // };
    //
    //
    //
    // return <div>
    //     <form onSubmit={onSubmit}>
    //         <input onChange={onChange} value={toDo} placeholder="Write a todo "/>
    //         <button>Add</button>
    //         {toDoError !==  "" ? toDoError : null}
    //     </form>
    //
    // </div>

function ToDoList(){

    // register가 onChange를 대신해준다.
    // watch는 form의 입력값들의 변환를 관찬할 수 있게 해준다.
    const {register, watch} = useForm();

    // console.log(register("toDo"))
    console.log(watch());

    return <div>
        <form>
            {/*아래처럼함으로써 register함수가 반환하는 객체 가져다가 input에 props로 전달해준다.*/}
            <input {...register("email")} placeholder="Email"/>
            <input {...register("fistName")} placeholder="First Name"/>
            <input {...register("lastName")} placeholder="Last Name"/>
            <input {...register("username")} placeholder="Username"/>
            <input {...register("password")} placeholder="Password"/>
            <input {...register("password1")} placeholder="Password1"/>
            <button>Add</button>
        </form>

    </div>


}

export default ToDoList;