import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from 'reactstrap';
import signUpFormControl from './hoc/signUpFormControl';
import { Link } from 'react-router-dom';

const SignupForm = (props) => {
  return (
  <div className="login-form">
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
      <Input type="text"/>
    </InputGroup>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
      <Input type="email" value={props.email} onChange={props.updateEmail}/>
    </InputGroup>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
      <Input type="password" value={props.paswword} onChange={props.updatePassword} />
    </InputGroup>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">Confirm</InputGroupAddon>
      <Input type="password" value={props.confirmPassword} onChange={props.updateConfirmPassword} />
    </InputGroup>
    <InputGroup size="lg">
      <Button onClick={props.onSubmit}>Submit</Button>
    </InputGroup>
    Already a member? <Link to="/login">Log in</Link>
  </div>
)};

export default signUpFormControl(SignupForm);
