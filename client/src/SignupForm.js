import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const SignupForm = () => (
  <div className="login-form">
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
      <Input type="text"/>
    </InputGroup>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
      <Input type="email"/>
    </InputGroup>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
      <Input type="password"/>
    </InputGroup>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Confirm</InputGroupAddon>
      <Input type="password"/>
    </InputGroup>
    <InputGroup size="lg">
      <Button>Submit</Button>
    </InputGroup>
    Already a member? <Link to="/login">Log in</Link>
  </div>
);

export default SignupForm;
