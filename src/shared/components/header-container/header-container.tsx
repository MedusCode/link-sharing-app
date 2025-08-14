import clsx from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';

import styles from '@shared/components/header-container/header-container.module.css';

interface IHeaderProps {
  children: ReactNode;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const HeaderContainer: FC<IHeaderProps> = ({
  children,
  className = ''
}) => {

  return (
    <header className={clsx(styles.header, className)}>
      {children}
    </header>
  );
}

export default HeaderContainer;
