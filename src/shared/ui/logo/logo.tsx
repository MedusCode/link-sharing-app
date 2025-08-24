import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { ReactComponent as LargeLogo } from './icons/logo-devlinks-large.svg';
import { ReactComponent as SmallLogo } from './icons/logo-devlinks-small.svg';
import styles from './logo.module.css';


interface LogoProps {
  size?: 'large' | 'small';
  className?: HTMLAttributes<HTMLElement>['className'];
}

export const Logo: FC<LogoProps> = ({
  size = 'large',
  className = ''
}) => {

  return (
    <Link className={clsx(styles.link, className)} to={'/'}>
      {
        size === 'large'
          ? <LargeLogo className={styles.logo} />
          : <SmallLogo className={styles.logo} />
      }
    </Link>
  );
}
