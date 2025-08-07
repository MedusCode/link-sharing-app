import { ANIMATION_SECTION_DELAY, ANIMATION_SECTION_DURATION } from '../../../shared/constants/animations';
import ISectionAnimation from '../../../shared/types/section-animation.type';

const loginAnimationPreset: ISectionAnimation = {
  side: 'left',
  delay: ANIMATION_SECTION_DURATION + ANIMATION_SECTION_DELAY,
  isExitAbsolut: true
}

export default loginAnimationPreset;
