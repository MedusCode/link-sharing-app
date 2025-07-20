import { FC, cloneElement } from 'react';
import { AnimatePresence, AnimatePresenceProps } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';

interface IAnimatedOutletProps {
  mode?: AnimatePresenceProps['mode'];
  initial?: boolean
  context?: any;
}

const AnimatedOutlet: FC<IAnimatedOutletProps> = ({ mode, initial, context }) => {
  const location = useLocation();
  const element = useOutlet(context);

  return (
    <AnimatePresence mode={mode} initial={initial}>
      {element && cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default AnimatedOutlet;
