import { InputHints } from '@shared/config';


export type HintEvent = 'onBlur' | 'onChange' | 'onSubmit';

export interface TextInputHintsConfig {
  set?: Partial<Record<HintEvent, boolean>>;
  clear?: Partial<Record<HintEvent, boolean>>;
}

export type TextInputsConfigValues<T extends string> = { [key in T]: string };

export type TextInputsConfig<T extends string> = {
  [key in T]: {
    initialValue?: string;
    validationFunc?: Partial<Record<InputHints, (value: string, values: TextInputsConfigValues<T>) => boolean>>;
    hints?: TextInputHintsConfig;
  }
}
