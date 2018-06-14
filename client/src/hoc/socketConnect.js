import React from 'react';

const fakeData = { hello: "world" };

const socketConnect = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Component data={fakeData} />
    }
  }
};

export default socketConnect;
