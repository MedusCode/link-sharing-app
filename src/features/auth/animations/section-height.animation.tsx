import { FC, HTMLAttributes, ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import HeightAnimationContext from '../contexts/height-animation-context';
import authHeightAnimationPreset from '../presets/auth-height-animation.preset';

interface IAnimatedSectionHeightProps {
  children: ReactNode;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const AnimatedSectionHeight: FC<IAnimatedSectionHeightProps> = ({
  children,
  className = ''
}) => {
  const [ height, setHeight ] = useState<number | 'auto'>('auto');
  const [ pointerEvents, setPointerEvents ] = useState<'none' | 'auto'>('auto');

  return (
    <HeightAnimationContext.Provider value={{ setHeight }}>
      <motion.main
        style={{ height, pointerEvents }}
        animate={{ height }}
        transition={authHeightAnimationPreset}
        onAnimationStart={() => setPointerEvents('none')}
        onAnimationComplete={() => setPointerEvents('auto')}
        className={className}
      >
        {children}
      </motion.main>
    </HeightAnimationContext.Provider>
  );
}

export default AnimatedSectionHeight;
