import { SlideAnimation } from '@shared/animations';


export const DROP_DOWN_OFFSET = 8 as const;
export const DROP_DOWN_PADDING = 50 as const;
export const DROP_DOWN_FLIP_PADDING = 290 as const;

interface DropDownAnimationConfig {
  bottom: SlideAnimation;
  top: SlideAnimation;
}

export const dropDownAnimationConfig = {
  bottom: {
    side: 'up',
    shift: 8,
    duration: 0.3,
  },
  top: {
    side: 'down',
    shift: 8,
    duration: 0.3,
  }
} as const satisfies DropDownAnimationConfig;
