import { ANIMATION_SECTION_DELAY, ANIMATION_SECTION_DURATION } from '../../../shared/constants/animations';
import ISectionAnimation from '../../../shared/types/section-animation.type';

const signupAnimationPreset: ISectionAnimation = {
  side: 'right',
  delay: ANIMATION_SECTION_DURATION + ANIMATION_SECTION_DELAY,
  isExitAbsolut: true
}

export default signupAnimationPreset;
