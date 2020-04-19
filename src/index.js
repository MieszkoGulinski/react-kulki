import React from 'react';
import ReactDOM from 'react-dom';
import mainStore from './redux/store.js';
import { Provider } from 'react-redux';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.getElementById('app');

  ReactDOM.render(
    (
      <Provider store={mainStore}>
        <div></div>
      </Provider>
    ),
    rootDiv
  );
});
