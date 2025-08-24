import { IconElement } from '@shared/lib';
import { Path } from '@shared/router';


export interface TabItem {
  text: string;
  to: Path;
  match?: 'exact' | 'start';
  IconElement?: IconElement;
}
