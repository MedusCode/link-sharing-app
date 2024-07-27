import THexColor from './hex-color';
import TIconElement from './icon-element';

interface ISocialNetwork {
  value: string;
  name: string;
  color: THexColor
  icon?: TIconElement | null;
  isColorLight?: boolean;
}

export default ISocialNetwork;
