import { MOTION_ANIMATION_DURATION } from '@animations/config/animation.constants';
import ISlideAnimation from '@animations/types/slide-animation.type';
import ISectionHeaderContent from '@shared/types/section-heading-content.type';

export const linksSectionHeaderPreset = {
  heading: 'Customize your links',
  description: 'Add/edit/remove links below and then share all your profiles with the world!'
} as const satisfies ISectionHeaderContent

export const linksAnimationPreset = {
  side: 'right',
  duration: MOTION_ANIMATION_DURATION,
} as const satisfies ISlideAnimation
