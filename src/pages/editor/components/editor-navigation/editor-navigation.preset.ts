import { Paths } from '@app/router/paths';
import INavigationPreset from '@pages/editor/types/navigation.preset.type';
import { ReactComponent as LinkIcon } from "@shared/assets/images/icon-link.svg";
import { ReactComponent as ProfileDetailsIcon } from "@shared/assets/images/icon-profile-details.svg";

export const editorNavigationPreset: INavigationPreset = {
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
