import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { linksEditReducer } from '@features/links-edit';
import { profileEditReducer } from '@features/profile-edit';


export const rootReducer = combineReducers({
  linksEdit: linksEditReducer,
  profileEdit: profileEditReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);

export default store;
