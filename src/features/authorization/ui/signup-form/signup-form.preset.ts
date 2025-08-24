import { MIN_PASSWORD_LENGTH } from '@shared/config';

import { ReactComponent as EmailIcon } from '../icons/icon-email.svg';
import { ReactComponent as PasswordIcon } from '../icons/icon-password.svg';
import { SignupFormPreset } from './signup-form.types';


export const signupFormPreset = {
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
} as const satisfies SignupFormPreset
