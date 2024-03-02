import ITabProps from '../types/tabs-props';
import { ReactComponent as LinkIcon } from "../assets/images/icon-link.svg";

const tabsValues: ITabProps[] = [
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

export default tabsValues;
