import styled from 'styled-components';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {fetchCoins} from "../api";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ul`

`;

const Coin = styled.li`
    background-color: white;
    color: ${props => props.theme.bgColor};
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 10px;

    a {
        display: flex;
        align-items: center;
        padding: 20px;
        transition: color 0.2s ease-in;
    }

    &:hover {
        a {
            color: ${(props) => props.theme.accentColor}
        }
    }


`;


const Title = styled.h1`
    font-size: 48px;
    text-align: center;
    color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

interface ICoin {
    id: string
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}




//  coinInterface[]는 coins가 어떤타입으로 이루어졌는지 타입스크립트한테 말해주는것
function Coins() {
    // useQuery의 첫번째인자는 고유한 식별자, 두번째인자가 api 함수
    // useQuery는 리턴시 isLoading boolean 데이터를 반환함.
    // 두번째 데이터에 api 결과를 저장해줌.
    const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins);
    // react-query를 사용하면 아래의 코드가 압축됨.
    // const [coins, setCoins] = useState<ICoin[]>([]);
    //
    // const [loading, setLoading] = useState(true);
    //
    // useEffect(() => {
    //     (async() => {
    //         const response = await fetch("https://api.coinpaprika.com/v1/coins");
    //         const json = await response.json();
    //         // console.log(json);
    //
    //         setCoins(json.slice(0, 100))
    //         setLoading(false);
    //     })();
    // }, []);
    // console.log(coins);


    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {isLoading ? <Loader>"Loading..."</Loader> :
            <CoinsList>
                {data?.slice(0, 100).map((coin) => (
                    <Coin key={coin.id}>
                        {/*아래의 내용을 비하인더씬이라고 표현하나보다. state라는 변수에 넣어서 전달하고있군.*/}
                        {/*<Link to={`/${coin.id}`}>*/}
                        <Link to={{
                            pathname: `/${coin.id}`,
                            state: { name: coin.name}

                        }}>
                            <Img
                                src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                            />
                            {coin.name} &rarr;</Link>

                    </Coin>
                ))}
            </CoinsList>
            }
        </Container>
    );
}

export default Coins;