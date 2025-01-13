
import {useState} from "react";
import React from 'react';
import styled from "styled-components";

// 3-5
// event에 타입을 지정하는 방법, 지정하지 않으면 any 타입임. 어떤타입이든 올 수 있음
//  event: React.FormEvent 이렇게 이벤트 타입을 지정할 수 있다,. 하지만 매우 어렵다. 왜냐하면 타입을 찾아봐야하니까. 정답은 구글링해라.
//  HtmlInputElement에 의해서 실행된 이벤트라는것을 지정해준다.


// ReactJs TypeScript 사람람들은 event.target.보다 event.currentTarget을 사용함. 결국같음.
// > const value = event.currentTarget.value
// > const {value} = event.currentTarget
// > const {currentTarget:{value}} = event

const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
`;
const H1 = styled.h1`
    color: ${props => props.theme.textColor};
`;


function App() {

    const [value, setValue] = useState("")

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setValue(value);
    };

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("hello", value);
    };

    return (
        <Container>
            <H1>Hello</H1>
        </Container>
    )

}

export default App;
