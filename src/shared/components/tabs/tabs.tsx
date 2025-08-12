import { FC } from 'react';

import ITabItem from '@shared/types/tab-item.type';

import TabsLink from './internal/tabs-link';
import styles from './tabs.module.css';

interface ITabsProps {
  items: ITabItem[]
}

const Tabs: FC<ITabsProps> = ({ items }) => {

  return (
    <ul className={styles.container}>
      {items.map(tab =>
        <li key={tab.text}>
          <TabsLink
            to={tab.to}
            isActive={tab.isActive}
            IconElement={tab.IconElement}
          >
            {tab.text}
          </TabsLink>
        </li>
      )}
    </ul>
  );
}

export default Tabs;
