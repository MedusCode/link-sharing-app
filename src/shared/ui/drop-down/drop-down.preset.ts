import { IconElement } from '@shared/lib';

import { ReactComponent as IconPlaceholder } from './icons/icon-placeholder.svg';


interface DropDownPreset {
  placeholder: {
    text: string;
    IconElement: IconElement;
  }
}

export const dropDownPreset = {
  placeholder: {
    text: 'Select',
    IconElement: IconPlaceholder,
  }
} as const satisfies DropDownPreset;
