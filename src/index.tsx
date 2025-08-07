import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './styles/fonts.css';
import './styles/index.css';
import './assets/fonts/InstrumentSans.ttf'
import './assets/fonts/InstrumentSans-Italic.ttf'
import App from './app/app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
