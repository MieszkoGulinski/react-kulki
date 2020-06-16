import React from 'react';
import ReactDOM from 'react-dom';
import mainStore from './redux/store.js';
import { Provider } from 'react-redux';
import './style.css';
import MainField from './MainField';
import ControlButtons from './ControlButtons';

document.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.getElementById('app');

  ReactDOM.render(
    (
      <Provider store={mainStore}>
        <div className="outer-wrapper">
          <MainField />
          <ControlButtons />
        </div>
      </Provider>
    ),
    rootDiv
  );
});
