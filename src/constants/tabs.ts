import ITabProps from '../types/tabs-item.type';
import { ReactComponent as LinkIcon } from "../assets/images/icon-link.svg";

const tabsItems: ITabProps[] = [
  {
    text: 'Active',
    icon: LinkIcon,
  },
  {
    text: 'Default',
    icon: LinkIcon,
  },
  {
    text: 'Hover',
    icon: LinkIcon,
  }
]

export default tabsItems;
