import { ROUTES } from '../../../shared/constants/routes';
import IContentPreset from '../types/content.preset.type';

const signupContentPreset: IContentPreset = {
  heading: 'Create account',
  subheading: 'Let’s get you started sharing your links!',
  footer: {
    text: 'Already have an account?',
    linkText: 'Login',
    link: ROUTES.AUTH.LOGIN,
  }
}

export default signupContentPreset;
