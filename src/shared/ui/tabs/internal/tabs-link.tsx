import { FC } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { IconElement } from '../../../lib';
import { Path } from '../../../router';
import styles from '../tabs.module.css';


export interface TabsLinkProps {
  children: string;
  to: Path;
  match?: 'exact' | 'start';
  IconElement?: IconElement;
}

export const TabsLink: FC<TabsLinkProps> = ({
  children,
  to,
  match = 'exact',
  IconElement,
}) => {
  const end = match === 'exact';

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        clsx(
          styles.tab,
          isActive && styles.tab__active,
        )
      }
    >
      {IconElement && <IconElement className={styles.icon} aria-hidden />}
      {children}
    </NavLink>
  );
};
