import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Paths } from '@app/router/paths';
import AuthPage from '@pages/auth/auth.page';
import LoginPage from '@pages/auth/subpages/login/login.page';
import SignupPage from '@pages/auth/subpages/signup/signup.page';
import EditorPage from '@pages/editor/editor.page';
import LinksPage from '@pages/editor/subpages/links/links.page';
import ProfilePage from '@pages/editor/subpages/profile/profile.page';

const router = createBrowserRouter([
  {
    element: <EditorPage />,
    children: [
      {
        path: Paths.EDITOR.LINKS,
        element: <LinksPage />,
      },
      {
        path: Paths.EDITOR.PROFILE,
        element: <ProfilePage />,
      },
    ]
  },
  {
    element: <AuthPage />,
    children: [
      {
        path: Paths.AUTH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: Paths.AUTH.SIGNUP,
        element: <SignupPage />,
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
