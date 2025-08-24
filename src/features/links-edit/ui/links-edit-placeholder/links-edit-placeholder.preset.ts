import { IconElement } from 'shared/lib';

import { ReactComponent as IllustrationIcon } from './icons/illustration-empty.svg';


interface LinksEditPlaceholderPreset {
  IconElement: IconElement;
  heading: string;
  description: string;
}

export const linksEditPlaceholderPreset = {
  IconElement: IllustrationIcon,
  heading: 'Let’s get you started',
  description: 'Use the “Add new link” button to get started. Once you have more than one link,\n' +
    '        you can reorder and edit\n' +
    '        them. We’re here to help you share your profiles with everyone!'
} as const satisfies LinksEditPlaceholderPreset;
