import { SlideAnimation } from '@shared/animations';
import { MOTION_ANIMATION_DELAY, MOTION_ANIMATION_DURATION } from '@shared/config/animations.config';


export const loginAnimationConfig = {
  side: 'left',
  delay: MOTION_ANIMATION_DURATION + MOTION_ANIMATION_DELAY,
  isExitAbsolute: true
} as const satisfies SlideAnimation
