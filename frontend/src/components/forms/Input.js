import React from 'react';

const Input = (props) =>
  <div>
    <label>{props.label}</label>
    <input
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      name={props.name}
    />
  </div>

export default Input;
