import TRoutePath from '../../../shared/types/route-path.type';
import { ITabItemContent } from '../../../shared/types/tab-item.type';

interface INavigationPreset {
  tabs: ITabItemContent[];
  button: {
    text: string;
    to: TRoutePath;
  }
}

export default INavigationPreset;
