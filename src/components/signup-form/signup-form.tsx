import { FC, FormEvent } from 'react';
import styles from './signup-form.module.css';
import TextInput from '../text-input/text-input';
import Button from '../button/button';
import Link from '../link/link';
import { ReactComponent as EmailIcon } from '../../assets/images/icon-email.svg';
import { ReactComponent as PasswordIcon } from '../../assets/images/icon-password.svg';
import isValidEmail from '../../assets/scripts/is-valid-email';
import useTextInputs from '../../services/hooks/use-text-inputs';
import IInputHintsConfig from '../../types/input-hints-config.type';
import { InputHints } from '../../constants/forms';
import { useNavigate } from 'react-router-dom';

const hintsConfig: IInputHintsConfig = {
  set: {
    onBlur: true,
    onSubmit: true,
  },
  clear: {
    onChange: true,
  }
}

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
        [InputHints.NOT_EMPTY]: (value) => value !== '',
        [InputHints.VALID_EMAIL]: (value) => isValidEmail(value),
      }
    },
    password: {
      hints: hintsConfig,
      validationFunc: {
        [InputHints.NOT_EMPTY]: (value) => value !== '',
        [InputHints.PASSWORD_LENGTH]: (value) => value.length >= 8,
      }
    },
    confirmPassword: {
      hints: hintsConfig,
      validationFunc: {
        [InputHints.PASSWORDS_MATCH]: (value, values) => value === values['password'],
      }
    }
  });

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const canSubmit = onSubmit();

    if (canSubmit) {
      navigate('/login');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <TextInput
        value={values.email}
        onChange={onChange.email}
        onBlur={onBlur.email}
        type={'email'}
        IconElement={EmailIcon}
        placeholder={'e.g. alex@email.com'}
        label={'Email address'}
        name={'email'}
        errorMessage={hints.email || undefined}
      />
      <TextInput
        value={values.password}
        onChange={onChange.password}
        onBlur={onBlur.password}
        type={'password'}
        IconElement={PasswordIcon}
        placeholder={'At least 8 characters'}
        label={'Create password'}
        name={'password'}
        errorMessage={hints.password || undefined}
      />
      <TextInput
        value={values.confirmPassword}
        onChange={onChange.confirmPassword}
        onBlur={onBlur.confirmPassword}
        type={'password'}
        IconElement={PasswordIcon}
        placeholder={'At least 8 characters'}
        label={'Confirm password'}
        name={'confirmPassword'}
        errorMessage={hints.confirmPassword || undefined}
      />
      <span className={styles.validationHint}>Password must contain at least 8 characters</span>
      <Button type={'submit'}>Create new account</Button>
      <span className={styles.text}>Already have an account? <Link to={'/login'}>Login</Link></span>
    </form>
  );
}

export default SignupForm;
