import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignupForm } from '@features/authorization';
import { AnimatedSlideContainer } from '@shared/animations';
import { Paths } from '@shared/router/paths';
import { PromptLink, SectionContainer } from '@shared/ui';

import { signupAnimationConfig } from './signup-page.config';
import styles from './signup-page.module.css';
import { signupPagePreset } from './signup-page.preset';


const { promptLink: { text: promptText, linkText: promptLinkText, to: promptTo }, header } = signupPagePreset;

export const SignupPage: FC = () => {
  const navigate = useNavigate();

  const onSignup = () => {
    navigate(Paths.AUTH.LOGIN);
  }

  return (
    <AnimatedSlideContainer animation={signupAnimationConfig} className={styles.container}>
      <SectionContainer header={header}>
        <SignupForm onSignup={onSignup} />
        <PromptLink className={styles.prompt} text={promptText} linkText={promptLinkText} to={promptTo} />
      </SectionContainer>
    </AnimatedSlideContainer>
  );
}
