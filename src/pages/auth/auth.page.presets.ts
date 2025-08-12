import { MOTION_ANIMATION_DELAY, MOTION_ANIMATION_DURATION } from '@animations/config/animation.constants';
import IHeightAnimation from '@animations/types/height-animation.type';
import IOutletAnimation from '@animations/types/outlet-animation.type';

export const authOutletAnimationPreset: IOutletAnimation = {
  mode: 'sync',
  initial: false
}

export const authHeightAnimationPreset: IHeightAnimation = {
  duration: MOTION_ANIMATION_DURATION * 2 + MOTION_ANIMATION_DELAY,
  ease: 'easeInOut',
}
