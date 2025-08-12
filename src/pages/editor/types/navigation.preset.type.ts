import TAppPath from '@app/router/path.type';
import ITabItemContent from '@shared/types/tab-item-content.type';

interface IEditorNavigation {
  tabs: ITabItemContent[];
  button: {
    text: string;
    to: TAppPath;
  }
}

export default IEditorNavigation;
