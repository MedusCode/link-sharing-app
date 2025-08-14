import clsx from 'clsx';
import { CSSProperties, FC, HTMLAttributes, ReactNode, useState } from 'react';

import styles from '@animations/components/animated-height-container/animated-height-container.module.css';
import { MOTION_ANIMATION_DELAY, MOTION_ANIMATION_DURATION } from '@animations/config/animation.constants';
import elementsMap from '@animations/config/elements.map';
import useHeightObserver from '@animations/hooks/use-height-observer';
import usePointerLock from '@animations/hooks/use-pointer-lock';
import IHeightAnimation from '@animations/types/height-animation.type';


interface AnimatedHeightContainerProps {
  animation: IHeightAnimation;
  as?: keyof typeof elementsMap;
  disablePointer?: boolean;
  className?: HTMLAttributes<HTMLElement>['className'];
  children: ReactNode;
}

const AnimatedHeightContainer: FC<AnimatedHeightContainerProps> = ({
  animation: {
    duration = MOTION_ANIMATION_DURATION * 2 + MOTION_ANIMATION_DELAY,
    ease = 'easeInOut',
    initial = false,
  },
  as = 'div',
  disablePointer = true,
  className = '',
  children,
}) => {
  const { pointerEvents, onAnimationStart, onAnimationComplete } = usePointerLock(disablePointer);
  const [ height, setHeight ] = useState<number | 'auto'>('auto');
  const ref = useHeightObserver<HTMLDivElement>((h) => setHeight(h))
  const MotionComponent = elementsMap[as];

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

export default AnimatedHeightContainer;
