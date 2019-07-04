import React from 'react';
import axios from 'axios';
import './App.css';
import { config } from './config';
import Routes from './routes';
import Header from './components/header/Header';

const url = `${config.url}/user/logout`;

function App() {
  const handleLogOut = async () => {
    const { data } = await axios.get(url);
    localStorage.setItem('app-token', data.token);
    localStorage.removeItem('user');
  };

  return (
    <div className="App">
      <Routes>
        <Header onLogout={handleLogOut} />
      </Routes>
    </div>
  );
}

export default App;
