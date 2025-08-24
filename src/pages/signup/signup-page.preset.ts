import { Paths } from '@shared/router/paths';
import { PromptLinkContent } from '@shared/ui/prompt-link/prompt-link.types';
import { SectionContainerContent } from '@shared/ui/section-container/section-container.types';


interface SignupPagePreset {
  header: SectionContainerContent,
  promptLink: PromptLinkContent,
}

export const signupPagePreset = {
  header: {
    heading: 'Create account',
    description: 'Let’s get you started sharing your links!',
  },
  promptLink: {
    text: 'Already have an account?',
    linkText: 'Login',
    to: Paths.AUTH.LOGIN
  }
} as const satisfies SignupPagePreset;
