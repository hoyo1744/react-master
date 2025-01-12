import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${ (props) => props.bgColor};
    border-radius: 100px;
`;

// 이렇게 하면 bgColor의 타입이 뭔지 몰라서 빨간색 표시가난다.
// 그래서 interface라는걸해줘야함.
// interface는 object shape를 typeScripty에게 설명해주는 TypeScript의 개념 그전에는 a:number 이런식으로 타입을 지정함.

interface CircleProps {
    bgColor: string;
}

function Circle({bgColor}: CircleProps){
    return <Container bgColor={bgColor}/>;
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
