import { FC, HTMLAttributes, useId } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib';

import { ImageInput } from '@shared/ui';

import { createProfileEditSelectors } from '../../model/selectors';
import { profileEditActions } from '../../model/slice';
import { ProfileImg } from '../../model/types';
import styles from './profile-edit-image.module.css';
import { profileEditImagePreset } from './profile-edit-image.preset';


interface ProfileEditImageProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const { label, firstHint, secondHint } = profileEditImagePreset;

const selectors = createProfileEditSelectors((s: RootState) => s.profileEdit);
const actions = profileEditActions;

export const ProfileEditImage: FC<ProfileEditImageProps> = ({
  className = ''
}) => {
  const dispatch = useAppDispatch();
  const img = useAppSelector(selectors.selectImg);
  const id = useId();

  const updateImage = (newImg: ProfileImg) => {
    if (newImg) dispatch(actions.imgUpdated(newImg))
  }

  return (
    <div className={className}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <div className={styles.image_wrapper}>
        <ImageInput
          className={styles.image_input}
          value={img}
          id={id}
          onChange={({ previewUrl }) => updateImage(previewUrl)} />
        <span className={styles.image_hints}>
          {firstHint}
          <br />
          {secondHint}
        </span>
      </div>
    </div>
  );
}
