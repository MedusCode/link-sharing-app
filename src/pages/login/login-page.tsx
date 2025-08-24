import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginForm } from '@features/authorization';
import { AnimatedSlideContainer } from '@shared/animations';
import { Paths } from '@shared/router/paths';
import { PromptLink, SectionContainer } from '@shared/ui';

import { loginAnimationConfig } from './login-page.config';
import styles from './login-page.module.css';
import { loginPagePreset } from './login-page.preset';


const { promptLink: {text: promptText, linkText: promptLinkText, to: promptTo}, header } = loginPagePreset;

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate(Paths.EDITOR.LINKS)
  }

  return (
    <AnimatedSlideContainer className={styles.container} animation={loginAnimationConfig}>
      <SectionContainer header={header}>
        <LoginForm onLogin={onLogin} />
        <PromptLink className={styles.prompt} text={promptText} linkText={promptLinkText} to={promptTo} />
      </SectionContainer>
    </AnimatedSlideContainer>
  );
}
