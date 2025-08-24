import { TextInputContent } from '@shared/ui/text-input/text-input.types';


interface ProfileEditDetailsPreset {
  firstName: TextInputContent;
  lastName: TextInputContent;
  email: TextInputContent;
}

export const profileEditDetailsPreset = {
  firstName: {
    label: 'First name*',
    placeholder: 'e.g. John',
    type: 'text',
  },
  lastName: {
    label: 'Last name*',
    placeholder: 'e.g. Appleseed',
    type: 'text',
  },
  email: {
    label: 'Email',
    placeholder: 'e.g. email@example.com',
    type: 'email',
  }
} as const satisfies ProfileEditDetailsPreset;
