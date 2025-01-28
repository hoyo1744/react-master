import {atom} from "recoil";


export interface ITodo {
    id: number;
    text: string;


}

interface IToDoState {
    // key도 string으로 이루어진 배열이고, key에 해당하는 값도 string[]임
    // 즉, key도 여러개 올수 있고, 그 키에 해당되는값은 string[]임을 명시한것.
    [key: string]: ITodo[];
}


//  위 처럼 인터페이스를 주지 않으면 디폴트로 선언된 값 이외에는 들어올수없게됨.
export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To Do": [],
        "Doing": [],
        "Done": [],
    }
})