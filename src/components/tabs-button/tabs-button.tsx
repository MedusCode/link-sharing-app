import { FC } from 'react';
import styles from './tabs-button.module.css';
import TIconElement from '../../types/icon-element.type';

interface ITabsButtonProps {
  children: string;
  onClick?: () => void;
  isActive?: boolean;
  IconElement?: TIconElement;
}

const TabsButton: FC<ITabsButtonProps> = ({
  children,
  onClick,
  isActive = false,
  IconElement,
}) => {

  return (
    <button className={`${styles.tab} ${isActive ? styles.tab_active : ''}`} onClick={onClick}>
      {IconElement ? <IconElement className={styles.icon} /> : ''}
      {children}
    </button>
  );
}

export default TabsButton;
