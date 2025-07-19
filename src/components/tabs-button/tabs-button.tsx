import { FC } from 'react';
import styles from './tabs-button.module.css';
import TIconElement from '../../types/icon-element.type';

interface ITabsButtonProps {
  children: string;
  IconElement?: TIconElement;
}

const TabsButton: FC<ITabsButtonProps> = ({ children, IconElement }) => {

  return (
    <button className={styles.tab}>
      {IconElement ? <IconElement className={styles.icon} /> : ''}
      {children}
    </button>
  );
}

export default TabsButton;
