import { motion } from 'framer-motion';
import { FC, HTMLAttributes, ReactNode, Ref, useState } from 'react';
import { ANIMATION_SECTION_DELAY, ANIMATION_SECTION_DURATION, ANIMATION_SECTION_SHIFT } from '../constants/animations';
import ISectionAnimation from '../types/section-animation.type';

interface IAnimatedSectionProps {
  animation: ISectionAnimation;
  sectionRef?: Ref<HTMLDivElement>;
  className?: HTMLAttributes<HTMLElement>['className'];
  children: ReactNode;
}

const AnimatedSection: FC<IAnimatedSectionProps> = ({
  animation: {
    side = 'left',
    shift = ANIMATION_SECTION_SHIFT,
    duration = ANIMATION_SECTION_DURATION,
    delay = ANIMATION_SECTION_DELAY,
    isExitAbsolut = false,
  },
  className,
  sectionRef,
  children
}) => {
  const [ pointerEvents, setPointerEvents ] = useState<'none' | 'auto'>('auto');
  const x = side === 'right' ? shift : side === 'left' ? -shift : 0
  const y = side === 'down' ? shift : side === 'up' ? -shift : 0

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
