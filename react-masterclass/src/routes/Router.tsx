import {BrowserRouter, Switch, Route} from "react-router-dom";
import Coins from "./Coins";
import React from "react";
import Coin from "./Coin";

// Switch는 한번에 하나의 Router만 렌더링할 수 있는 방법

function Router(){
    return <BrowserRouter>
        <Switch>
            <Route path="/">
                <Coins/>
            </Route>
            <Route path="/:coinId">
                <Coin/>
            </Route>


        </Switch>
    </BrowserRouter>

}

export default Router;