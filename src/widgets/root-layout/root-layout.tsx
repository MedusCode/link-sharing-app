import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { AnimatedOutlet } from '@shared/animations';
import { Paths } from '@shared/router';

import { getSectionByPathUtil } from './get-section-by-path.util';
import { rootOutletAnimationConfig } from './root-layout.config';


export const RootLayout: FC = () => {
  const { pathname } = useLocation();
  const animationKey = getSectionByPathUtil(Paths, pathname);

  return (
    <AnimatedOutlet animation={rootOutletAnimationConfig} elementKey={animationKey} />
  );
}
