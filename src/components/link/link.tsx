import { FC } from 'react';
import styles from './link.module.css';

interface ILinkProps {
    children: string;
    href: string;
}

const Link: FC<ILinkProps> = ({ children, href }) => {

  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
}

export default Link;
