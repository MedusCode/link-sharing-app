import { ANIMATION_SECTION_DELAY, ANIMATION_SECTION_DURATION } from '../../../shared/constants/animations';
import { Transition } from 'framer-motion';

const authHeightAnimationPreset: Transition = {
  duration: ANIMATION_SECTION_DURATION * 2 + ANIMATION_SECTION_DELAY,
  easy: 'easeInOut',
}

export default authHeightAnimationPreset;
