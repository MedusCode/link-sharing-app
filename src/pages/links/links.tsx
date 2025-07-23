import { FC } from 'react';
import styles from './links.module.css';
import SettingsLinks from '../../components/settings-links/settings-links';
import AnimatedSection from '../../animations/animated-section/animated-section';

const Links: FC = () => {

  return (
    <AnimatedSection side={'left'} className={styles.container}>
      <SettingsLinks />
    </AnimatedSection>
  );
}

export default Links;
