import React, { useState } from 'react';
import axios from 'axios';
import Input from '../components/forms/Input';

const url = 'http://localhost:3900/api/user/login'

const Login = () => {
  const [authData, setAuthData] = useState({
    email: '',
    password: ''
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

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
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login;
