import TIconElement from './icon-element.type';

interface ITabItem {
  text: string;
  onClick?: () => void;
  active?: boolean;
  icon?: TIconElement | null;
}

export default ITabItem
