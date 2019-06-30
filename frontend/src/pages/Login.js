import React, { useState } from 'react';
import Input from '../components/forms/Input';

const Login = () => {
  const [authData, setAuthData] = useState({
    email: '',
    password: ''
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setAuthData({ [name]: value });
  }

  return (
    <div className="row">
      <form action="#" className="col-md-4 offset-md-4">
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
