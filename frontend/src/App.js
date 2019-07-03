import React from 'react';
import './App.css';

import Routes from './routes';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Header />
      </Routes>
    </div>
  );
}

export default App;
