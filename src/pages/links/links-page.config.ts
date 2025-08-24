import { SlideAnimation } from '@shared/animations';
import { MOTION_ANIMATION_DURATION } from '@shared/config/animations.config';


export const linksAnimationConfig = {
  side: 'right',
  duration: MOTION_ANIMATION_DURATION,
} as const satisfies SlideAnimation
