import { IconElement } from '@shared/lib';


export interface DropDownItem<T> {
  value: T;
  text: string;
  IconElement?: IconElement | null;
}
