import { FC } from 'react';
import styles from './login.module.css';
import LoginForm from '../../components/login-form/login-form';
import AuthContainer from '../../components/auth-container/auth-container';
import AnimatedSection from '../../animations/animated-section/animated-section';
import { useOutletContext } from 'react-router-dom';
import THeightContext from '../../types/height-context';
import useHeightObserver from '../../services/hooks/use-height-observer';
import { animationsDelay, animationsDuration } from '../../constants/animations';

const Login: FC = () => {
  const { setHeight } = useOutletContext<THeightContext>();
  const ref = useHeightObserver<HTMLDivElement>((height) => setHeight(height))

  return (
    <AnimatedSection
      className={styles.container}
      side={'right'}
      delay={animationsDuration + animationsDelay}
      isExitAbsolut={true}
      sectionRef={ref}
    >
      <AuthContainer heading={'Login'} subheading={'Add your details below to get back into the app'}>
        <LoginForm />
      </AuthContainer>
    </AnimatedSection>
  );
}

export default Login;
