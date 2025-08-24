import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout } from 'widgets/auth-layout';
import { EditorLayout } from 'widgets/editor-layout';
import { RootLayout } from 'widgets/root-layout';

import { LinksPage } from '@pages/links';
import { LoginPage } from '@pages/login';
import { ProfilePage } from '@pages/profile';
import { SignupPage } from '@pages/signup/signup-page';
import { Paths } from '@shared/router';


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <EditorLayout />,
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
        element: <AuthLayout />,
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
    ]
  },
]);

export default router;
