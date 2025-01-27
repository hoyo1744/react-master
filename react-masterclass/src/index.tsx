import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {darkTheme} from "./theme";
import {RecoilRoot} from "recoil";
import {ThemeProvider} from "styled-components";

ReactDOM.render(
    <div>
        <RecoilRoot>
            <ThemeProvider theme={darkTheme}>
                <App/>
            </ThemeProvider>
        </RecoilRoot>
    </div>,
    document.getElementById("root")
);