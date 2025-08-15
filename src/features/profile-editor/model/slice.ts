import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProfile } from '@shared/types/profile.types';

const initialState: IProfile = {
  img: null,
  firstName: '',
  lastName: '',
  email: '',
};

export const profileEditorSlice = createSlice({
  name: 'profileEditor',
  initialState,
  reducers: {
    profileSet(_state, { payload }: PayloadAction<IProfile>) {
      return payload;
    },
    profilePatched(state, { payload }: PayloadAction<Partial<IProfile>>) {
      Object.assign(state, payload);
    },
    imgUpdated(state, { payload }: PayloadAction<string | null>) {
      state.img = payload;
    },
    firstNameUpdated(state, { payload }: PayloadAction<string>) {
      state.firstName = payload;
    },
    lastNameUpdated(state, { payload }: PayloadAction<string>) {
      state.lastName = payload;
    },
    emailUpdated(state, { payload }: PayloadAction<string>) {
      state.email = payload;
    },
    profileCleared() {
      return initialState;
    },
  },
});

export const profileEditorReducer = profileEditorSlice.reducer;
export const profileEditorActions = profileEditorSlice.actions;
