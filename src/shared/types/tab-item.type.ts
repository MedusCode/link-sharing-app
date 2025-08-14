import ITabItemContent from '@shared/types/tab-item-content.type';

interface ITabItem extends ITabItemContent {
  isActive?: boolean;
}

export default ITabItem;
