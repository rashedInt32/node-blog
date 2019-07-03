import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Posts from '../pages/Posts';

const Routes = () =>
  <Router>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <PrivateRoute path="/posts" component={Posts} />
  </Router>

export default Routes;
