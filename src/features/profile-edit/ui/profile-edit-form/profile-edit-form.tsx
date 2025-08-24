import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

import { Button } from '@shared/ui';

import { ProfileEditDetails } from '../profile-edit-details/profile-edit-details';
import { ProfileEditImage } from '../profile-edit-image/profile-edit-image';
import styles from './profile-edit-form.module.css';
import { profileEditFormPreset } from './profile-edit-form.preset';


interface ProfileEditFormProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const { saveButton } = profileEditFormPreset;

export const ProfileEditForm: FC<ProfileEditFormProps> = ({
  className = '',
}) => {

  return (
    <form className={clsx(styles.form, className)} noValidate>
      <div className={styles.main}>
        <ProfileEditImage className={styles.input_section} />
        <ProfileEditDetails className={styles.input_section} />
      </div>
      <div className={styles.footer}>
        <Button className={styles.save_button} type={'submit'}>{saveButton.text}</Button>
      </div>
    </form>
  );
}
