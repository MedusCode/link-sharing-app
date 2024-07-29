import { FC } from 'react';
import styles from './logo.module.css';
import { ReactComponent as LargeLogo } from '../../assets/images/logo-devlinks-large.svg';
import { ReactComponent as SmallLogo } from '../../assets/images/logo-devlinks-small.svg';

interface ILogoProps {
    size?: 'large' | 'small';
    className?: string;
}

const Logo: FC<ILogoProps> = ({ size = 'large', className }) => {

  return (
    <a className={styles.link} href={'/'}>
      {
        size === 'large'
          ? <LargeLogo className={className} />
          : <SmallLogo />
      }
    </a>
  );
}

export default Logo;
