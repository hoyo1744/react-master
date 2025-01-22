import {BrowserRouter, Switch, Route} from "react-router-dom";
import Coins from "./Coins";
import React from "react";
import Coin from "./Coin";

// Switch는 한번에 하나의 Router만 렌더링할 수 있는 방법

interface IRouterProps {
    // 함수도 아래와 같이 형태를 명시해줘야함.
    toggleDark: () => void;
    isDark: boolean;
}



function Router({toggleDark, isDark}: IRouterProps){
    return <BrowserRouter>
        <Switch>
            <Route path="/:coinId">
                <Coin isDark={isDark} />
            </Route>
            <Route path="/">
                <Coins  toggleDark={toggleDark}/>
            </Route>
        </Switch>
    </BrowserRouter>

}

export default Router;