import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from 'reactstrap';

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
  </div>
);

export default LoginForm;
