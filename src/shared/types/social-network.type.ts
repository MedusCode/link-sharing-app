import THexColor from '@shared/types/hex-color.type';
import TIconElement from '@shared/types/icon-element.type';

export interface ISocialNetwork {
  name: string;
  color: THexColor
  IconElement?: TIconElement;
  isColorLight?: boolean;
  example?: string;
}
