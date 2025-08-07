import THexColor from './hex-color.type';
import TIconElement from './icon-element.type';

interface ISocialNetwork {
  value: string;
  name: string;
  color: THexColor
  icon?: TIconElement;
  isColorLight?: boolean;
}

export default ISocialNetwork;
