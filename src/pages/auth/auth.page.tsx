import { FC } from 'react';

import AnimatedHeightContainer from '@animations/components/animated-height-container/animated-height-container';
import AnimatedOutlet from '@animations/components/animated-outlet/animated-outlet';
import AnimatedSlideContainer from '@animations/components/animated-slide-container/animated-slide-container';
import Logo from '@shared/components/logo/logo';

import styles from './auth.page.module.css';
import { authAnimationPreset, authHeightAnimationPreset, authOutletAnimationPreset } from './auth.page.presets';

const AuthPage: FC = () => {
  return (
    <AnimatedSlideContainer className={styles.page} animation={authAnimationPreset}>
      <header className={styles.header}>
        <nav>
          <Logo />
        </nav>
      </header>
      <AnimatedHeightContainer as={'main'} className={styles.main} animation={authHeightAnimationPreset}>
        <AnimatedOutlet animation={authOutletAnimationPreset} />
      </AnimatedHeightContainer>
    </AnimatedSlideContainer>
  );
};

export default AuthPage;
