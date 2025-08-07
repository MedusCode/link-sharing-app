import { FC } from 'react';
import styles from './links.page.module.css';
import LinksSection from '../../components/links-section/links-section';
import SectionAnimation from '../../../../shared/animations/section.animation';
import linksAnimationPreset from '../../presets/links-animation.preset';

const LinksPage: FC = () => {

  return (
    <SectionAnimation className={styles.container} animation={linksAnimationPreset}>
      <LinksSection className={styles.section} />
    </SectionAnimation>
  );
}

export default LinksPage;
