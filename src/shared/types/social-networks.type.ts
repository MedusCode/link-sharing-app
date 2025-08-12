import THexColor from '@shared/types/hex-color.type';
import TIconElement from '@shared/types/icon-element.type';

interface ISocialNetwork {
  value: string;
  name: string;
  color: THexColor
  icon?: TIconElement;
  isColorLight?: boolean;
}

export default ISocialNetwork;
