import { Paths } from '@shared/router/paths';
import { PromptLinkContent } from '@shared/ui/prompt-link/prompt-link.types';
import { SectionContainerContent } from '@shared/ui/section-container/section-container.types';


interface LoginPagePreset {
  header: SectionContainerContent,
  promptLink: PromptLinkContent,
}

export const loginPagePreset = {
  header: {
    heading: 'Login',
    description: 'Add your details below to get back into the app',
  },
  promptLink: {
    text: 'Don’t have an account?',
    linkText: 'Create account',
    to: Paths.AUTH.SIGNUP,
  }
} as const satisfies LoginPagePreset;
