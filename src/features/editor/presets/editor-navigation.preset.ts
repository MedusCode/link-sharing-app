import { ReactComponent as LinkIcon } from "../../../assets/images/icon-link.svg";
import { ReactComponent as ProfileDetailsIcon } from "../../../assets/images/icon-profile-details.svg";
import { ROUTES } from '../../../shared/constants/routes';
import INavigationPreset from '../types/navigation.preset.type';

export const editorNavigationPreset: INavigationPreset = {
  tabs: [
    {
      text: 'Links',
      IconElement: LinkIcon,
      to: ROUTES.EDITOR.LINKS,
    },
    {
      text: 'Profile Details',
      IconElement: ProfileDetailsIcon,
      to: ROUTES.EDITOR.PROFILE
    }
  ],
  button: {
    text: 'Preview',
    to: ROUTES.EDITOR.LINKS,
  },
}
