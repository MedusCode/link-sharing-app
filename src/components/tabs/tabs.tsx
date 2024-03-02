import { FC, ReactNode } from 'react';
import styles from './tabs.module.css';
import ITabProps from '../../types/tabs-props';
import { nanoid } from 'nanoid';

interface ITabsProps {
  values: ITabProps[];
}

const Tabs: FC<ITabsProps> = ({ values }) => {


  const generateTabsList = (): ReactNode => {
    return values.map(tab => {
      return (
        <button className={styles.tab} key={nanoid()}>
          {tab.icon ? <tab.icon className={styles.icon} /> : ''}
          {tab.text}
        </button>
      )
    })
  }

  return (
    <div className={styles.tabsContainer}>
      {generateTabsList()}
    </div>
  );
}

export default Tabs;
