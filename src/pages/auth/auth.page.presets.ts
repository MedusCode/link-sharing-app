import { MOTION_ANIMATION_DELAY, MOTION_ANIMATION_DURATION } from '@animations/config/animation.constants';
import IHeightAnimation from '@animations/types/height-animation.type';
import IOutletAnimation from '@animations/types/outlet-animation.type';
import ISlideAnimation from '@animations/types/slide-animation.type';

export const authOutletAnimationPreset = {
  mode: 'sync',
  initial: false
} as const satisfies IOutletAnimation

export const authHeightAnimationPreset = {
  duration: MOTION_ANIMATION_DURATION * 2 + MOTION_ANIMATION_DELAY,
  ease: 'easeInOut',
} as const satisfies IHeightAnimation

export const authAnimationPreset = {
  side: 'left',
  duration: MOTION_ANIMATION_DURATION,
} as const satisfies ISlideAnimation
