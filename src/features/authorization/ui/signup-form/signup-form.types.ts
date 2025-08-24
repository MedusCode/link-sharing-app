import { TextInputContent } from '@shared/ui/text-input/text-input.types';


export interface SignupFormPreset {
  inputs: {
    email: TextInputContent;
    password: TextInputContent;
    confirmPassword: TextInputContent;
  };
  submitText: string;
  hint?: string;
}
