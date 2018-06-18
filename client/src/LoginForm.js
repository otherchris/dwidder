import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => (
  <div className="login-form">
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
      <Input type="email"/>
    </InputGroup>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
      <Input type="password"/>
    </InputGroup>
    <InputGroup size="lg">
      <Button>Login</Button>
    </InputGroup>
    <Link to="/signup">Sign up</Link>
  </div>
);

export default LoginForm;
