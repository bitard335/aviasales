import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import configureStore from './store/index';
import './index.css';
import App from './components/app/app';

console.log(configureStore);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureStore}>
    <App />
  </Provider>
);
