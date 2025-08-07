import TRoutePath from './route-path.type';
import TIconElement from './icon-element.type';

export interface ITabItemContent {
  text: string;
  to: TRoutePath;
  IconElement?: TIconElement;
}

interface ITabItem {
  content: ITabItemContent;
  isActive?: boolean;
}

export default ITabItem;
