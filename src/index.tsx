import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './styles/fonts.css';
import './styles/index.css';
import './assets/fonts/InstrumentSans.ttf'
import './assets/fonts/InstrumentSans-Italic.ttf'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Root from './pages/root/root';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
