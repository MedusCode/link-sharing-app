import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Profile, ProfileDetails } from './types';


const initialState: Profile = {
  img: '',
  firstName: '',
  lastName: '',
  email: '',
};

export const profileEditSlice = createSlice({
  name: 'profileEdit',
  initialState,
  reducers: {
    profileSet(_state, { payload }: PayloadAction<Profile>) {
      return payload;
    },
    profilePatched(state, { payload }: PayloadAction<Partial<Profile>>) {
      Object.assign(state, payload);
    },
    detailPatched(state, { payload }: PayloadAction<Partial<ProfileDetails>>) {
      Object.assign(state, payload);
    },
    imgUpdated(state, { payload }: PayloadAction<string>) {
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

export const profileEditReducer = profileEditSlice.reducer;
export const profileEditActions = profileEditSlice.actions;
