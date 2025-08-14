import { MOTION_ANIMATION_DELAY, MOTION_ANIMATION_DURATION } from '@animations/config/animation.constants';
import ISlideAnimation from '@animations/types/slide-animation.type';
import { Paths } from '@app/router/paths';
import ILoginFormContent from '@features/login-form/types/login-form-content.type';
import { ReactComponent as EmailIcon } from '@shared/assets/images/icon-email.svg';
import { ReactComponent as PasswordIcon } from '@shared/assets/images/icon-password.svg';
import IPromptLinkContent from '@shared/types/prompt-link-content.type';
import ISectionHeaderContent from '@shared/types/section-heading-content.type';


export const loginSectionHeaderPreset = {
  heading: 'Login',
  description: 'Add your details below to get back into the app',
} as const satisfies ISectionHeaderContent

export const loginPromptLinkPreset = {
  text: 'Don’t have an account?',
  linkText: 'Create account',
  to: Paths.AUTH.SIGNUP,
} as const satisfies IPromptLinkContent

export const loginFormPreset = {
  inputs: {
    email: {
      label: 'Email address',
      placeholder: 'e.g. alex@email.com',
      type: 'email',
      IconElement: EmailIcon,
    },
    password: {
      label: 'Password',
      placeholder: 'Enter your password',
      type: 'password',
      IconElement: PasswordIcon,
    },
  },
  submitText: 'Login'
} as const satisfies ILoginFormContent

export const loginAnimationPreset = {
  side: 'left',
  delay: MOTION_ANIMATION_DURATION + MOTION_ANIMATION_DELAY,
  isExitAbsolute: true
} as const satisfies ISlideAnimation
