import { ROUTES } from '../../../shared/constants/routes';
import IContentPreset from '../types/content.preset.type';

const loginContentPreset: IContentPreset = {
  heading: 'Login',
  subheading: 'Add your details below to get back into the app',
  footer: {
    text: 'Don’t have an account?',
    linkText: 'Create account',
    link: ROUTES.AUTH.SIGNUP,
  }
}

export default loginContentPreset;
