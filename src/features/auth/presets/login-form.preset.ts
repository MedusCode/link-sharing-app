import { ReactComponent as EmailIcon } from '../../../assets/images/icon-email.svg';
import { ReactComponent as PasswordIcon } from '../../../assets/images/icon-password.svg';
import IFormPreset from '../types/form.preset.type';

const loginFormPreset: IFormPreset<'email' | 'password'> = {
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
}

export default loginFormPreset;
