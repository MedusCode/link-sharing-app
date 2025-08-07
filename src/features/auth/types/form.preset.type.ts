import ITextInputContent from '../../../shared/types/text-input-content.type';

interface IFormPreset<T extends string> {
  inputs: {
    [inputName in T]: ITextInputContent;
  };
  submitText: string;
  hint?: string;
}

export default IFormPreset;
