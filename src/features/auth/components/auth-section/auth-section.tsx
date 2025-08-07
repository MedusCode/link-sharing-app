import { FC, ReactNode } from 'react';
import styles from './auth-section.module.css';
import AppLink from '../../../../shared/components/app-link/app-link';

interface IAuthSectionProps {
  children: ReactNode;
  heading: string;
  subheading?: string;
  footer?: {
    text: string;
    linkText: string;
    link: string;
  }
}

const AuthSection: FC<IAuthSectionProps> = ({
  children,
  heading,
  subheading,
  footer
}) => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>{heading}</h1>
        { subheading && <span>{subheading}</span> }
      </div>
      {children}
      {
        footer &&
        <div className={styles.footer}>
          <span className={styles.text}>{footer.text} <AppLink to={footer.link}>{footer.linkText}</AppLink></span>
        </div>
      }
    </div>
  );
}

export default AuthSection;
