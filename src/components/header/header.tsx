import { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './header.module.css';

interface IHeaderProps {
  children: ReactNode;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const Header: FC<IHeaderProps> = ({
  children,
  className = ''
}) => {

  return (
    <header className={`${styles.header} ${className}`}>
      {children}
    </header>
  );
}

export default Header;
