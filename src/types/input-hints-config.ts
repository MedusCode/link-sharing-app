export type THintEvent = 'onBlur' | 'onChange' | 'onSubmit';

interface IInputHintsConfig {
  set?: Partial<Record<THintEvent, boolean>>;
  clear?: Partial<Record<THintEvent, boolean>>;
}

export default IInputHintsConfig;
