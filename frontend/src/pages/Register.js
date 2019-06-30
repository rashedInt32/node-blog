import React, { useState } from 'react';
import axios from 'axios';

import Input from '../components/forms/Input';

const url = 'http://localhost:3900/api/user/register';

const Register = () => {
  const [authData, setAuthData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeInput = e => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(authData);
    const res = await axios.post(url, authData);
    console.log(res);

  };


  return (
    <div>
      <form action="#" onSubmit={onSubmit}>
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

        <button >Register</button>
      </form>
    </div>
  )
}

export default Register;
