/* eslint no-undef:0, no-underscore-dangle: 0, function-paren-newline: 0  */

import React from 'react';
import ReactDOM from 'react-dom';
import { Socket } from 'phoenix';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import SCApp from './App';
import registerServiceWorker from './registerServiceWorker';
import { dwidder } from './reducers';
import { addSocket } from './actions';

const store = createStore(
  dwidder,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.dispatch(addSocket(new Socket('ws://localhost:4000/socket')));

ReactDOM.render(
  <Provider store={store}>
    <SCApp socket={store.getState().socket} />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
