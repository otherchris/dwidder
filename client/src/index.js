/* eslint no-undef:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Socket } from 'phoenix';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { dwidder } from './reducers';
import { addSocket } from './actions';

const store = createStore(dwidder)

store.dispatch(addSocket(new Socket('ws://localhost:4000/socket')))

ReactDOM.render(
  <Provider store={store}>
    <App socket={store.getState().socket}/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
