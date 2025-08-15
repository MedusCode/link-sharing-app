import { combineReducers } from '@reduxjs/toolkit';

import { linksEditorReducer } from '@features/links-editor/model/slice';
import { profileEditorReducer } from '@features/profile-editor/model/slice';
import { rtkApi } from '@shared/api/rtk-api';

export const rootReducer = combineReducers({
  linksEditor: linksEditorReducer,
  profileEditor: profileEditorReducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
});
