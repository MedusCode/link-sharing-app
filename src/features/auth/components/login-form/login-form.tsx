import { FC, FormEvent } from 'react';
import styles from './login-form.module.css';
import TextInput from '../../../../shared/components/text-input/text-input';
import Button from '../../../../shared/components/button/button';
import useTextInputs from '../../../../shared/hooks/use-text-inputs';
import { InputHints } from '../../../../shared/constants/forms';
import ITextInputHintsConfig from '../../../../shared/types/text-input-hints-config.type';
import { useNavigate } from 'react-router-dom';
import { isNotEmpty, isValidEmail } from '../../../../shared/utils/validation';
import { ROUTES } from '../../../../shared/constants/routes';
import loginFormPreset from '../../presets/login-form.preset';

const hintsConfig: ITextInputHintsConfig = {
  set: {
    onSubmit: true,
  },
  clear: {
    onChange: true,
  }
}

const preset = loginFormPreset;

const LoginForm: FC = () => {
  const navigate = useNavigate();
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

    if (canSubmit) {
      navigate(ROUTES.EDITOR.LINKS);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <TextInput
        content={preset.inputs.email}
        value={values.email}
        name={'email'}
        onChange={onChange.email}
        errorMessage={hints.email || undefined}
      />
      <TextInput
        content={preset.inputs.password}
        value={values.password}
        name={'password'}
        onChange={onChange.password}
        errorMessage={hints.password || undefined}
      />
      <Button type={'submit'}>{preset.submitText}</Button>
    </form>
  );
}

export default LoginForm;
