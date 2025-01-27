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

interface IForm {
    email: string,
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    password1: string
    // 필수가 아니라서 ?로 처리함.
    extraError?: string;
}


function ToDoList() {

    // register가 onChange를 대신해준다.
    // watch는 form의 입력값들의 변환를 관찬할 수 있게 해준다.
    // handleSumit이 validation을 담당하게 된다.
    // handleSumit은 2개의 인자를 받음. 첫번째는 데이터가 올바른 경우 실행되는 함수
    // 두번째는 에러가 발생했을댸 실행되는 함수
    // 즉, 첫번째 함수는 모든 validation을 지나고 나서야 호출됨.
    // formState는 에러 정보를 담고 있다.
    // setError는 특정한 (커스텀) 에러를 발생하도록 해준다.
    const {register, watch, handleSubmit, formState: {errors}, setError} = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        }
    });

    const onValid = (data: IForm) => {
        console.log(data);
        if (data.password! !== data.password1) {
            setError("password1", {message: "Password are not the same"}, {shouldFocus: true});
        }
        setError("extraError", {message: "Server offline."});
    }


    console.log(errors);

    return <div>
        <form style={{display: "flex", flexDirection: "column"}}
              onSubmit={handleSubmit(onValid)}>
            {/*아래처럼함으로써 register함수가 반환하는 객체 가져다가 input에 props로 전달해준다.*/}
            <input {...register("email", {
                required: "Email is required.", pattern: {
                    value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                    message: "Only naver.com emails allowed."
                }
            })}
                   placeholder="Email"/>
            <span>
                {errors?.email?.message}
            </span>
            {/*validation 옵션은 현재 입력된 값이 인자로 들어온다.*/}
            <input {...register("firstName", {
                required: "firstName  is required.",
                // 여러개의 validation을 넣을수도있음 noNico는 사용자가 정의한 validation 이름임. 임의로 지정가능
                validate: {
                    noNico : (value) => value.includes("nico") ? "no nicos allowed" : true,
                    noNick : (value) => value.includes("nick") ? "no nicks allowed" : true

                }
            })} placeholder="First Name"/>
            <span>
                {errors?.firstName?.message}
            </span>
            <input {...register("lastName", {required: "lastName  is required."})} placeholder="Last Name"/>
            <span>
                {errors?.lastName?.message}
            </span>
            <input {...register("userName", {required: "userName is required.", minLength: 10})}
                   placeholder="Username"/>
            <span>
                {errors?.userName?.message}
            </span>
            <input {...register("password", {required: "password is required.", minLength: 5})} placeholder="Password"/>
            <span>
                {errors?.password?.message}
            </span>
            <input {...register("password1", {
                required: "Password is required", minLength: {
                    value: 5,
                    message: "Your password is too short"
                }
            })} placeholder="Password1"/>
            <span>
                {errors?.password1?.message}
            </span>
            <button>Add</button>
            <span>{errors?.extraError?.message}</span>
        </form>

    </div>


}

export default ToDoList;