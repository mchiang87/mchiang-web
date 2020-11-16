import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { AppWrapper } from 'common/components/AppWrapper';

import { App } from './App';
import * as serviceWorker from './serviceWorker';

window.loadPromise = new Promise((resolve) => {
  window.addEventListener('DOMContentLoaded', resolve);
});

ReactDOM.render(
  <AppWrapper>
    <App />
  </AppWrapper>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
