import React, { Suspense } from'react';
import { Outlet } from'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

// const NavigationMemo = memo(Navigation);
function App() {
  return (
    <div className="App">
        <Navigation />
      <header className="App-header">
      </header>
      <Suspense fallback={(<div className='loader'>Loading...</div>)}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
