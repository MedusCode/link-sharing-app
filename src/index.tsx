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
import Authorization from './pages/authorization/authorization';
import Links from './pages/links/links';
import Settings from './pages/settings/settings';
import ProfileDetails from './pages/profile-details/profile-details';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// TODO: Pages in separate Object
const router = createBrowserRouter([
  {
    element: <Settings />,
    children: [
      {
        path: '/',
        element: <Links />,
      },
      {
        path: 'profile',
        element: <ProfileDetails />,
      },
    ]
  },
  {
    element: <Authorization />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
