import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
    <div>
        <QueryClientProvider client={queryClient}>

                <App/>

        </QueryClientProvider>
    </div>,
    document.getElementById("root")
);