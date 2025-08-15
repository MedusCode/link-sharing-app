import { createSelector } from '@reduxjs/toolkit';

import { IProfile } from '@shared/types/profile.types';

type ProfileEditorSliceShape = IProfile;

export const createProfileEditorSelectors = <Root>(
  selectSlice: (state: Root) => ProfileEditorSliceShape
) => {
  const selectProfile = (state: Root) => selectSlice(state);
  const selectImg = (state: Root) => selectSlice(state).img;
  const selectFirstName = (state: Root) => selectSlice(state).firstName;
  const selectLastName = (state: Root) => selectSlice(state).lastName;
  const selectEmail = (state: Root) => selectSlice(state).email;

  const selectFullName = createSelector(
    selectFirstName,
    selectLastName,
    (first, last) => `${first}${first && last ? ' ' : ''}${last}`
  );

  return {
    selectProfile,
    selectImg,
    selectFirstName,
    selectLastName,
    selectEmail,
    selectFullName,
  };
};
