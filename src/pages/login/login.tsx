import { FC } from 'react';
import styles from './login.module.css';
import LoginForm from '../../components/login-form/login-form';
import AuthContainer from '../../components/auth-container/auth-container';
import AuthAnimatedSection from '../../animations/auth-animated-section/auth-animated-section';

const Login: FC = () => {

  return (
    <AuthAnimatedSection side={'right'}>
      <AuthContainer heading={'Login'} subheading={'Add your details below to get back into the app'}>
        <LoginForm />
      </AuthContainer>
    </AuthAnimatedSection>
  );
}

export default Login;
