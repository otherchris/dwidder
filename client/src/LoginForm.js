import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loginFormControl from './hoc/loginFormControl';

const LoginForm = props => (
  <div className="login-form">
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
      <Input onChange={props.updateEmail} value={props.email} type="email" />
    </InputGroup>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
      <Input onChange={props.updatePassword} value={props.password} type="password" />
    </InputGroup>
    <InputGroup size="lg">
      <Button onClick={props.onSubmit}>Login</Button>
    </InputGroup>
    <Link to="/signup">Sign up</Link>
  </div>
);

export default connect()(loginFormControl(LoginForm));
