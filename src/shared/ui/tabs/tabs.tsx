import { FC } from 'react';

import { TabsLink } from './internal/tabs-link';
import styles from './tabs.module.css';
import { TabItem } from './tabs.types';


interface TabsProps {
  items: TabItem[]
}

export const Tabs: FC<TabsProps> = ({ items }) => {

  return (
    <ul className={styles.container}>
      {items.map(tab =>
        <li key={tab.text}>
          <TabsLink
            to={tab.to}
            IconElement={tab.IconElement}
          >
            {tab.text}
          </TabsLink>
        </li>
      )}
    </ul>
  );
}
