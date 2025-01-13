import {DefaultTheme} from "styled-components";

// styled.d.ts에서 확장했기 때문에 자동완성으로 bgColor가 추가됨,
export const lightTheme:DefaultTheme = {
    bgColor: "white",
    textColor: "black",
    btnColor: "tomato",

}

export const darkTheme:DefaultTheme = {
    bgColor: "black",
    textColor: "white",
    btnColor: "teal",
}