import { FC } from 'react';
import styles from './signup.module.css';
import AuthContainer from '../../components/auth-container/auth-container';
import SignupForm from '../../components/signup-form/signup-form';

const Signup: FC = () => {

  return (
    <AuthContainer heading={'Create account'} subheading={'Let’s get you started sharing your links!'}>
      <SignupForm />
    </AuthContainer>
  );
}

export default Signup;
