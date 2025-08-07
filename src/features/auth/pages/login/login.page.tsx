import { FC } from 'react';
import styles from './login.page.module.css';
import LoginForm from '../../components/login-form/login-form';
import AuthSection from '../../components/auth-section/auth-section';
import useHeightObserver from '../../hooks/use-height-observer';
import useHeightAnimationContext from '../../hooks/use-height-animation-context';
import AnimatedSection from '../../../../shared/animations/section.animation';
import loginContentPreset from '../../presets/login-content.preset';
import loginAnimationPreset from '../../presets/login-animation.preset';

const { heading, subheading, footer } = loginContentPreset;

const LoginPage: FC = () => {
  const { setHeight } = useHeightAnimationContext();
  const ref = useHeightObserver<HTMLDivElement>((height) => setHeight(height))

  return (
    <AnimatedSection animation={loginAnimationPreset} className={styles.container} sectionRef={ref}>
      <AuthSection heading={heading} subheading={subheading} footer={footer}>
        <LoginForm />
      </AuthSection>
    </AnimatedSection>
  );
}

export default LoginPage;
