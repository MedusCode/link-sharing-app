import { FC } from 'react';
import styles from './tabs.module.css';
import ITabItem from '../../types/tabs-item.type';
import { nanoid } from 'nanoid';
import TabsButton from '../tabs-button/tabs-button';

interface ITabsProps {
  items: ITabItem[];
}

const Tabs: FC<ITabsProps> = ({ items }) => {

  return (
    <ul className={styles.container}>
      {items.map(tab =>
        <li>
          <TabsButton
            key={nanoid()}
            onClick={tab.onClick}
            isActive={tab.active}
            IconElement={tab.icon ? tab.icon : undefined}
          >
            {tab.text}
          </TabsButton>
        </li>
      )}
    </ul>
  );
}

export default Tabs;
