import { FC, FormEvent } from 'react';

import ISignupFormContent from '@features/signup-form/types/signup-form-content.type';
import Button from '@shared/components/button/button';
import TextInput from '@shared/components/text-input/text-input';
import { InputHints } from '@shared/config/forms.constants';
import useTextInputs from '@shared/hooks/use-text-inputs';
import ITextInputHintsConfig from '@shared/types/text-input-hints-config.type';
import { isMatchField, isNotEmpty, isPasswordLengthValid, isValidEmail } from '@shared/utils/validation';

import styles from './signup-form.module.css';

const hintsConfig: ITextInputHintsConfig = {
  set: {
    onBlur: true,
    onSubmit: true,
  },
  clear: {
    onChange: true,
  }
}

interface ISignupFormProps extends ISignupFormContent {
  onSignup?: () => void;
}

const SignupForm: FC<ISignupFormProps> = ({
  inputs,
  hint,
  submitText,
  onSignup
}) => {
  const {
    values,
    hints,
    onChange,
    onBlur,
    onSubmit
  } = useTextInputs({
    email: {
      hints: hintsConfig,
      validationFunc: {
        [InputHints.NOT_EMPTY]: isNotEmpty,
        [InputHints.VALID_EMAIL]: isValidEmail,
      }
    },
    password: {
      hints: hintsConfig,
      validationFunc: {
        [InputHints.NOT_EMPTY]: isNotEmpty,
        [InputHints.PASSWORD_LENGTH]: isPasswordLengthValid,
      }
    },
    confirmPassword: {
      hints: hintsConfig,
      validationFunc: {
        [InputHints.PASSWORDS_MATCH]: isMatchField('password'),
      }
    }
  });

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

export default SignupForm;
