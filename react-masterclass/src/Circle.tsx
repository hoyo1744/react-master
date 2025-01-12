import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${ (props) => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${ (props) => props.borderColor};
`;

// 이렇게 하면 bgColor의 타입이 뭔지 몰라서 빨간색 표시가난다.
// 그래서 interface라는걸해줘야함.
// interface는 object shape를 typeScripty에게 설명해주는 TypeScript의 개념 그전에는 a:number 이런식으로 타입을 지정함.

// 3-3 Optional Props
// ?를 붙여주면 필수가아님.
// return <Container bgColor={bgColor} borderColor={borderColor ?? "white"}/>; ?? 이후는 디폴트값을 전달함. 삼항연산자와 같다.

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({bgColor, borderColor, text = "default text"}: CircleProps){
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>{text}</Container>;
}

export default Circle;


interface PlayerShape{
    name: string;
    age: number;
}

//  테스트 코드
const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`
sayHello({name:"nico", age:12})
// sayHello({name:"hi", age:12, hello:1})
