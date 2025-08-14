export type THintEvent = 'onBlur' | 'onChange' | 'onSubmit';

interface ITextInputHintsConfig {
  set?: Partial<Record<THintEvent, boolean>>;
  clear?: Partial<Record<THintEvent, boolean>>;
}

export default ITextInputHintsConfig;
