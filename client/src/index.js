/* eslint no-undef:0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Socket } from 'phoenix';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const socket = new Socket('ws://localhost:4000/socket', {});

ReactDOM.render(<App socket={socket} />, document.getElementById('root'));
registerServiceWorker();
