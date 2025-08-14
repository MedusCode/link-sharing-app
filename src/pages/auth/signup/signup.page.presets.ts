import { MOTION_ANIMATION_DELAY, MOTION_ANIMATION_DURATION } from '@animations/config/animation.constants';
import ISlideAnimation from '@animations/types/slide-animation.type';
import { Paths } from '@app/router/paths';
import ISignupFormContent from '@features/signup-form/types/signup-form-content.type';
import { ReactComponent as EmailIcon } from '@shared/assets/images/icon-email.svg';
import { ReactComponent as PasswordIcon } from '@shared/assets/images/icon-password.svg';
import { MIN_PASSWORD_LENGTH } from '@shared/config/forms.constants';
import IPromptLinkContent from '@shared/types/prompt-link-content.type';
import ISectionHeaderContent from '@shared/types/section-heading-content.type';


export const signupSectionHeaderPreset: ISectionHeaderContent = {
  heading: 'Create account',
  description: 'Let’s get you started sharing your links!',
}

export const signupPromptLinkPreset: IPromptLinkContent = {
  text: 'Already have an account?',
  linkText: 'Login',
  to: Paths.AUTH.LOGIN
}

export const signupFormPreset: ISignupFormContent = {
  inputs: {
    email: {
      label: 'Email address',
      placeholder: 'e.g. alex@email.com',
      type: 'email',
      IconElement: EmailIcon,
    },
    password: {
      label: 'Create password',
      placeholder: `At least ${MIN_PASSWORD_LENGTH} characters`,
      type: 'password',
      IconElement: PasswordIcon,
    },
    confirmPassword: {
      label: 'Confirm password',
      placeholder: `At least ${MIN_PASSWORD_LENGTH} characters`,
      type: 'password',
      IconElement: PasswordIcon,
    },
  },
  hint: `Password must contain at least ${MIN_PASSWORD_LENGTH} characters`,
  submitText: 'Create new account'
}

export const signupAnimationPreset: ISlideAnimation = {
  side: 'right',
  delay: MOTION_ANIMATION_DURATION + MOTION_ANIMATION_DELAY,
  isExitAbsolute: true
}
