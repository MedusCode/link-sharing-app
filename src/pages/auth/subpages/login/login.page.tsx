import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import AnimatedSlideContainer from '@animations/components/animated-slide-container/animated-slide-container';
import { Paths } from '@app/router/paths';
import LoginForm from '@features/login-form/login-form';
import PromptLink from '@shared/components/prompt-link/prompt-link';
import SectionContainer from '@shared/components/section-container/section-container';

import styles from './login.page.module.css';
import {
  loginAnimationPreset,
  loginFormPreset,
  loginPromptLinkPreset,
  loginSectionHeaderPreset,
} from './login.page.presets';


const { inputs, submitText } = loginFormPreset;
const { text: promptText, linkText: promptLinkText, to: promptTo } = loginPromptLinkPreset;

const LoginPage: FC = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate(Paths.EDITOR.LINKS)
  }

  return (
    <AnimatedSlideContainer className={styles.container} animation={loginAnimationPreset}>
      <SectionContainer header={loginSectionHeaderPreset}>
        <LoginForm inputs={inputs} submitText={submitText} onLogin={onLogin} />
        <PromptLink className={styles.prompt} text={promptText} linkText={promptLinkText} to={promptTo} />
      </SectionContainer>
    </AnimatedSlideContainer>
  );
}

export default LoginPage;
