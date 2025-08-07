import { FC } from 'react';
import styles from './tabs.module.css';
import TabsLink from './tabs-link/tabs-link';
import ITabItem from '../../types/tab-item.type';

interface ITabsProps {
  items: ITabItem[]
}

const Tabs: FC<ITabsProps> = ({ items }) => {

  return (
    <ul className={styles.container}>
      {items.map(tab =>
        <li key={tab.content.text}>
          <TabsLink
            to={tab.content.to}
            isActive={tab.isActive}
            IconElement={tab.content.IconElement}
          >
            {tab.content.text}
          </TabsLink>
        </li>
      )}
    </ul>
  );
}

export default Tabs;
