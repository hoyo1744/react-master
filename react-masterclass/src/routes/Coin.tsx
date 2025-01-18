import {useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import styled from "styled-components";


// const {coinId} = useParams<{coinId:string}>(); 처럼 params으로 넘어온값이 어떤타입인지 타입스크립트에게 알려줘야함. 또는 인터페이스를 사용해도됨.
// const {coinId} = useParams<Params>(); 같은 방법임.
// 이게 무슨뜻이냐면. 타입스크립트에게 useParams가 coinId를 포함한 오브젝트를 반환할거라고 알려주는것.

//https://v5.reactrouter.com/web/api/Link/to-object에서 보면 <Link>를 통해서 string뿐만 아니라 Object도 전달할 수 있음.

const Title = styled.h1`
    font-size: 48px;
    text-align: center;
    color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

interface RouteParams {
    coinId: string;
}

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface RouteState {
    name: string;

}

function Coin() {
    const [loading, setLoading] = useState(true);
    const {coinId} = useParams<RouteParams>();
    const {state} = useLocation<RouteState>();
    console.log((state.name))



    return (
        <Container>
            <Header>
                {/*state값은 외부에서 전달한 값이기 때문에 바로 Coin 화면으로 접속하면 에러가 발생한다.
                그래서 state? 라는 표현으로 삼항연산자를 표현한다.*/}
                {/*<Title>{state?.name || "Loading"}</Title>*/}
                <Title>{state?.name || "Loading"}</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : null}
        </Container>
    );
}

export default Coin;