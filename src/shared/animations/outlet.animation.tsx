import { FC, cloneElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';
import IOutletAnimation from '../types/outlet-animation.type';

interface IAnimatedOutletProps {
  animation: IOutletAnimation;
}

const AnimatedOutlet: FC<IAnimatedOutletProps> = ({
  animation = {
    mode: 'wait',
    initial: false,
  }
}) => {
  const { mode, initial } = animation;
  const location = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence mode={mode} initial={initial}>
      {element && cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default AnimatedOutlet;
