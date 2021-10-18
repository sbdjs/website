import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Edit from './views/editBot';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain='sbdjs.eu.auth0.com'
    clientId='1CqQE1cN7lNMBvkdi85X5ihgCg42kCoy'
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
