import { FC } from 'react';

import { ProfileEditForm } from '@features/profile-edit';
import { AnimatedSlideContainer } from '@shared/animations';
import { SectionContainer } from '@shared/ui';

import { profileAnimationConfig } from './profile-page.config';
import styles from './profile-page.module.css';
import { profilePagePreset } from './profile-page.preset';


const { header } = profilePagePreset;

export const ProfilePage: FC = () => {

  return (
    <AnimatedSlideContainer className={styles.container} animation={profileAnimationConfig}>
      <SectionContainer
        header={{ className: styles.section_header, ...header }}
        className={styles.section}
      >
        <ProfileEditForm className={styles.editor} />
      </SectionContainer>
    </AnimatedSlideContainer>
  );
}
