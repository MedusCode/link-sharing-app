import React, { FC } from 'react';

import 'normalize.css';
import './app.css'
import RouterProvider from '@app/providers/router-provider';
import StoreProvider from '@app/providers/store-provider';

const App: FC = () => {

  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
}

export default App;
