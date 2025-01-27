import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {darkTheme} from "./theme";
import {RecoilRoot} from "recoil";
import {createGlobalStyle, ThemeProvider} from "styled-components";

const GlobalStyle = createGlobalStyle``;

ReactDOM.render(
    <div>
        <RecoilRoot>
            <ThemeProvider theme={darkTheme}>
                <GlobalStyle />
                <App/>
            </ThemeProvider>
        </RecoilRoot>
    </div>,
    document.getElementById("root")
);