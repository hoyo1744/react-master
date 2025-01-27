import {atom, selector} from "recoil";

// type categories = "DONE" | "DOING" | "TO_DO"

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}

export interface IToDo {
    text: string;
    id: number,
    category: Categories;

}

export const toDosState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

export const categoryState = atom<Categories>({
    key:"category",
    default: Categories.TO_DO,
});

// selector의 요점은 atom 을 가져다가(atom은 단순한 값 또는 배열임) output을 변형해서 그 결과를 반환하는것.
export const toDoSelector = selector({
    key: "toDoSelector",
    // get 함수를 이용하면 selector내부로 atom을 가져올 수 있다. get(toDosState)처럼
    get: ({get}) => {
        const toDos = get(toDosState)
        const category = get(categoryState)
        return toDos.filter(toDo => toDo.category === category);

    }
})