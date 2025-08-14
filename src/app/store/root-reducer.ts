import { combineReducers } from '@reduxjs/toolkit';

import { linksEditorReducer } from '@features/links-editor/model/slice';

export const rootReducer = combineReducers({
  linksEditor: linksEditorReducer
});
