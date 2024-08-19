import { FC } from 'react';
import styles from './auth-container.module.css';
import Logo from '../logo/logo';

interface IAuthContainerProps {
  children: React.ReactNode;
  heading: string;
  subheading?: string;
}

const AuthContainer: FC<IAuthContainerProps> = ({ children, heading, subheading }) => {

  return (
    <div className={styles.page}>
      <main className={styles.body}>
        <Logo className={styles.logo} />
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <h1 className={styles.heading}>{heading}</h1>
            {subheading && <span>{subheading}</span>}
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}

export default AuthContainer;
