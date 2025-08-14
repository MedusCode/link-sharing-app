import ITextInputContent from '@shared/types/text-input-content.type';

interface ILoginFormContent {
  inputs: {
    email: ITextInputContent;
    password: ITextInputContent;
  };
  submitText?: string;
}

export default ILoginFormContent;
