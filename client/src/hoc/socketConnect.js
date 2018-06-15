/* eslint react/prop-types:0 */
import React from 'react';
import identity from 'lodash/identity';

const socketConnect = Component => class extends React.Component {
  constructor(props) {
    super(props);
    const { socket } = this.props;
    socket.connect();
    const channel = socket.channel('hello_world:message', {});
    channel.on('new_msg', identity);
    this.state = {
      socket,
      channel,
      data: 'no data',
    };
  }

  componentDidMount() {
    this.state.channel.join()
      .receive('ok', identity)
      .receive('error', identity)
      .receive('timeout', identity);
    this.state.channel.on('hello', (msg) => {
      this.setState({ data: msg });
    });
  }

  render() {
    return <Component data={this.state.data} />;
  }
};

export default socketConnect;
