import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Input from '../components/forms/Input';
import { config } from '../config';

const url = `${config.url}/user/login`;

const Login = ({history}) => {
  const [authData, setAuthData] = useState({
    email: '',
    password: ''
  });

  const [authError, setAuthError] = useState({
    error: false,
    msg: ''
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const {data} = await axios.post(url, authData);

    if (data.error) return setAuthError({
      error: true,
      msg: data.msg
    });

    const tokenDecode = JSON.parse(window.atob(data.token.split('.')[1]));
    localStorage.setItem('app-token', data.token);
    localStorage.setItem('user', JSON.stringify(tokenDecode.user));
    history.push('/posts');
  }

  return (
    <div className="container">
      <div className="row">
        <form
          action="#"
          className="col-md-4 offset-md-4 auth-form"
          onSubmit={onSubmitForm}
        >
          <div className="auth-card">
            <h3>Login</h3>
            <Input
              type="email"
              label="Email"
              value={authData.email}
              onChange={onInputChange}
              name="email"
            />
            <Input
              type="password"
              label="Password"
              value={authData.password}
              onChange={onInputChange}
              name="password"
            />
            {authError.error ? <div className="alert alert-danger" role="alert">
              {authError.msg}
            </div> : ''}
            <button className="btn btn-primary">Login</button>
            <p className="pt-3">Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
