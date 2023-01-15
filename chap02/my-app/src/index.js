import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// 앱에서 성능 측정을 시작하려면 함수를 전달합니다.
// 결과 기록(예: reportWebVitals(console.log))
// 또는 분석 끝점으로 보냅니다. 더 알아보기: https://bit.ly/CRA-vitals
reportWebVitals();
