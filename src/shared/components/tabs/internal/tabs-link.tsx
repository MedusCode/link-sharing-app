import clsx from 'clsx';
import { FC } from 'react';
import { Link, To } from 'react-router-dom';

import TIconElement from '@shared/types/icon-element.type';

import styles from '../tabs.module.css';


export interface ITabsLinkProps {
  children: string;
  to: To;
  isActive?: boolean;
  IconElement?: TIconElement;
}

const TabsLink: FC<ITabsLinkProps> = ({
  children,
  to,
  isActive = false,
  IconElement,
}) => {

  return (
    <Link to={to} className={clsx(styles.tab, { [styles.tab__active]: isActive })} aria-disabled={isActive}>
      {IconElement && <IconElement className={styles.icon} />}
      {children}
    </Link>
  )
}

export default TabsLink;
