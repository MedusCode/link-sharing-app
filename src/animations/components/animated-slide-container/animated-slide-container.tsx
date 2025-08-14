import clsx from 'clsx';
import { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';

import styles from '@animations/components/animated-slide-container/animated-slide-container.module.css';
import {
  MOTION_ANIMATION_DELAY,
  MOTION_ANIMATION_DURATION,
  MOTION_ANIMATION_SHIFT
} from '@animations/config/animation.constants';
import elementsMap from '@animations/config/elements.map';
import usePointerLock from '@animations/hooks/use-pointer-lock';
import ISlideAnimation from '@animations/types/slide-animation.type';


interface IAnimatedSlideContainerProps {
  animation?: ISlideAnimation;
  as?: keyof typeof elementsMap;
  disablePointer?: boolean;
  className?: HTMLAttributes<HTMLElement>['className'];
  style?: CSSProperties;
  children: ReactNode;
}

const DEFAULT_ANIMATION: Required<ISlideAnimation> = {
  side: 'left',
  shift: MOTION_ANIMATION_SHIFT,
  duration: MOTION_ANIMATION_DURATION,
  delay: MOTION_ANIMATION_DELAY,
  isExitAbsolute: false,
};

const AnimatedSlideContainer: FC<IAnimatedSlideContainerProps> = ({
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
  } = { ...DEFAULT_ANIMATION, ...animation };
  const { pointerEvents, onAnimationStart, onAnimationComplete } = usePointerLock(disablePointer);
  const MotionComponent = elementsMap[as];
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

export default AnimatedSlideContainer;
