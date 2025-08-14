import { FC } from 'react';
import { RouterProvider as RRProvider } from 'react-router-dom';

import router from '@app/router/router';

const RouterProvider: FC = () => {

  return (
    <RRProvider router={router} />
  );
}

export default RouterProvider;
