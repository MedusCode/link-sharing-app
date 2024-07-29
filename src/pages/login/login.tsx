import { FC } from 'react';
import styles from './login.module.css';
import Logo from '../../components/logo/logo';
import LoginForm from '../../components/login-form/login-form';

const Login: FC = () => {

  return (
    <div className={styles.page}>
      <div className={styles.body}>
        <Logo className={styles.logo} />
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <h1 className={styles.heading}>Login</h1>
            <span>Add your details below to get back into the app</span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
