import { ReactComponent as IllustrationIcon } from '@shared/assets/images/illustration-empty.svg';
import TIconElement from '@shared/types/icon-element.type';

interface IListPlaceholderPreset {
  IconElement: TIconElement;
  heading: string;
  description: string;
}

const listPlaceholderPreset = {
  IconElement: IllustrationIcon,
  heading: 'Let’s get you started',
  description: 'Use the “Add new link” button to get started. Once you have more than one link,\n' +
    '        you can reorder and edit\n' +
    '        them. We’re here to help you share your profiles with everyone!'
} as const satisfies IListPlaceholderPreset;

export default listPlaceholderPreset;
