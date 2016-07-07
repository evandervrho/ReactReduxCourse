import 'babel-polyfill'; // Some ES6 features need this
import React from 'react';
import { render } from 'react-dom';
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; // Webpack can import css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';  // Attaches store to react container components

const store = configureStore();

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);