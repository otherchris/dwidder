import React from 'react';
import { post } from '../helpers';

const postControl = Component => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
    };
    this.boundSubmit = this.submit.bind(this);
    this.boundUpdate = this.update.bind(this);
  }
  update(e) {
    this.setState({ post: e.target.value });
  }
  submit() {
    post({
      post: {
        user_id: this.props.userId,
        text: this.state.post,
      },
    });
  }
  render() {
    return (
      <Component
        postSubmit={this.boundSubmit}
        postUpdate={this.boundUpdate}
        postValue={this.state.post}
        {...this.props}
      />
    );
  }
};

export default postControl;
