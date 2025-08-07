import { FC } from 'react';
import styles from './tabs-link.module.css';
import TIconElement from '../../../types/icon-element.type';
import TRoutePath from '../../../types/route-path.type';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export interface ITabsLinkProps {
  children: string;
  to: TRoutePath;
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
    <Link className={clsx(styles.tab, { [styles.tab_active]: isActive })} to={to}>
      {IconElement && <IconElement className={styles.icon} />}
      {children}
    </Link>
  )
}

export default TabsLink;
