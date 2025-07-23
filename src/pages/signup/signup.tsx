import { FC } from 'react';
import styles from './signup.module.css';
import AuthContainer from '../../components/auth-container/auth-container';
import SignupForm from '../../components/signup-form/signup-form';
import AnimatedSection from '../../animations/animated-section/animated-section';
import { useOutletContext } from 'react-router-dom';
import THeightContext from '../../types/height-context';
import useHeightObserver from '../../services/hooks/use-height-observer';
import { animationsDelay, animationsDuration } from '../../constants/animations';

const Signup: FC = () => {
  const { setHeight } = useOutletContext<THeightContext>();
  const ref = useHeightObserver<HTMLDivElement>((height) => setHeight(height))

  return (
    <AnimatedSection
      className={styles.container}
      side={'left'}
      delay={animationsDuration + animationsDelay}
      isExitAbsolut={true}
      sectionRef={ref}
    >
      <AuthContainer heading={'Create account'} subheading={'Let’s get you started sharing your links!'}>
        <SignupForm />
      </AuthContainer>
    </AnimatedSection>
  );
}

export default Signup;
