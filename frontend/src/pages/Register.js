import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { config } from '../config';
import Input from '../components/forms/Input';

const url = `${config.url}/user/register`;


const Register = ({history}) => {
  const [authData, setAuthData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [authError, setAuthError] = useState({
    error: false,
    msg: ''
  });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (e.target.value === null) {
      return setAuthError({
        error: true,
        msg: 'Please fill all the fileds'
      })
    }
    const { data } = await axios.post(url, authData);
    if (data.error) return setAuthError({
      error: true,
      msg: data.msg
    });

    history.push('/login');
  };


  return (
    <div className="container">
      <div className="row">
        <form action="#" onSubmit={onSubmit} className="col-md-4 offset-md-4 auth-form">
          <div className="auth-card">
            <h3>Register</h3>
            <Input
              type="text"
              label="Name"
              onChange={onChangeInput}
              value={authData.name}
              name="name"
            />

            <Input
              type="email"
              label="Email"
              onChange={onChangeInput}
              value={authData.email}
              name="email"
            />
            <Input
              type="password"
              label="Password"
              onChange={onChangeInput}
              value={authData.password}
              name="password"
            />

            {authError.error ? <div className="alert alert-danger" role="alert">
              {authError.msg}
            </div> : ''}
            <button className="btn btn-primary">Register</button>

            <p className="pt-3">Already have an account? <Link to="/login">Login</Link></p>

          </div>
        </form>
      </div>
    </div>

  )
}

export default Register;
