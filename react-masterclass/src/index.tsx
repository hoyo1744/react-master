import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {RecoilRoot} from "recoil";

const queryClient = new QueryClient();

ReactDOM.render(
    <div>
        <RecoilRoot>
        <QueryClientProvider client={queryClient}>
                <App/>
        </QueryClientProvider>
        </RecoilRoot>
    </div>,
    document.getElementById("root")
);