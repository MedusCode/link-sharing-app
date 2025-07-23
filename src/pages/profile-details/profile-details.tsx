import { FC } from 'react';
import styles from './profile-details.module.css';
import AnimatedSection from '../../animations/animated-section/animated-section';
import EditorLinks from '../../components/editor-links/editor-links';

const ProfileDetails: FC = () => {

  return (
    <AnimatedSection side={'left'}>
      <EditorLinks />
    </AnimatedSection>
  );
}

export default ProfileDetails;
