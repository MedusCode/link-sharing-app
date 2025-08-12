import { FC } from 'react';

import AnimatedSlideContainer from '@animations/components/animated-slide-container/animated-slide-container';
import DropDown from '@shared/components/drop-down/drop-down';
import SectionContainer from '@shared/components/section-container/section-container';
import SocialNetworksPreset from '@shared/config/social-networks.preset';

import styles from './profile.page.module.css';
import { profileAnimationPreset, profileSectionHeaderPreset } from './profile.page.presets';


const ProfilePage: FC = () => {

  return (
    <AnimatedSlideContainer className={styles.container} animation={profileAnimationPreset}>
      <SectionContainer header={profileSectionHeaderPreset} >
        <DropDown items={SocialNetworksPreset.map((link) => {
          return {
            text: link.name,
            value: link.value,
            IconElement: link.icon
          }
        })} />
      </SectionContainer>
    </AnimatedSlideContainer>
  );
}

export default ProfilePage;
