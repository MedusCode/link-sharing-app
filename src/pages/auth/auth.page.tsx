import { FC } from 'react';

import AnimatedHeightContainer from '@animations/components/animated-height-container/animated-height-container';
import AnimatedOutlet from '@animations/components/animated-outlet/animated-outlet';
import Logo from '@shared/components/logo/logo';

import styles from './auth.page.module.css';
import { authHeightAnimationPreset, authOutletAnimationPreset } from './auth.page.presets';

const AuthPage: FC = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav>
          <Logo />
        </nav>
      </header>
      <AnimatedHeightContainer as={'main'} className={styles.main} animation={authHeightAnimationPreset}>
        <AnimatedOutlet animation={authOutletAnimationPreset} />
      </AnimatedHeightContainer>
    </div>
  );
};

export default AuthPage;
