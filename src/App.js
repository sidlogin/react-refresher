import React, { Suspense, memo } from'react';
import { Outlet } from'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

const NavigationMemo = memo(Navigation);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationMemo />
      </header>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
