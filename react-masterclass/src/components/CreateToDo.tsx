import {useForm} from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {categoryState, toDosState} from "../atoms";


interface IForm {
    toDo: string,

}

function CreateToDo(){

    const {register, handleSubmit, setValue} = useForm<IForm>();

    const category = useRecoilValue(categoryState);

    const setToDos = useSetRecoilState(toDosState);

    const handleValid = ({toDo}: IForm) => {
        console.log('add to do', toDo);

        // [{text:toDo, id:Date.now(), category: "TO_DO" }, ...oldToDos] 이 코드는 배열에 push하는 코드를 의미함.
        setToDos(oldToDos => [{text: toDo, id: Date.now(), category: category}, ...oldToDos])
        // reset을 의미함.
        setValue("toDo", "");
    }

    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input  {...register("toDo", {
                required: "Please write a To Do",
            })} placeholder="Write a todo "/>
            <button>Add</button>
        </form>
    )


}

export default CreateToDo;