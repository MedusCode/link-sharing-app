import { FC } from 'react';

import SectionAnimation from '@animations/components/animated-slide-container/animated-slide-container';
import SectionContainer from '@shared/components/section-container/section-container';

import styles from './links.page.module.css';
import { linksAnimationPreset, linksSectionHeaderPreset } from './links.page.presets';


const LinksPage: FC = () => {

  return (
    <SectionAnimation className={styles.container} animation={linksAnimationPreset}>
      <SectionContainer header={linksSectionHeaderPreset}>
        <></>
      </SectionContainer>
    </SectionAnimation>
  );
}

export default LinksPage;
