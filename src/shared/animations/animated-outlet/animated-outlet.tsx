import { cloneElement, FC } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

import { OutletAnimation } from './animated-outlet.types';


interface AnimatedOutletProps {
  animation?: Partial<OutletAnimation>;
  elementKey?: string | null;
}

const outletAnimationDefault: Required<OutletAnimation> = {
  mode: 'wait',
  initial: false,
} as const satisfies Required<OutletAnimation>;

export const AnimatedOutlet: FC<AnimatedOutletProps> = ({
  animation,
  elementKey
}) => {
  const { mode, initial } = { ...outletAnimationDefault, ...animation };
  const location = useLocation();
  const element = useOutlet();
  const key = elementKey || location.pathname;

  return (
    <AnimatePresence mode={mode} initial={initial}>
      {element && cloneElement(element, { key })}
    </AnimatePresence>
  );
}
