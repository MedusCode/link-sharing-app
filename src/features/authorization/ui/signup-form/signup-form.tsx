import { FC, FormEvent } from 'react';
import { TextInputHintsConfig, useTextInputsUtil } from 'shared/lib';

import { InputHints } from '@shared/config/forms.config';
import {
  isMatchField,
  isNotEmpty,
  isPasswordLengthValid,
  isValidEmail
} from '@shared/lib/text-inputs/validate-value.util';
import { Button, TextInput } from '@shared/ui';

import styles from './signup-form.module.css';
import { signupFormPreset } from './signup-form.preset';


interface SignupFormProps {
  hintsConfig?: TextInputHintsConfig;
  onSignup?: () => void;
}

const hintsDefaultConfig = {
  set: {
    onBlur: true,
    onSubmit: true,
  },
  clear: {
    onChange: true,
  }
} as const satisfies Required<TextInputHintsConfig>;

const { inputs, submitText, hint } = signupFormPreset;

export const SignupForm: FC<SignupFormProps> = ({
  hintsConfig,
  onSignup
}) => {
  const { values, hints, onChange, onBlur, onSubmit } = useTextInputsUtil({
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
          [InputHints.NOT_EMPTY]: isNotEmpty,
          [InputHints.PASSWORD_LENGTH]: isPasswordLengthValid,
        }
      },
      confirmPassword: {
        hints: hintsConfig || hintsDefaultConfig,
        validationFunc: {
          [InputHints.PASSWORDS_MATCH]: isMatchField('password'),
        }
      }
    }
  );

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const canSubmit = onSubmit();

    if (canSubmit && onSignup) {
      onSignup();
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <TextInput
        {...inputs.email}
        value={values.email}
        onChange={onChange.email}
        onBlur={onBlur.email}
        name={'email'}
        errorMessage={hints.email || undefined}
        autoComplete={'no'}
      />
      <TextInput
        {...inputs.password}
        value={values.password}
        onChange={onChange.password}
        onBlur={onBlur.password}
        name={'password'}
        errorMessage={hints.password || undefined}
        autoComplete={'new-password'}
      />
      <TextInput
        {...inputs.confirmPassword}
        value={values.confirmPassword}
        onChange={onChange.confirmPassword}
        onBlur={onBlur.confirmPassword}
        name={'confirmPassword'}
        errorMessage={hints.confirmPassword || undefined}
        autoComplete={'new-password'}
      />
      <span className={styles.validation_hint}>{hint}</span>
      <Button type={'submit'}>{submitText}</Button>
    </form>
  );
}
