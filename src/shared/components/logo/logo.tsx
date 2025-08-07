import { FC, HTMLAttributes } from 'react';
import styles from './logo.module.css';
import { ReactComponent as LargeLogo } from '../../../assets/images/logo-devlinks-large.svg';
import { ReactComponent as SmallLogo } from '../../../assets/images/logo-devlinks-small.svg';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

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
