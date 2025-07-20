import TIconElement from '../types/icon-element.type';
import THexColor from '../types/hex-color.type';

export interface ILink {
  value: string;
  name: string;
  color: THexColor;
  isColorLight: boolean;
  IconElement: TIconElement | null;
}

export default class Link implements ILink {
  value: string;
  name: string;
  color: THexColor;
  isColorLight: boolean;
  IconElement: TIconElement | null;

  constructor(value: string, name: string, color: THexColor, icon: TIconElement | null = null, isColorLight: boolean = false) {
    this.value = value;
    this.name = name;
    this.color = color;
    this.isColorLight = isColorLight;
    this.IconElement = icon;
  }

  get dropDownItems() {
    return ({value: this.value, text: this.name, icon: this.IconElement })
  }
}
