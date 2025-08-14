import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from 'pages/auth/signup/signup.page.module.css';
import {
  signupAnimationPreset,
  signupFormPreset,
  signupPromptLinkPreset,
  signupSectionHeaderPreset
} from 'pages/auth/signup/signup.page.presets';

import AnimatedSlideContainer from '@animations/components/animated-slide-container/animated-slide-container';
import { Paths } from '@app/router/paths';
import SignupForm from '@features/signup-form/signup-form';
import PromptLink from '@shared/components/prompt-link/prompt-link';
import SectionContainer from '@shared/components/section-container/section-container';


const { inputs, hint, submitText } = signupFormPreset;
const { text: promptText, linkText: promptLinkText, to: promptTo } = signupPromptLinkPreset;

const SignupPage: FC = () => {
  const navigate = useNavigate();

  const onSignup = () => {
    navigate(Paths.AUTH.LOGIN);
  }

  return (
    <AnimatedSlideContainer animation={signupAnimationPreset} className={styles.container}>
      <SectionContainer header={signupSectionHeaderPreset}>
        <SignupForm inputs={inputs} hint={hint} submitText={submitText} onSignup={onSignup} />
        <PromptLink className={styles.prompt} text={promptText} linkText={promptLinkText} to={promptTo} />
      </SectionContainer>
    </AnimatedSlideContainer>
  );
}

export default SignupPage;
