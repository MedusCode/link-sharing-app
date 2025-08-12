import { MOTION_ANIMATION_DURATION } from '@animations/config/animation.constants';
import ISlideAnimation from '@animations/types/slide-animation.type';
import ISectionHeaderContent from '@shared/types/section-heading-content.type';

export const linksSectionHeaderPreset: ISectionHeaderContent = {
  heading: 'Customize your links',
  description: 'Add/edit/remove links below and then share all your profiles with the world!'
}

export const linksAnimationPreset: ISlideAnimation = {
  side: 'right',
  duration: MOTION_ANIMATION_DURATION,
}
