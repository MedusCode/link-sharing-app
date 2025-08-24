import { Path, Paths } from '@shared/router';
import { TabItem } from '@shared/ui';

import { ReactComponent as LinkIcon } from './icons/icon-links-header.svg';
import { ReactComponent as ProfileDetailsIcon } from './icons/icon-profile-details.svg';


interface EditorLayoutPreset {
  navigation : {
    tabs: TabItem[];
    button: {
      text: string;
      to: Path;
    }
  }
}

export const editorLayoutPreset: EditorLayoutPreset = {
  navigation: {
    tabs: [
      {
        text: 'Links',
        IconElement: LinkIcon,
        to: Paths.EDITOR.LINKS,
      },
      {
        text: 'Profile Details',
        IconElement: ProfileDetailsIcon,
        to: Paths.EDITOR.PROFILE
      }
    ],
    button: {
      text: 'Preview',
      to: Paths.EDITOR.LINKS,
    }
  }
}
