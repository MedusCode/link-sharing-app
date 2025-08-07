import { ChangeEvent, FocusEvent, FC, useEffect, useRef } from 'react';
import styles from './text-input.module.css';
import { nanoid } from 'nanoid';
import ITextInputContent from '../../types/text-input-content.type';
import clsx from 'clsx';


interface ITextInputProps {
  content: ITextInputContent;
  value: string;
  errorMessage?: string;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (evt: FocusEvent<HTMLInputElement>) => void;
  name?: string;
}

const TextInput: FC<ITextInputProps> = ({
  content,
  value,
  errorMessage,
  onChange,
  onBlur,
  name,
}) => {
  const { label, placeholder, type, IconElement } = content;
  const inputRef = useRef<HTMLInputElement>(null);
  const errorMessageRef = useRef<HTMLSpanElement>(null);
  const id = useRef(nanoid()).current;
  const errorId = `${id}-error`;

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
      <div className={clsx(styles.inputContainer, { [styles.container_error]: errorMessage })}>
        {IconElement && <IconElement className={styles.icon} />}
        <input
          className={clsx(styles.input, { [styles.input_withIcon]: IconElement })}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          placeholder={placeholder}
          ref={inputRef}
          id={id}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? errorId : undefined}
        />
        { errorMessage && <span id={errorId} className={styles.errorText} ref={errorMessageRef}>{errorMessage}</span> }
      </div>
    </div>
  );
}
export default TextInput;
