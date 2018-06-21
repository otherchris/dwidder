import React from 'react';
import { login } from '../helpers';
import { Redirect } from 'react-router-dom';

const loginFormControl = Component => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  updateEmail(e) {
    this.setState({ email: e.target.value });
  }
  updatePassword(e) {
    this.setState({ password: e.target.value }, () => {
      if (this.state.password == this.state.confirmPassword) {
        this.setState({ passwordError: false });
      }
    });
  }
  submit() {
    login({ user: { email: this.state.email, password: this.state.password } }, (success, token) => {
      if (success) {
        console.log(token)
      } else {
        console.log('fart')
    }});
  }
  render() {
    return (
      <Component
        onSubmit={this.submit.bind(this)}
        updateEmail={this.updateEmail.bind(this)}
        updatePassword={this.updatePassword.bind(this)}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

export default loginFormControl;
