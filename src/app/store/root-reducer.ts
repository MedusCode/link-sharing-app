import { combineReducers } from '@reduxjs/toolkit';

import { linksEditorReducer } from '@features/links-editor/model/slice';
import { profileEditorReducer } from '@features/profile-editor/model/slice';

export const rootReducer = combineReducers({
  linksEditor: linksEditorReducer,
  profileEditor: profileEditorReducer,
});
