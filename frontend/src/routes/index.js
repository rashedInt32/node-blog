import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import Header from '../components/header/Header';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Posts from '../pages/Posts';

import { config } from '../config';
const url = `${config.url}/user/logout`;

const Routes = (props) => {
  const handleLogOut = async () => {
    const { data } = await axios.get(url);
    localStorage.setItem('app-token', data.token);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Header onLogout={handleLogOut} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/posts" component={Posts} />
    </Router>
  )
}

export default Routes;
