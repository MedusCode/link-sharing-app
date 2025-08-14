import { createBrowserRouter } from 'react-router-dom';

import { Paths } from '@app/router/paths';
import AuthPage from '@pages/auth/auth.page';
import LoginPage from '@pages/auth/login/login.page';
import SignupPage from '@pages/auth/signup/signup.page';
import EditorPage from '@pages/editor/editor.page';
import LinksPage from '@pages/editor/links/links.page';
import ProfilePage from '@pages/editor/profile/profile.page';
import RootPage from '@pages/root/root.page';

const router = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
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
    ]
  }
]);

export default router;
