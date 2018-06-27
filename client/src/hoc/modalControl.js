import React from 'react';

const modalControl = Component => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.boundToggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }
  render() {
    return (
      <Component modalToggle={this.boundToggle} modalOpen={this.state.modalOpen} {...this.props} />
    );
  }
};

export default modalControl;
