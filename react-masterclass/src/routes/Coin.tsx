import {useParams} from "react-router-dom";

// const {coinId} = useParams<{coinId:string}>(); 처럼 params으로 넘어온값이 어떤타입인지 타입스크립트에게 알려줘야함. 또는 인터페이스를 사용해도됨.
// const {coinId} = useParams<Params>(); 같은 방법임.
// 이게 무슨뜻이냐면. 타입스크립트에게 useParams가 coinId를 포함한 오브젝트를 반환할거라고 알려주는것.

interface RouteParams {
    coinId: string;
}

function Coin() {
    const {coinId} = useParams<RouteParams>();

    return <h1>Coin : {coinId}</h1>
}

export default Coin;