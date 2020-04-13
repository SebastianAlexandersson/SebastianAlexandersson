import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import io from 'socket.io-client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './redux';

const store = configureStore();
const socket = io('http://localhost/socket');

socket.on('connect', (message: any) => {
  console.log(message);
});

socket.on('newDeal', (data: any) => {
  console.log('NEW DEAL!!!');
  console.log(data);
});

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
