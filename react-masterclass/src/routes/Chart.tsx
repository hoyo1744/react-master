import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";


// 2차 방법: props로 전달하기
interface ChartProps {
    coinId: string;
}

function Chart({coinId}:ChartProps) {

    // 1차 방법: url에서 정보가져오기
    // const params = useParams();
    // console.log(params);

    const {isLoading, data} = useQuery(["ohlcv", coinId], () => fetchCoinHistory(coinId));

    return <h1>Chart</h1>
}

export default Chart;