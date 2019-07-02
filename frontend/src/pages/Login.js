import React, { useState } from 'react';
import axios from 'axios';
import Input from '../components/forms/Input';

const url = 'http://localhost:3900/api/user/login'

const Login = () => {
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

    const user = JSON.parse(window.atob(data.token.split('.')[1]));
    console.log(user);
  }

  return (
    <div className="row">
      <form
        action="#"
        className="col-md-4 offset-md-4"
        onSubmit={onSubmitForm}
      >
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
        { authError.error ? <div className="alert alert-danger" role="alert">
          {authError.msg}
        </div> : '' }
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login;
