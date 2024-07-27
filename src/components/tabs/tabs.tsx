import { FC } from 'react';
import styles from './tabs.module.css';
import ITabItem from '../../types/tabs-item';
import { nanoid } from 'nanoid';
import TabsButton from '../tabs-button/tabs-button';

interface ITabsProps {
  items: ITabItem[];
}

const Tabs: FC<ITabsProps> = ({ items }) => {

  return (
    <div className={styles.container}>
      {items.map(tab =>
        <TabsButton key={nanoid()} IconElement={tab.icon ? tab.icon : undefined}>
          {tab.text}
        </TabsButton>
      )}
    </div>
  );
}

export default Tabs;
