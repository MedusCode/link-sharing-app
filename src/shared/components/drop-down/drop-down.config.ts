import ISlideAnimation from '@animations/types/slide-animation.type';
import { ReactComponent as LinkIcon } from '@shared/assets/images/icon-link.svg';
import TIconElement from '@shared/types/icon-element.type';

export const DROP_DOWN_SIZING_GAP: number = 35;
export const DROP_DOWN_MIN_BOTTOM_SPACE: number = 240;

export const dropDownPlaceholderPreset: {
  placeholder: string;
  IconElement: TIconElement;
} = {
  placeholder: 'Select',
  IconElement: LinkIcon,
}

export const dropDownAnimationPreset: {
  bottom: ISlideAnimation;
  top: ISlideAnimation;
} = {
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
};
