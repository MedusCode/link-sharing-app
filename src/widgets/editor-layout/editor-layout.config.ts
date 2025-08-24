import { OutletAnimation, SlideAnimation } from '@shared/animations';
import { MOTION_ANIMATION_DURATION } from '@shared/config';


export const editorOutletAnimationConfig = {
  mode: 'wait',
  initial: false,
} as const satisfies OutletAnimation;

export const editorHeaderAnimationConfig = {
  side: 'up',
  duration: MOTION_ANIMATION_DURATION,
} as const satisfies SlideAnimation;

export const editorDemoAnimationConfig = {
  side: 'left',
  duration: MOTION_ANIMATION_DURATION,
} as const satisfies SlideAnimation;

export const editorSectionAnimationConfig = {
  side: 'right',
  duration: MOTION_ANIMATION_DURATION,
} as const satisfies SlideAnimation;
