import React from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import Header from '../components/header/Header';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Posts from '../pages/Posts';

import { config } from '../config';
const url = `${config.url}/user/logout`;

const Routes = ({history}) => {
  const handleLogOut = async () => {
    const { data } = await axios.get(url);
    localStorage.setItem('app-token', data.token);
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <div>
      <Header onLogout={handleLogOut} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/posts" component={Posts} />
    </div>
  )
}

export default withRouter(Routes);
