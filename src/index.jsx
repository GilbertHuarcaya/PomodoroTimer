import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CompletedProvider } from './Context';

ReactDOM.render(
  <React.StrictMode>
    <CompletedProvider>
      <App />
    </CompletedProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
