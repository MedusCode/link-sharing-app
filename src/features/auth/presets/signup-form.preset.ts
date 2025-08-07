import { ReactComponent as EmailIcon } from '../../../assets/images/icon-email.svg';
import { ReactComponent as PasswordIcon } from '../../../assets/images/icon-password.svg';
import { MIN_PASSWORD_LENGTH } from '../../../shared/constants/forms';
import IFormPreset from '../types/form.preset.type';

const signupFormPreset: IFormPreset<'email' | 'password' | 'confirmPassword'> = {
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

export default signupFormPreset;
