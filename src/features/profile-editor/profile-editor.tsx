import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import ImageSection from '@features/profile-editor/components/image-section/image-section';
import TextInputsSection from '@features/profile-editor/components/text-inputs-section/text-inputs-section';
import Button from '@shared/components/button/button';
import { IProfile, TProfileDetails, TProfileImg } from '@shared/types/profile.types';

import styles from './profile-editor.module.css';
import profileEditorPreset from '@features/profile-editor/profile-editor.preset';

interface IProfileEditorProps {
  className?: HTMLAttributes<HTMLElement>['className'];
  profile: IProfile;
  patchProfile: (updatedFields: Partial<IProfile>) => void;
}

const { saveButton } = profileEditorPreset;

const ProfileEditor: FC<IProfileEditorProps> = ({
  className = '',
  profile,
  patchProfile,
}) => {
  const { img: profileImg, ...profileDetails } = profile;

  const updateImage = (img: TProfileImg) =>
    patchProfile({ img })

  const patchDetails = (profileDetails: TProfileDetails) =>
    patchProfile({ ...profileDetails })

  return (
    <form className={clsx(styles.form, className)}>
      <div className={styles.main}>
        <ImageSection className={styles.input_section} img={profileImg} updateImage={updateImage} />
        <TextInputsSection className={styles.input_section} fields={profileDetails} patchDetails={patchDetails} />
      </div>
      <div className={styles.footer}>
        <Button className={styles.save_button} type={'submit'}>{saveButton.text}</Button>
      </div>
    </form>
  );
}

export default ProfileEditor;
