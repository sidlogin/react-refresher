import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const History = lazy(() => import('./components/History'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/about" element={<About />} >
        <Route
          path="history"
          element={<History />}
        />
      </Route>
      <Route path="/contact" element={<Contact />} /> */}
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
