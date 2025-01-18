import React, {useEffect, useState} from "react";
import {Switch, Route, useLocation, useParams, Link, useRouteMatch} from "react-router-dom";
import styled from "styled-components";
import Price from "./Price";
import Chart from "./Chart";
import {useQuery} from "react-query";
import {fetchCoinInfo, fetchCoinTickers} from "../api";


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

const Overview = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
`;

const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    aligh-items: center;
    
    span:first-child{
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 5px;
    }
`;

const Description = styled.p`
    margin: 20px 0px;
    
`;

const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean}>`
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 7px 0px;
    border-radius: 10px;
    color:${props => props.isActive ? props.theme.accentColor : props.theme.textColor};
    a {
        display: block;
    }
    
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
    // const [loading, setLoading] = useState(true);
    const {coinId} = useParams<RouteParams>();
    const {state} = useLocation<RouteState>();
    // const [info, setInfo] = useState<InfoData>();
    // const [priceInfo, setPriceInfo] = useState<PriceData>();

    const {isLoading: infoLoading, data:infoData} = useQuery<InfoData>(["info", coinId], () => fetchCoinInfo(coinId));
    const {isLoading: tickersLoading, data:tickersData} = useQuery<PriceData>(["tickers", coinId], () => fetchCoinTickers(coinId));

    // 만약 우리가 /:coinId/price라는 url에 있다면 priceMatch가 알려준다.
    const priceMatch =useRouteMatch("/:coinId/price");
    const chartMatch =useRouteMatch("/:coinId/chart");
    // console.log(priceMatch);
    // console.log(chartMatch);


    // ()() 으로 써주면 즉시 실행된다. 왜일까?
    // useEffect(() => {
    //     (async() => {
    //         const infoData =
    //             await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`))
    //                 .json();
    //         const priceData = await(
    //             await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`))
    //             .json();
    //
    //         console.log(infoData);
    //         console.log(priceData);
    //
    //         setInfo(infoData);
    //         setPriceInfo(priceData);
    //         setLoading(false);
    //
    //     })();
    //
    // }, [coinId]);



    const loading = infoLoading || tickersLoading;
    return (
        <Container>
            <Header>
                {/*state값은 외부에서 전달한 값이기 때문에 바로 Coin 화면으로 접속하면 에러가 발생한다.
                그래서 state? 라는 표현으로 삼항연산자를 표현한다.*/}
                {/*<Title>{state?.name || "Loading"}</Title>*/}
                <Title>{state?.name ? state.name : loading ? "Loading..." : infoData?.name}</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> :
            <>
                <Overview>
                    <OverviewItem>
                        <span>Rank:</span>
                        <span>{infoData?.rank}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>Symbol:</span>
                        <span>${infoData?.symbol}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>Open Source:</span>
                        <span>{infoData?.open_source}</span>
                    </OverviewItem>
                </Overview>
                <Description>{infoData?.description}</Description>
                <Overview>
                    <OverviewItem>
                        <span>Total Suply:</span>
                        <span>{tickersData?.total_supply}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>Max supply:</span>
                        {/*priceInfo?.max_supply에서 ?는 priceInfo가 존재할 경우에만 max_supply를 찾는다는 의미가됨. 만약에 데이터가 없다? 그러면 undefined가 되겠지*/}
                        <span>{tickersData?.max_supply}</span>
                    </OverviewItem>
                </Overview>
                {/*anchor는 페이지를 완전 새로고침하기 때문에 사용하지 않고, Link를 쓴다.*/}



                <Tabs>
                    <Tab isActive={chartMatch !== null}>
                        <Link to={`/${coinId}/chart`}>
                            Chart
                        </Link>
                    </Tab>
                    <Tab isActive={priceMatch !== null}>
                        <Link to={`/${coinId}/price`}>
                            Price
                        </Link>
                    </Tab>

                </Tabs>

            {/*    nested router 사용 코드*/}
                <Switch>
                    {/*아래의 2개 코드 모두 잘 동작함.*/}
                    {/*<Route path={`/${coinId}/price`}>*/}
                    <Route path={`/:coinId/price`}>
                        <Price/>
                    </Route>
                    <Route path={`/:coinId/chart`}>
                        <Chart/>
                    </Route>
                </Switch>
            </>
            }
        </Container>
    );
}

export default Coin;