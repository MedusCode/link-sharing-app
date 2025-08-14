import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@app/store/store';

interface IStoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<IStoreProviderProps> = ({
  children
})=> {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default StoreProvider;
