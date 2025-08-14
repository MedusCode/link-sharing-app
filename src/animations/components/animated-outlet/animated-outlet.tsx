import { AnimatePresence } from 'framer-motion';
import { cloneElement, FC } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

import IOutletAnimation from '@animations/types/outlet-animation.type';

interface IAnimatedOutletProps {
  animation?: IOutletAnimation;
  elementKey?: string | null;
}

const AnimatedOutlet: FC<IAnimatedOutletProps> = ({
  animation = {
    mode: 'wait',
    initial: false,
  },
  elementKey
}) => {
  const { mode, initial } = animation;
  const location = useLocation();
  const element = useOutlet();
  const key = elementKey || location.pathname;

  return (
    <AnimatePresence mode={mode} initial={initial}>
      {element && cloneElement(element, { key })}
    </AnimatePresence>
  );
}

export default AnimatedOutlet;
