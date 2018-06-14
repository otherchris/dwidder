import React from 'react';
import { Socket } from 'phoenix';

const socketConnect = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      const socket = new Socket('ws://localhost:4000/socket', {})
      socket.connect();
      const channel = socket.channel("hello_world:message", {})
      channel.on("new_msg", msg => console.log("Got message", msg) )
      this.state = {
        socket,
        channel,
        data: 'no data',
      }
    }

    componentDidMount() {
      this.state.channel.on("new_msg", msg => console.log("Got message", msg) )
      this.state.channel.join()
      .receive("ok", (hello) => console.log("catching up", hello) )
      .receive("error", ({reason}) => console.log("failed join", reason) )
      .receive("timeout", () => console.log("Networking issue. Still waiting...") )
      this.state.channel.on("hello", (msg) => {
        this.setState({ data: msg })
      });
    }

    render() {
      return <Component data={this.state.data} />
    }
  }
};

export default socketConnect;
