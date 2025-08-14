import { ReactComponent as LinkIcon } from '@shared/assets/images/icon-link.svg';
import ITextInputContent from '@shared/types/text-input-content.type';

interface IAddLinkCardPreset {
  headingNumText: string;
  removeButtonText: string;
  platformDropDown: {
    label: string;
  }
  linkInput: ITextInputContent;
}

const addLinkCardPreset = {
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
} as const satisfies IAddLinkCardPreset;

export default addLinkCardPreset;
