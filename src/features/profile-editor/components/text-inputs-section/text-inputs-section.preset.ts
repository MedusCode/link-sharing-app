import ITextInputContent from '@shared/types/text-input-content.type';

interface ITextInputsSectionPreset {
  firstName: ITextInputContent;
  lastName: ITextInputContent;
  email: ITextInputContent;
}

const textInputsSectionPreset = {
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
} as const satisfies ITextInputsSectionPreset;


export default textInputsSectionPreset;
