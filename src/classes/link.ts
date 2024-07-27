import TIconElement from '../types/icon-element';
import THexColor from '../types/hex-color';

export interface ILink {
  value: string;
  name: string;
  color: THexColor;
  isColorLight: boolean;
  icon: TIconElement | null;
}

export default class Link implements ILink {
  value: string;
  name: string;
  color: THexColor;
  isColorLight: boolean;
  icon: TIconElement | null;

  constructor(value: string, name: string, color: THexColor, icon: TIconElement | null = null, isColorLight: boolean = false) {
    this.value = value;
    this.name = name;
    this.color = color;
    this.isColorLight = isColorLight;
    this.icon = icon;
  }

  get dropDownItems() {
    return ({value: this.value, text: this.name, icon: this.icon })
  }
}
