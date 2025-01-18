import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";
import React from "react";

ReactDOM.render(
    <div>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </div>,
    document.getElementById("root")
);