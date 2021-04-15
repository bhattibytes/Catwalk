import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store.js';
import { Provider } from 'react-redux';
console.log(store)
ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);