import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';



const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// 3-2
// Component의 어떤 prop가 없으면 에러가나는지 typescript가 어떻게 알까?

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
