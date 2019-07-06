import React from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import Header from '../components/header/Header';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Posts from '../pages/Posts';
import SinglePost from '../pages/SinglePost';

import { config } from '../config';
const url = `${config.url}/user/logout`;

const Routes = ({history, location}) => {
  const handleLogOut = async () => {
    const { data } = await axios.get(url);
    localStorage.setItem('app-token', data.token);
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <div>
      <Header onLogout={handleLogOut} pathname={location.pathname} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/posts" component={Posts} />
      <Route
        path="/post/:id"
        render={({location}) =>
          <SinglePost post={location.state.post} />
        }
       />
    </div>
  )
}

export default withRouter(Routes);
