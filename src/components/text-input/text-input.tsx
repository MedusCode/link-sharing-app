import { ChangeEvent, FC, MouseEvent, useRef } from 'react';
import styles from './text-input.module.css';


interface ITextInputProps {
  value: string;
  errorMessage?: string;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
  iconUrl?: string;
  placeholder?: string;
  label?: string;
}

const TextInput: FC<ITextInputProps> = ({
  value,
  errorMessage,
  onChange,
  name,
  type = 'text',
  iconUrl,
  placeholder,
  label,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = (evt: MouseEvent<HTMLSpanElement>) => {
    evt.preventDefault();

    if (inputRef.current) {
      // setSelectionRange() doesn't work with email type.
      if (inputRef.current.type === 'email') {
        inputRef.current.type = 'text';
        inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
        inputRef.current.type = 'email';
      } else {
        inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
      }
      inputRef.current.blur();
      inputRef.current.focus();
    }
  }

  return (
    <div className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={`${styles.inputContainer} ${errorMessage ? styles.container_error : ''}`}>
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          style={iconUrl ? {backgroundImage: `url(${iconUrl})`} : undefined}
          ref={inputRef}
        />
        { errorMessage &&
          <div
            className={styles.errorTextContainer}
            onMouseDown={focusInput}
          >
            <span className={styles.errorText}>{errorMessage}</span>
          </div>
        }
      </div>
    </div>
  );
}
export default TextInput;
