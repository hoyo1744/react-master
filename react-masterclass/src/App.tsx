import React, {useState} from "react";
import Router from "./routes/Router";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {ReactQueryDevtools} from "react-query/devtools";
import {HelmetProvider} from "react-helmet-async";
import {darkTheme, lightTheme} from "./theme";

// 5-1 css 리셋 방법
// createGlobalStyle() 이걸 사용하자 -> 이걸 이용한 컴포넌트를 전체 컴포넌트에 적용시켜줌.

// https://github.com/zacanger/styled-reset/blob/master/src/index.ts reset
const GlobalStyle = createGlobalStyle`
    //https://fonts.google.com/selection/embed
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
        display: block;
    }

    /* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
        display: none;
    }

    body {
        line-height: 1;
    }

    menu, ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.textColor}
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

// 그런데, Router도 리턴해야하고, GlobalStyle도 리턴하고 싶은데.
// 원래는 <div>안에서 2개를 리턴했다. 근데 이러면 Div가 너무 많아
// 그래서 Fragment를 사용하자. 고스트 컴포넌트라고도 함.<>

function App() {

    // state를 사용하려고 index에서 App으로 ThemeProvider를 가져옴.
    const [isDark, setIsDark] = useState(false);

    const toggleDark = () => {
        setIsDark((current) => !current)
    }
    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <GlobalStyle/>
                <HelmetProvider>
                    {/*Coin에서 사용하기 위해서 App->Router->Coin으로 전달될 예정임.*/}
                    <Router isDark={isDark} toggleDark={toggleDark}/>
                </HelmetProvider>
                <ReactQueryDevtools initialIsOpen={true}/>
            </ThemeProvider>
        </>
    );
}

// 좋지 않은 방법임. 그런데 이게 global state를 의미함.즉, 싱글톤 같은 얘를 global state라고 할 수 있겠다.
// global state는 어플리케이션 전체에서 공유되는 state를 의미함.
// App (isDark, modifierFn)
// -> Router -> Coin (isDark) -> Chart(isDark)
// -> Router -> Coins (modifier)

export default App;
