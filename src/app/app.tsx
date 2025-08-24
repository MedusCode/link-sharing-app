import 'normalize.css'
import './styles/index.css'
import { FC } from 'react';

import { RouterProvider } from './router';
import { StoreProvider } from './store';


const App: FC = () => {

  return (
    <StoreProvider>
      <RouterProvider />
    </StoreProvider>
  );
}

export default App;
