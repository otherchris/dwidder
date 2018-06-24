import React from 'react';
import { Redirect } from 'react-router-dom';
import { signUp } from '../helpers';

const signUpFormControl = Component => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.boundSubmit = this.submit.bind(this);
    this.boundUpdateEmail = this.updateEmail.bind(this);
    this.boundUpdatePassword = this.updatePassword.bind(this);
    this.boundUpdateConfirmPassword = this.updateConfirmPassword.bind(this);
  }
  updateEmail(e) {
    this.setState({ email: e.target.value });
  }
  updatePassword(e) {
    this.setState({ password: e.target.value }, () => {
      if (this.state.password === this.state.confirmPassword) {
        this.setState({ passwordError: false });
      }
    });
  }
  updateConfirmPassword(e) {
    this.setState({ confirmPassword: e.target.value }, () => {
      if (this.state.password === this.state.confirmPassword) {
        this.setState({ passwordError: false });
      }
    });
  }
  submit() {
    if (this.state.password === this.state.confirmPassword) {
      signUp({ user: { email: this.state.email, password: this.state.password } }, (success) => {
        if (success) {
          this.setState({ success: true });
        }
      });
    } else {
      this.setState({ passwordError: true });
    }
  }
  render() {
    return (
      this.state.success ? <Redirect to="/login" /> :
      <Component
        onSubmit={this.boundSubmit}
        updateEmail={this.boundUpdateEmail}
        updatePassword={this.boundUpdatePassword}
        updateConfirmPassword={this.boundUpdateConfirmPassword}
        email={this.state.email}
        password={this.state.password}
        confirmPassword={this.state.confirmPassword}
        passwordError={this.state.passwordError}
      />
    );
  }
};

export default signUpFormControl;
