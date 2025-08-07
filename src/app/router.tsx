import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditorRoute from './routes/editor/editor.route';
import AuthRoute from './routes/auth/auth.route';
import LoginRoute from './routes/auth/login.route';
import SignupRoute from './routes/auth/signup.route';
import { ROUTES } from '../shared/constants/routes';
import LinksRoute from './routes/editor/links.route';
import ProfileRoute from './routes/editor/profile.route';

const router = createBrowserRouter([
  {
    element: <EditorRoute />,
    children: [
      {
        path: ROUTES.EDITOR.LINKS,
        element: <LinksRoute />,
      },
      {
        path: ROUTES.EDITOR.PROFILE,
        element: <ProfileRoute />,
      },
    ]
  },
  {
    element: <AuthRoute />,
    children: [
      {
        path: ROUTES.AUTH.LOGIN,
        element: <LoginRoute />,
      },
      {
        path: ROUTES.AUTH.SIGNUP,
        element: <SignupRoute />,
      },
    ],
  },
]);

const Router: FC = () => {

  return (
    <RouterProvider router={router} />
  );
}

export default Router;
