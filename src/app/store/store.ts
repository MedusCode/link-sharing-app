import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { rootReducer } from '@app/store/root-reducer';
import { rtkApi } from '@shared/api/rtk-api';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().concat(rtkApi.middleware),
});

setupListeners(store.dispatch);
