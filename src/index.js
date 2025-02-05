import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Callback from './components/Callback/Callback';


const root = ReactDOM.createRoot(document.getElementById('root'));

const FetchData = lazy(() => import('./components/FetchData/FetchData'));
const TodoList = lazy(() => import('./components/Forms/TodoList/TodoList'));
const Memo = lazy(() => import('./components/Memo/Memo'));
const Search = lazy(() => import('./components/Search/Search'));

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/fetchData" element={<FetchData />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
);
