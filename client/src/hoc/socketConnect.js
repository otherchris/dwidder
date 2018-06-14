import React from 'react';
import { Socket } from 'phoenix';

const socketConnect = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        socket: new Socket('ws://localhost:4000/socket', {})
      }
    }

    componentDidMount() {
      this.state.socket.connect();
    }

    render() {
      return <Component data="data" />
    }
  }
};

export default socketConnect;
