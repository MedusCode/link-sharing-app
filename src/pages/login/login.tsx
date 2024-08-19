import { FC } from 'react';
import styles from './login.module.css';
import LoginForm from '../../components/login-form/login-form';
import AuthContainer from '../../components/auth-container/auth-container';

const Login: FC = () => {

  return (
    <AuthContainer heading={'Login'} subheading={'Add your details below to get back into the app'}>
      <LoginForm />
    </AuthContainer>
  );
}

export default Login;
