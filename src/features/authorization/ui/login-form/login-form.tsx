import { FC, FormEvent } from 'react';
import { TextInputHintsConfig, useTextInputsUtil } from 'shared/lib';

import { InputHints } from '@shared/config';
import { isNotEmpty, isValidEmail } from '@shared/lib/text-inputs/validate-value.util';
import { Button, TextInput } from '@shared/ui';

import styles from './login-form.module.css';
import { loginFormPreset } from './login-form.preset';


interface LoginFormProps {
  hintsConfig?: TextInputHintsConfig;
  onLogin?: () => void;
}

const hintsDefaultConfig = {
  set: {
    onSubmit: true,
  },
  clear: {
    onChange: true,
  }
} as const satisfies Required<TextInputHintsConfig>;

const { inputs, submitText } = loginFormPreset;

export const LoginForm: FC<LoginFormProps> = ({
  hintsConfig,
  onLogin,
}) => {
  const { values, hints, onChange, onSubmit } = useTextInputsUtil({
    email: {
      hints: hintsConfig || hintsDefaultConfig,
      validationFunc: {
        [InputHints.NOT_EMPTY]: isNotEmpty,
        [InputHints.VALID_EMAIL]: isValidEmail,
      }
    },
    password: {
      hints: hintsConfig || hintsDefaultConfig,
      validationFunc: {
        [InputHints.VALID_PASSWORD]: isNotEmpty,
      }
    }
  });

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const canSubmit = onSubmit();

    if (canSubmit && onLogin) {
      onLogin()
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <TextInput
        {...inputs.email}
        value={values.email}
        name={'email'}
        onChange={onChange.email}
        errorMessage={hints.email || undefined}
      />
      <TextInput
        {...inputs.password}
        value={values.password}
        name={'password'}
        onChange={onChange.password}
        errorMessage={hints.password || undefined}
      />
      <Button type={'submit'}>{submitText}</Button>
    </form>
  );
}
