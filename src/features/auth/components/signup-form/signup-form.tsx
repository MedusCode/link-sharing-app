import { FC, FormEvent } from 'react';
import styles from './signup-form.module.css';
import TextInput from '../../../../shared/components/text-input/text-input';
import Button from '../../../../shared/components/button/button';
import useTextInputs from '../../../../shared/hooks/use-text-inputs';
import ITextInputHintsConfig from '../../../../shared/types/text-input-hints-config.type';
import { InputHints } from '../../../../shared/constants/forms';
import { useNavigate } from 'react-router-dom';
import { isMatchField, isNotEmpty, isPasswordLengthValid, isValidEmail } from '../../../../shared/utils/validation';
import { ROUTES } from '../../../../shared/constants/routes';
import signupFormPreset from '../../presets/signup-form.preset';

const hintsConfig: ITextInputHintsConfig = {
  set: {
    onBlur: true,
    onSubmit: true,
  },
  clear: {
    onChange: true,
  }
}

const preset = signupFormPreset;

const SignupForm: FC = () => {
  const navigate = useNavigate();
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

    if (canSubmit) {
      navigate(ROUTES.AUTH.LOGIN);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <TextInput
        content={preset.inputs.email}
        value={values.email}
        onChange={onChange.email}
        onBlur={onBlur.email}
        name={'email'}
        errorMessage={hints.email || undefined}
      />
      <TextInput
        content={preset.inputs.password}
        value={values.password}
        onChange={onChange.password}
        onBlur={onBlur.password}
        name={'password'}
        errorMessage={hints.password || undefined}
      />
      <TextInput
        content={preset.inputs.confirmPassword}
        value={values.confirmPassword}
        onChange={onChange.confirmPassword}
        onBlur={onBlur.confirmPassword}
        name={'confirmPassword'}
        errorMessage={hints.confirmPassword || undefined}
      />
      <span className={styles.validation_hint}>{preset.hint}</span>
      <Button type={'submit'}>{preset.submitText}</Button>
    </form>
  );
}

export default SignupForm;
