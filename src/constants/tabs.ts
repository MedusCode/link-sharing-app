import ITabProps from '../types/tabs-item.type';
import { ReactComponent as LinkIcon } from "../assets/images/icon-link.svg";
import { ReactComponent as ProfileDetailsIcon } from "../assets/images/icon-profile-details.svg";

const tabItems: Record<string, ITabProps> = {
  '/': {
    text: 'Links',
    icon: LinkIcon,
  },
  '/profile': {
    text: 'Profile Details',
    icon: ProfileDetailsIcon,
  }
}

export default tabItems;
