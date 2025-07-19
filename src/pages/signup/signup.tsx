import { FC } from 'react';
import styles from './signup.module.css';
import AuthContainer from '../../components/auth-container/auth-container';
import SignupForm from '../../components/signup-form/signup-form';
import AuthAnimatedSection from '../../animations/auth-animated-section/auth-animated-section';
import { animationsDuration } from '../../constants/animations';

const Signup: FC = () => {

  return (
    <AuthAnimatedSection side={'left'}>
      <AuthContainer heading={'Create account'} subheading={'Let’s get you started sharing your links!'}>
        <SignupForm />
      </AuthContainer>
    </AuthAnimatedSection>
  );
}

export default Signup;
