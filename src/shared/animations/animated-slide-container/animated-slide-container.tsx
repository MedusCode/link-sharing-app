import { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import {
  MOTION_ANIMATION_DELAY,
  MOTION_ANIMATION_DURATION,
  MOTION_ANIMATION_SHIFT,
  motionElementsMap
} from '@shared/config';
import { usePointerLockUtil } from '@shared/lib';

import styles from './animated-slide-container.module.css';
import { SlideAnimation } from './animated-slide-container.types';


interface AnimatedSlideContainerProps {
  animation?: Partial<SlideAnimation>;
  as?: keyof typeof motionElementsMap;
  disablePointer?: boolean;
  className?: HTMLAttributes<HTMLElement>['className'];
  style?: CSSProperties;
  children: ReactNode;
}

const slideAnimationDefault = {
  side: 'left',
  shift: MOTION_ANIMATION_SHIFT,
  duration: MOTION_ANIMATION_DURATION,
  delay: MOTION_ANIMATION_DELAY,
  isExitAbsolute: false,
} as const satisfies Required<SlideAnimation>

export const AnimatedSlideContainer: FC<AnimatedSlideContainerProps> = ({
  animation,
  as = 'div',
  disablePointer = true,
  className = '',
  style,
  children,
}) => {
  const {
    side,
    shift,
    duration,
    delay,
    isExitAbsolute,
  } = { ...slideAnimationDefault, ...animation };
  const { pointerEvents, onAnimationStart, onAnimationComplete } = usePointerLockUtil(disablePointer);
  const MotionComponent = motionElementsMap[as];
  const sides = Array.isArray(side) ? side : [ side ];

  const x =
    (sides.includes('right') ? shift : 0) +
    (sides.includes('left') ? -shift : 0);

  const y =
    (sides.includes('down') ? shift : 0) +
    (sides.includes('up') ? -shift : 0);

  return (
    <MotionComponent
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
          ease: 'easeOut',
        }
      }}
      exit={{
        opacity: 0,
        x: x,
        y: y,
        position: isExitAbsolute ? 'absolute' : undefined,
        transition: {
          duration: duration,
          ease: 'easeIn',
        }
      }}
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
      className={clsx(styles.container, className)}
      style={{ '--pointer-events': pointerEvents, ...style } as CSSProperties}
    >
      {children}
    </MotionComponent>
  );
}
