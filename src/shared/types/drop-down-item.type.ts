import TIconElement from '@shared/types/icon-element.type';

interface IDropDownItem<T> {
  value: T;
  text: string;
  IconElement?: TIconElement | null;
}

export default IDropDownItem;
