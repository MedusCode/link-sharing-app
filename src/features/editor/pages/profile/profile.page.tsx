import { FC } from 'react';
import styles from './profile.page.module.css';
import AnimatedSection from '../../../../shared/animations/section.animation';
import LinksSection from '../../components/links-section/links-section';
import profileAnimationPreset from '../../presets/profile-animation.preset';

const ProfilePage: FC = () => {

  return (
    <AnimatedSection animation={profileAnimationPreset}>
      <LinksSection />
    </AnimatedSection>
  );
}

export default ProfilePage;
