import { ChangeEvent, FC, MouseEvent, useRef, useState } from 'react';
import styles from './text-input.module.css';


interface ITextInputProps {
  type?: 'text' | 'password';
  iconLink?: string;
  placeholder?: string;
  errorText?: string;
}

const TextInput: FC<ITextInputProps> = ({
  type = 'text',
  iconLink,
  placeholder,
  errorText
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [ value, setValue ] = useState<string>('');
  const [ isValid, setIsValid ] = useState<boolean>(true)

  const validate = (value: string) => {
    if (value.length > 10) {
      setIsValid(false);
      return
    }

    setIsValid(true);
  }

  const handleInput = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setValue(evt.target.value);
    validate(evt.target.value);
  }

  const focusInput = (evt: MouseEvent<HTMLSpanElement>) => {
    evt.preventDefault();

    if (inputRef.current) {
      inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
      inputRef.current.blur();
      inputRef.current.focus();
    }
  }

  return (
    <div className={`${styles.inputContainer} ${isValid ? '' : styles.container_error}`}>
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={handleInput}
          placeholder={placeholder}
          style={iconLink ? {backgroundImage: `url(${iconLink})`} : undefined}
          ref={inputRef}
        />
      { isValid || !errorText ? '' :
        <div className={styles.errorTextContainer} onMouseDown={focusInput}>
          <span className={styles.errorText}>{errorText}</span>
        </div>
      }
    </div>
  );
}
export default TextInput;
