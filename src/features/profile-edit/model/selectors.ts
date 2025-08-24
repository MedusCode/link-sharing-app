import { createSelector } from '@reduxjs/toolkit';

import { Profile } from './types';


type ProfileEditSliceShape = Profile;

export const createProfileEditSelectors = <Root>(
  selectSlice: (state: Root) => ProfileEditSliceShape
) => {
  const selectProfile = (state: Root) => selectSlice(state);
  const selectImg = (state: Root) => selectSlice(state).img;
  const selectFirstName = (state: Root) => selectSlice(state).firstName;
  const selectLastName = (state: Root) => selectSlice(state).lastName;
  const selectEmail = (state: Root) => selectSlice(state).email;

  const selectDetails = createSelector(
    selectFirstName,
    selectLastName,
    selectEmail,
    (firstName, lastName, email) => ({ firstName, lastName, email })
  )

  return {
    selectProfile,
    selectImg,
    selectFirstName,
    selectLastName,
    selectEmail,
    selectDetails,
  };
};
