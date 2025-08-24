import { FC, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './header-container.module.css';


interface HeaderProps {
  children: ReactNode;
  className?: HTMLAttributes<HTMLElement>['className'];
}

export const HeaderContainer: FC<HeaderProps> = ({
  children,
  className = ''
}) => {

  return (
    <header className={clsx(styles.header, className)}>
      {children}
    </header>
  );
}
