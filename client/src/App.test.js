import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MockSocket } from './hoc/test/mocks';

const mockSocket = new MockSocket();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App socket={mockSocket}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
