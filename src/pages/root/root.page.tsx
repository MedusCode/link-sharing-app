import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import AnimatedOutlet from '@animations/components/animated-outlet/animated-outlet';
import { Paths } from '@app/router/paths';
import { rootOutletAnimationPreset } from '@pages/root/root.page.presets';
import getSectionByPath from '@shared/utils/get-section-by-path';

const RootPage: FC = () => {
  const { pathname } = useLocation();
  const animationKey = getSectionByPath(Paths, pathname);

  return (
    <AnimatedOutlet animation={rootOutletAnimationPreset} elementKey={animationKey} />
  );
}

export default RootPage;
