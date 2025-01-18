import ReactDOM from "react-dom";
import {ThemeProvider} from "styled-components";
import App from "./App";
import {theme} from "./theme";
import React from "react";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
    <div>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </QueryClientProvider>
    </div>,
    document.getElementById("root")
);