import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Alert,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import signUpFormControl from './hoc/signUpFormControl';

const SignupForm = props => (
  <div className="signup-form">
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
      <Input type="text" />
    </InputGroup>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
      <Input type="email" value={props.email} onChange={props.updateEmail} />
    </InputGroup>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
      <Input type="password" value={props.password} onChange={props.updatePassword} />
    </InputGroup>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Confirm</InputGroupAddon>
      <Input type="password" value={props.confirmPassword} onChange={props.updateConfirmPassword} />
    </InputGroup>
    {props.passwordError ? <Alert color="danger">Passwords do not match</Alert> : ''}
    <InputGroup size="lg">
      <Button onClick={props.onSubmit}>Submit</Button>
    </InputGroup>
    Already a member? <Link to="/login">Log in</Link>
  </div>
);

export default signUpFormControl(SignupForm);
