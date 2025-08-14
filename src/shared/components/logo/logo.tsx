import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LargeLogo } from '@shared/assets/images/logo-devlinks-large.svg';
import { ReactComponent as SmallLogo } from '@shared/assets/images/logo-devlinks-small.svg';

import styles from './logo.module.css';


interface ILogoProps {
  size?: 'large' | 'small';
  className?: HTMLAttributes<HTMLElement>['className'];
}

const Logo: FC<ILogoProps> = ({
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

export default Logo;
