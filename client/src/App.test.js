/* eslint no-undef:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { dwidder } from './reducers';
import { App } from './App';
import { MockSocket } from './hoc/test/mocks';

const mockSocket = new MockSocket();

const store = createStore(dwidder);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App socket={mockSocket} />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
