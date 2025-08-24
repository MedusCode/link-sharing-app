import { TextInputContent } from '@shared/ui/text-input/text-input.types';

import { ReactComponent as LinkIcon } from './icons/icon-link.svg';


interface LinksEditCardPreset {
  headingNumText: string;
  removeButtonText: string;
  platformDropDown: {
    label: string;
  }
  linkInput: TextInputContent;
}

export const linksEditCardPreset = {
  headingNumText: 'Link #',
  removeButtonText: 'Remove',
  platformDropDown: {
    label: 'Platform',
  },
  linkInput: {
    label: 'Link',
    placeholder: 'https://exmaple.com/example',
    type: 'url',
    IconElement: LinkIcon
  }
} as const satisfies LinksEditCardPreset;
