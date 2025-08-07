import { FC, ReactNode } from 'react';
import styles from './auth.layout.module.css';
import Logo from '../../../../shared/components/logo/logo';
import AnimatedSectionHeight from '../../animations/section-height.animation';

interface IAuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav>
          <Logo />
        </nav>
      </header>
      <AnimatedSectionHeight className={styles.main}>
        { children }
      </AnimatedSectionHeight>
    </div>
  );
};

export default AuthLayout;
