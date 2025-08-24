import { LoginFormPreset } from 'features/authorization';

import { ReactComponent as EmailIcon } from '../icons/icon-email.svg';
import { ReactComponent as PasswordIcon } from '../icons/icon-password.svg';


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
} as const satisfies LoginFormPreset;
