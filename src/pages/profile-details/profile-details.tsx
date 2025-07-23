import { FC } from 'react';
import styles from './profile-details.module.css';
import AnimatedSection from '../../animations/animated-section/animated-section';
import SettingsLinks from '../../components/settings-links/settings-links';

const ProfileDetails: FC = () => {

  return (
    <AnimatedSection side={'left'}>
      <SettingsLinks />
    </AnimatedSection>
  );
}

export default ProfileDetails;
