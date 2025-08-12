import ITextInputContent from '@shared/types/text-input-content.type';

interface ISignupFormContent {
  inputs: {
    email: ITextInputContent;
    password: ITextInputContent;
    confirmPassword: ITextInputContent;
  };
  submitText: string;
  hint?: string;
}

export default ISignupFormContent;
