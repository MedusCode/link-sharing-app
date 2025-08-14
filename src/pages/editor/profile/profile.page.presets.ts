import { MOTION_ANIMATION_DURATION } from '@animations/config/animation.constants';
import ISlideAnimation from '@animations/types/slide-animation.type';
import ISectionHeaderContent from '@shared/types/section-heading-content.type';

export const profileSectionHeaderPreset = {
  heading: 'Profile Details',
  description: 'Add your details to create a personal touch to your profile.'
} as const satisfies ISectionHeaderContent

export const profileAnimationPreset = {
  side: 'right',
  duration: MOTION_ANIMATION_DURATION,
} as const satisfies ISlideAnimation
