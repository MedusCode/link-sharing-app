import { HeightAnimation, OutletAnimation, SlideAnimation } from '@shared/animations';
import { MOTION_ANIMATION_DELAY, MOTION_ANIMATION_DURATION } from '@shared/config';


export const authOutletAnimationConfig = {
  mode: 'sync',
  initial: false
} as const satisfies OutletAnimation;

export const authHeightAnimationConfig = {
  duration: MOTION_ANIMATION_DURATION * 2 + MOTION_ANIMATION_DELAY,
  ease: 'easeInOut',
} as const satisfies HeightAnimation;

export const authAnimationConfig = {
  side: 'left',
  duration: MOTION_ANIMATION_DURATION,
} as const satisfies SlideAnimation;
