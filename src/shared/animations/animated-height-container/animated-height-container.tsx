import { CSSProperties, FC, HTMLAttributes, ReactNode, useState } from 'react';
import clsx from 'clsx';

import { MOTION_ANIMATION_DELAY, MOTION_ANIMATION_DURATION, motionElementsMap } from '@shared/config';
import { useHeightObserverUtil, usePointerLockUtil } from '@shared/lib';

import styles from './animated-height-container.module.css';
import { HeightAnimation } from './animated-height-container.types';


interface AnimatedHeightContainerProps {
  animation: Partial<HeightAnimation>;
  as?: keyof typeof motionElementsMap;
  disablePointer?: boolean;
  className?: HTMLAttributes<HTMLElement>['className'];
  children: ReactNode;
}

const heightAnimationDefault: Required<HeightAnimation> = {
  duration: MOTION_ANIMATION_DURATION * 2 + MOTION_ANIMATION_DELAY,
  ease: 'easeInOut',
  initial: false,
} as const satisfies Required<HeightAnimation>;

export const AnimatedHeightContainer: FC<AnimatedHeightContainerProps> = ({
  animation,
  as = 'div',
  disablePointer = true,
  className = '',
  children,
}) => {
  const { duration, ease, initial } = { ...heightAnimationDefault, ...animation };
  const { pointerEvents, onAnimationStart, onAnimationComplete } = usePointerLockUtil(disablePointer);
  const [ height, setHeight ] = useState<number | 'auto'>('auto');
  const ref = useHeightObserverUtil<HTMLDivElement>((h) => setHeight(h))
  const MotionComponent = motionElementsMap[as];

  return (
    <MotionComponent
      animate={{ height }}
      transition={{ duration, ease }}
      initial={initial}
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
      className={styles.outer_wrapper}
      style={{ '--pointer-events': pointerEvents, } as CSSProperties}
    >
      <div className={clsx(styles.inner_wrapper, className)} ref={ref}>
        {children}
      </div>
    </MotionComponent>
  );
};
