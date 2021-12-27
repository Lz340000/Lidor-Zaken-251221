import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import loadFonts from './loadFonts';
import './index.css';
import 'css/main.css';

loadFonts
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
      <App />
    </Provider>,
      document.getElementById('root')
    );
  })
  .catch(() => {
    ReactDOM.render(
      <Provider store={store}>
      <App />
    </Provider>,
      document.getElementById('root')
    );
  });



