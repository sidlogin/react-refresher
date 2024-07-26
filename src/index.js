import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const FetchData = lazy(() => import('./components/FetchData/FetchData'));
const Auth = lazy(() => import('./components/Auth/Auth'));
const Memo = lazy(() => import('./components/Memo/Memo'));


root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fetchData" element={<FetchData />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>
);
