import { ChangeEvent, FocusEvent, useState } from 'react';
import { HintEvent, TextInputsConfig, TextInputsConfigValues } from 'shared/lib/text-inputs/use-text-inputs.types';

import { InputHints } from '@shared/config';

import { initializeStateUtil } from './initialize-state.util';


type Hints<T extends string> = { [key in T]: string | null };
type IsValid<T extends string> = { [key in T]: boolean };
type IsTouched<T extends string> = { [key in T]: boolean };

type OnChange<T extends string> = { [key in T]: (evt: ChangeEvent<HTMLInputElement>) => void; }
type OnBlur<T extends string> = { [key in T]: (evt: FocusEvent<HTMLInputElement>) => void; }

interface UseTextInputsReturn<T extends string> {
  values: TextInputsConfigValues<T>;
  hints: Hints<T>;
  isValid: IsValid<T>;
  onChange: OnChange<T>;
  onBlur: OnBlur<T>;
  onSubmit: () => boolean;
}

export const useTextInputsUtil = <T extends string>(inputs: TextInputsConfig<T>): UseTextInputsReturn<T> => {
  const [ values, setValues ] = useState<TextInputsConfigValues<T>>(
    initializeStateUtil(inputs, (key, input) => input.initialValue || '')
  );
  const [ hints, setHints ] = useState<Hints<T>>(
    initializeStateUtil(inputs, () => null)
  );
  const [ isValid, setIsValid ] = useState<IsValid<T>>(
    initializeStateUtil(inputs, () => false)
  );
  const [ isTouched, setIsTouched ] = useState<IsTouched<T>>(
    initializeStateUtil(inputs, () => false)
  );

  const validateInput = (key: T, value: string = values[key]): { isValid: boolean; reason: string | null } => {
    const input = inputs[key];
    const validationFunctions = input.validationFunc || {};

    for (const hint of Object.keys(validationFunctions) as Array<keyof typeof validationFunctions>) {
      const validationFunction = validationFunctions[hint];

      if (validationFunction && !validationFunction(value, values)) {
        return { isValid: false, reason: hint };
      }
    }

    return { isValid: true, reason: null };
  }

  const setNewHint = (key: T, value = values[key]) => {
    const validation = validateInput(key, value);

    setHints(prevHints => ({ ...prevHints, [key]: validation.reason || null }));
  }

  const clearHint = (key: T, value = values[key]) => {
    const validationFn = inputs[key]?.validationFunc?.[hints[key] as InputHints];

    if (validationFn && validationFn(value, values)) {
      setHints(prevHints => ({ ...prevHints, [key]: null }));
    }
  }

  const changeHint = (key: T, event: HintEvent, value = values[key]) => {
    const needToSetHint = inputs[key].hints?.set?.[event];
    const needToClearHint = inputs[key].hints?.clear?.[event];

    if (needToSetHint) setNewHint(key, value);
    if (needToClearHint) clearHint(key, value);
  }

  const handleChange = (key: T) => (evt: ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value;
    const validation = validateInput(key, newValue);

    setValues(prevValues => ({ ...prevValues, [key]: newValue }));
    setIsValid(prevIsValid => ({ ...prevIsValid, [key]: validation.isValid, }));
    changeHint(key, 'onChange', newValue)
    setIsTouched(prevIsTouched => ({ ...prevIsTouched, [key]: true }))
  }

  const handleBlur = (key: T) => () => {
    if (!isTouched[key]) return;

    changeHint(key, 'onBlur')
  }

  const onSubmit = (): boolean => {
    let canSubmit = true;

    (Object.keys(inputs) as Array<T>).forEach(key => {
      const validation = validateInput(key);

      changeHint(key, 'onSubmit');

      if (!validation.isValid) {
        canSubmit = false;
      }
    });

    return canSubmit;
  }

  const onChange = Object.keys(inputs).reduce((acc, key) => ({
    ...acc,
    [key]: handleChange(key as T)
  }), {} as OnChange<T>);

  const onBlur = Object.keys(inputs).reduce((acc, key) => ({
    ...acc,
    [key]: handleBlur(key as T)
  }), {} as OnBlur<T>);

  return {
    values,
    hints,
    isValid,
    onChange,
    onBlur,
    onSubmit
  };
}
