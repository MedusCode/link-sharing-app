import { motion } from 'framer-motion';
import { FC, HTMLAttributes, ReactNode, Ref, useState } from 'react';
import styles from './animated-section.module.css';
import { animationsDelay, animationsDuration, sectionShift } from '../../constants/animations';

interface IAnimatedSectionProps {
  side?: 'left' | 'right' | 'up' | 'down';
  shift?: number;
  duration?: number;
  delay?: number;
  isExitAbsolut?: boolean;
  sectionRef?: Ref<HTMLDivElement>;
  className?: HTMLAttributes<HTMLElement>['className'];
  children: ReactNode;
}

const AnimatedSection: FC<IAnimatedSectionProps> = ({
  side = 'left',
  shift = sectionShift,
  duration = animationsDuration,
  delay = animationsDelay,
  isExitAbsolut = false,
  className,
  sectionRef,
  children
}) => {
  const [ pointerEvents, setPointerEvents ] = useState<'none' | 'auto'>('auto');
  const x = side === 'left' ? shift : side === 'right' ? -shift : 0
  const y = side === 'up' ? shift : side === 'down' ? -shift : 0

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: x,
        y: y
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: delay,
          duration: duration,
          ease: 'easeOut'
        }
      }}
      exit={{
        opacity: 0,
        x: x,
        y: y,
        position: isExitAbsolut ? 'absolute' : undefined,
        transition: {
          duration: duration,
          ease: 'easeIn',
        }
      }}
      style={{ pointerEvents }}
      onAnimationStart={() => setPointerEvents('none')}
      onAnimationComplete={() => setPointerEvents('auto')}
      className={className}
      ref={sectionRef}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
