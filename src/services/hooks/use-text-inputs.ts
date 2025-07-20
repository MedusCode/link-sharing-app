import { ChangeEvent, FocusEvent, useState } from 'react';
import IInputHintsConfig, { THintEvent } from '../../types/input-hints-config.type';
import { InputHints } from '../../constants/forms';
import initializeState from '../../assets/scripts/initialize-state';

type TValues<T extends string> = { [key in T]: string };
type THints<T extends string> = { [key in T]: string | null };
type TIsValid<T extends string> = { [key in T]: boolean };
type TIsTouched<T extends string> = { [key in T]: boolean };

type TOnChange<T extends string> = { [key in T]: (evt: ChangeEvent<HTMLInputElement>) => void; }
type TOnBlur<T extends string> = { [key in T]: (evt: FocusEvent<HTMLInputElement>) => void; }

type TUseTextInputsProps<T extends string> = {
  [key in T]: {
    initialValue?: string;
    validationFunc?: Partial<Record<InputHints, (value: string, values: TValues<T>) => boolean>>;
    hints?: IInputHintsConfig;
  }
}

interface IUseTextInputsReturn<T extends string> {
  values: TValues<T>;
  hints: THints<T>;
  isValid: TIsValid<T>;
  onChange: TOnChange<T>;
  onBlur: TOnBlur<T>;
  onSubmit: () => boolean;
}

// TODO: Refactor hook
const useTextInputs = <T extends string>(inputs: TUseTextInputsProps<T>): IUseTextInputsReturn<T> => {
  const [values, setValues] = useState<TValues<T>>(
    initializeState(inputs, (key, input) => input.initialValue || '')
  );
  const [hints, setHints] = useState<THints<T>>(
    initializeState(inputs, () => null)
  );
  const [isValid, setIsValid] = useState<TIsValid<T>>(
    initializeState(inputs, () => false)
  );
  const [isTouched, setIsTouched] = useState<TIsTouched<T>>(
    initializeState(inputs, () => false)
  );

  const validateInput = (key: T, value: string = values[key]): { isValid: boolean; reason: string | null } => {
    const input = inputs[key];
    const validationFunc = input.validationFunc || {};

    for (const hint of Object.keys(validationFunc) as Array<keyof typeof validationFunc>) {
      const validationFn = validationFunc[hint];

      if (validationFn && !validationFn(value, values)) {
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

  const changeHint = (key: T, event: THintEvent, value = values[key]) => {
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

  const handleBlur = (key: T) => (evt: FocusEvent<HTMLInputElement>) => {
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
  }), {} as TOnChange<T>);

  const onBlur = Object.keys(inputs).reduce((acc, key) => ({
    ...acc,
    [key]: handleBlur(key as T)
  }), {} as TOnBlur<T>);

  return {
    values,
    hints,
    isValid,
    onChange,
    onBlur,
    onSubmit
  };
}

export default useTextInputs;
