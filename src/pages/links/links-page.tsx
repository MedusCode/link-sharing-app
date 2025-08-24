import { FC } from 'react';

import { LinksEditForm } from '@features/links-edit';
import { AnimatedSlideContainer } from '@shared/animations';
import { SectionContainer } from '@shared/ui';

import { linksAnimationConfig } from './links-page.config';
import styles from './links-page.module.css';
import { linksPagePreset } from './links-page.preset';


const { header } = linksPagePreset;

export const LinksPage: FC = () => {

  return (
    <AnimatedSlideContainer className={styles.container} animation={linksAnimationConfig}>
      <SectionContainer
        header={{ className: styles.section_header, ...header }}
        className={styles.section}
      >
        <LinksEditForm className={styles.editor} />
      </SectionContainer>
    </AnimatedSlideContainer>
  );
}
