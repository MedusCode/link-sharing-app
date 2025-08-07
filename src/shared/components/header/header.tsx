import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './header.module.css';
import clsx from 'clsx';

interface IHeaderProps {
  children: ReactNode;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const Header: FC<IHeaderProps> = ({
  children,
  className = ''
}) => {

  return (
    <header className={clsx(styles.header, className)}>
      {children}
    </header>
  );
}

export default Header;
