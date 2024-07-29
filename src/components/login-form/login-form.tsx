import { ChangeEvent, FC, FormEvent, useState } from 'react';
import styles from './login-form.module.css';
import TextInput from '../text-input/text-input';
import { ReactComponent as EmailIcon } from '../../assets/images/icon-email.svg';
import { ReactComponent as PasswordIcon } from '../../assets/images/icon-password.svg';
import Button from '../button/button';
import Link from '../link/link';
import validateEmail from '../../assets/scripts/validateEmail';

interface ILoginForm {
  email: string;
  password: string;
}

const LoginFormInit = {
  email: '',
  password: ''
}

const LoginForm: FC = () => {
  const [ values, setValues ] = useState<ILoginForm>(LoginFormInit);
  const [ errorMessages, setErrorMessage ] = useState<ILoginForm>(LoginFormInit)

  const setEmailValue = (value: string) => setValues({ ...values, email: value });
  const setPasswordValue = (value: string) => setValues({ ...values, password: value });
  const setEmailError = (error: string) =>
    setErrorMessage((errorMessages) => ({ ...errorMessages, email: error }));
  const setPasswordError = (error: string) =>
    setErrorMessage((errorMessages) => ({ ...errorMessages, password: error }));


  const handleEmailInput = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault()
    setEmailValue(evt.target.value)

    if (errorMessages.email === 'Can’t be empty') {
      setEmailError('')
    }

    if (validateEmail(evt.target.value) && errorMessages.email === 'Invalid email') {
      setEmailError('')
    }
  }

  const handlePasswordInput = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault()
    setPasswordValue(evt.target.value)

    if (errorMessages.password) {
      setPasswordError('')
    }
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setPasswordValue('')

    setPasswordError('Please check again')

    if (!values.email) {
      setEmailError('Can’t be empty')
    } else if (!validateEmail(values.email)) {
      setEmailError('Invalid email')
    }

    console.log(values)
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
        onChange={handleEmailInput}
        errorMessage={errorMessages.email}
      />
      <TextInput
        value={values.password}
        type={'password'}
        IconElement={PasswordIcon}
        placeholder={'Enter your password'}
        label={'Password'}
        name={'password'}
        onChange={handlePasswordInput}
        errorMessage={errorMessages.password}
      />
      <Button type={'submit'}>Login</Button>
      <span className={styles.text}>Don’t have an account? <Link href={'#'}>Create account</Link></span>
    </form>
  );
}

export default LoginForm;
