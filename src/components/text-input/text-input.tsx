import { ChangeEvent, FC, useEffect, useRef } from 'react';
import styles from './text-input.module.css';
import TIconElement from '../../types/icon-element';
import { nanoid } from 'nanoid';


interface ITextInputProps {
  value: string;
  errorMessage?: string;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
  IconElement?: TIconElement;
  placeholder?: string;
  label?: string;
}

const TextInput: FC<ITextInputProps> = ({
  value,
  errorMessage,
  onChange,
  name,
  type = 'text',
  IconElement,
  placeholder,
  label,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const errorMessageRef = useRef<HTMLSpanElement>(null);
  const id = nanoid();

   useEffect(() => {
     if (errorMessage && errorMessageRef.current && inputRef.current) {
       const errorMessageWidth = errorMessageRef.current.offsetWidth;
       inputRef.current.style.paddingRight = `${errorMessageWidth + 11}px`
     } else if (!errorMessage && inputRef.current) {
       inputRef.current.style.paddingRight = '';
     }
   }, [errorMessage])

  return (
    <div className={styles.container}>
      {label && <label className={styles.label} htmlFor={id}>{label}</label>}
      <div className={`${styles.inputContainer} ${errorMessage ? styles.container_error : ''}`}>
        {IconElement && <IconElement className={styles.icon} />}
        <input
          className={`${styles.input} ${IconElement ? styles.input_withIcon : ''}`}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          ref={inputRef}
          id={id}
        />
        { errorMessage && <span className={styles.errorText} ref={errorMessageRef}>{errorMessage}</span> }
      </div>
    </div>
  );
}
export default TextInput;
