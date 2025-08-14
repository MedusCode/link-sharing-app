import { FC } from 'react';

import styles from 'pages/editor/profile/profile.page.module.css';
import { profileAnimationPreset, profileSectionHeaderPreset } from 'pages/editor/profile/profile.page.presets';

import AnimatedSlideContainer from '@animations/components/animated-slide-container/animated-slide-container';
import SectionContainer from '@shared/components/section-container/section-container';


const ProfilePage: FC = () => {

  return (
    <AnimatedSlideContainer className={styles.container} animation={profileAnimationPreset}>
      <SectionContainer header={profileSectionHeaderPreset}>
      </SectionContainer>
    </AnimatedSlideContainer>
  );
}

export default ProfilePage;
