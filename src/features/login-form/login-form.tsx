import { FC, FormEvent } from 'react';

import ILoginFormContent from '@features/login-form/types/login-form-content.type';
import Button from '@shared/components/button/button';
import TextInput from '@shared/components/text-input/text-input';
import { InputHints } from '@shared/config/forms.constants';
import useTextInputs from '@shared/hooks/use-text-inputs';
import ITextInputHintsConfig from '@shared/types/text-input-hints-config.type';
import { isNotEmpty, isValidEmail } from '@shared/utils/validation';

import styles from './login-form.module.css';

const hintsConfig: ITextInputHintsConfig = {
  set: {
    onSubmit: true,
  },
  clear: {
    onChange: true,
  }
}

interface ILoginFormProps extends ILoginFormContent {
  onLogin?: () => void;
}

const LoginForm: FC<ILoginFormProps> = ({
  inputs,
  submitText = 'Login',
  onLogin,
}) => {
  const {
    values,
    hints,
    onChange,
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

export default LoginForm;
