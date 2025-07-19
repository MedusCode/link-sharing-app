import { FC, FormEvent } from 'react';
import styles from './login-form.module.css';
import TextInput from '../text-input/text-input';
import Button from '../button/button';
import Link from '../link/link';
import isValidEmail from '../../assets/scripts/is-valid-email';
import { ReactComponent as EmailIcon } from '../../assets/images/icon-email.svg';
import { ReactComponent as PasswordIcon } from '../../assets/images/icon-password.svg';
import useTextInputs from '../../services/hooks/use-text-inputs';
import { InputHints } from '../../constants/forms';
import IInputHintsConfig from '../../types/input-hints-config.type';

const hintsConfig: IInputHintsConfig = {
  set: {
    onSubmit: true,
  },
  clear: {
    onChange: true,
  }
}

const LoginForm: FC = () => {
  const {
    values,
    hints,
    onChange,
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
        [InputHints.VALID_PASSWORD]: (value) => value.length > 0,
      }
    }
  });

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const canSubmit = onSubmit();

    if (canSubmit) {
      window.location.reload();
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <TextInput
        value={values.email}
        type={'email'}
        IconElement={EmailIcon}
        placeholder={'e.g. alex@email.com'}
        label={'Email address'}
        name={'email'}
        onChange={onChange.email}
        errorMessage={hints.email || undefined}
      />
      <TextInput
        value={values.password}
        type={'password'}
        IconElement={PasswordIcon}
        placeholder={'Enter your password'}
        label={'Password'}
        name={'password'}
        onChange={onChange.password}
        errorMessage={hints.password || undefined}
      />
      <Button type={'submit'}>Login</Button>
      <span className={styles.text}>Don’t have an account? <Link to={'/signup'}>Create account</Link></span>
    </form>
  );
}

export default LoginForm;
