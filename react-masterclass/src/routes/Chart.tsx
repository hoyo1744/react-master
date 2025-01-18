import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from "react-apexcharts";
import { Helmet } from "react-helmet-async";
import React from "react";
import styled from "styled-components";

// 2차 방법: props로 전달하기
interface ChartProps {
    coinId: string;
}

interface IHistoricalData {
    time_open: string;
    time_close: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volumn: number;
    market_cap: number;

}

const Title = styled.h1`
    font-size: 48px;
    text-align: center;
    color: ${props => props.theme.accentColor};
`;


function Chart({coinId}: ChartProps) {

    // 1차 방법: url에서 정보가져오기
    // const params = useParams();
    // console.log(params);

    const {isLoading, data} = useQuery<IHistoricalData[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId), {refetchInterval:10000});

    return (
        <div>
            {isLoading ? "Loading chart..." : <ApexChart type="line"
                                                         series={[
                                                             {
                                                                 name: "price",
                                                                 data: data?.map((price) => price.close) as number[],
                                                             },
                                                         ]}
                                                         options={{

                                                             theme:{
                                                                 mode: "dark"

                                                             },
                                                             chart: {
                                                                 height: 300,
                                                                 width: 500,
                                                                 toolbar: {
                                                                     show: false
                                                                 },
                                                                 background:"transparent"
                                                             },
                                                             grid:{
                                                                 show: false
                                                             },
                                                             xaxis:{
                                                                 labels: {
                                                                     show: false,
                                                                 },
                                                                 axisTicks:{
                                                                     show: false,
                                                                 },
                                                                 axisBorder:{
                                                                     show: false,
                                                                 },
                                                                 categories: data?.map((price) =>  new Date(price.time_close * 1000).toUTCString()),
                                                                 type: "datetime",
                                                             },
                                                             yaxis:{
                                                                 show: false
                                                             },
                                                             stroke: {
                                                                 curve: "smooth",
                                                                 width: 5,
                                                             },
                                                             fill:{
                                                                 type:"gradient",
                                                                 gradient:{gradientToColors:["blue"], stops: [0, 100]},
                                                             },
                                                             colors:["red"],
                                                             tooltip:{
                                                                 y:{
                                                                     formatter: (value) => `$${value.toFixed(2)}`,
                                                                 }
                                                             }
                                                         }}/>}
        </div>

    );
}

export default Chart;