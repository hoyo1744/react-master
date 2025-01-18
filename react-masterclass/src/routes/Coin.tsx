import {useEffect, useState} from "react";
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

// 개발자 도구에서 전역 변수 저장 -> Object.keys(변수명).join() 하면 키값만 가져와진다. 미쳤군?
// Object.values(temp1).map( v=> typeof v) 이렇게 하면 데이터 타입만 가져온다.미쳤다.
interface InfoData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    first_data_at: string;
    last_data_at: string;
}

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}


function Coin() {
    const [loading, setLoading] = useState(true);
    const {coinId} = useParams<RouteParams>();
    const {state} = useLocation<RouteState>();
    const [info, setInfo] = useState<InfoData>();
    const [priceInfo, setPriceInfo] = useState<PriceData>();


    // ()() 으로 써주면 즉시 실행된다. 왜일까?
    useEffect(() => {
        (async() => {
            const infoData =
                await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`))
                    .json();
            const priceData = await(
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`))
                .json();

            console.log(infoData);
            console.log(priceData);

            setInfo(infoData);
            setPriceInfo(priceData);

        })();

    }, []);



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