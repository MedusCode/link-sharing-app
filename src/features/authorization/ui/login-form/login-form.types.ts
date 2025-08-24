import { TextInputContent } from '@shared/ui/text-input/text-input.types';


export interface LoginFormPreset {
  inputs: {
    email: TextInputContent;
    password: TextInputContent;
  };
  submitText?: string;
}
