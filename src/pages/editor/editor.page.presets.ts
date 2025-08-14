import { MOTION_ANIMATION_DURATION } from '@animations/config/animation.constants';
import IOutletAnimation from '@animations/types/outlet-animation.type';
import ISlideAnimation from '@animations/types/slide-animation.type';
import { Paths } from '@app/router/paths';
import TAppPath from '@app/router/types';
import { ReactComponent as LinkIcon } from "@shared/assets/images/icon-link.svg";
import { ReactComponent as ProfileDetailsIcon } from "@shared/assets/images/icon-profile-details.svg";
import ITabItemContent from '@shared/types/tab-item-content.type';

interface IEditorNavigation {
  tabs: ITabItemContent[];
  button: {
    text: string;
    to: TAppPath;
  }
}

export const editorNavigationPreset: IEditorNavigation = {
  tabs: [
    {
      text: 'Links',
      IconElement: LinkIcon,
      to: Paths.EDITOR.LINKS,
    },
    {
      text: 'Profile Details',
      IconElement: ProfileDetailsIcon,
      to: Paths.EDITOR.PROFILE
    }
  ],
  button: {
    text: 'Preview',
    to: Paths.EDITOR.LINKS,
  },
}

export const editorOutletAnimationPreset = {
  mode: 'wait',
  initial: false,
} as const satisfies IOutletAnimation

export const editorHeaderAnimationPreset = {
  side: 'up',
  duration: MOTION_ANIMATION_DURATION,
} as const satisfies ISlideAnimation

export const editorDemoAnimationPreset = {
  side: 'left',
  duration: MOTION_ANIMATION_DURATION,
} as const satisfies ISlideAnimation

export const editorSectionAnimationPreset = {
  side: 'right',
  duration: MOTION_ANIMATION_DURATION,
} as const satisfies ISlideAnimation
