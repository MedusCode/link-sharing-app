import { To } from 'react-router-dom';

import TIconElement from '@shared/types/icon-element.type';


interface ITabItemContent {
  text: string;
  to: To;
  IconElement?: TIconElement;
}

export default ITabItemContent;
