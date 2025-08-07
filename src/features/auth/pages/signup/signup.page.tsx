import { FC } from 'react';
import styles from './signup.page.module.css';
import AuthSection from '../../components/auth-section/auth-section';
import SignupForm from '../../components/signup-form/signup-form';
import useHeightObserver from '../../hooks/use-height-observer';
import useHeightAnimationContext from '../../hooks/use-height-animation-context';
import AnimatedSection from '../../../../shared/animations/section.animation';
import signupContentPreset from '../../presets/signup-content.preset';
import signupAnimationPreset from '../../presets/signup-animation.preset';

const { heading, subheading, footer } = signupContentPreset;

const SignupPage: FC = () => {
  const { setHeight } = useHeightAnimationContext();
  const ref = useHeightObserver<HTMLDivElement>((height) => setHeight(height))

  return (
    <AnimatedSection animation={signupAnimationPreset} className={styles.container} sectionRef={ref}>
      <AuthSection heading={heading} subheading={subheading} footer={footer}>
        <SignupForm />
      </AuthSection>
    </AnimatedSection>
  );
}

export default SignupPage;
