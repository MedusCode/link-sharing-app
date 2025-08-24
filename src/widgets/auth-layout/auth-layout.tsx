import { FC } from 'react';

import { AnimatedHeightContainer, AnimatedOutlet, AnimatedSlideContainer } from '@shared/animations';
import { Logo } from '@shared/ui';

import { authAnimationConfig, authHeightAnimationConfig, authOutletAnimationConfig } from './auth-layout.config';
import styles from './auth-layout.module.css';


export const AuthLayout: FC = () => {
  return (
    <AnimatedSlideContainer className={styles.page} animation={authAnimationConfig}>
      <header className={styles.header}>
        <nav>
          <Logo />
        </nav>
      </header>
      <AnimatedHeightContainer as={'main'} className={styles.main} animation={authHeightAnimationConfig}>
        <AnimatedOutlet animation={authOutletAnimationConfig} />
      </AnimatedHeightContainer>
    </AnimatedSlideContainer>
  );
};
