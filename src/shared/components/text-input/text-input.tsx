import clsx from 'clsx';
import { FC, forwardRef, InputHTMLAttributes, SVGProps, useEffect, useId, useImperativeHandle, useRef } from 'react';

import { TEXT_INPUT_ERROR_MSG_PADDING } from '@shared/components/text-input/text-input.config';

import styles from './text-input.module.css';


interface ITextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children'> {
  label?: string;
  errorMessage?: string;
  IconElement?: FC<SVGProps<SVGSVGElement>>;
  containerClassName?: string;
}

const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(({
  label,
  errorMessage,
  IconElement,
  id: idProp,
  containerClassName,
  className,
  ...inputProps
}, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const errorMessageRef = useRef<HTMLSpanElement>(null);
  const reactId = useId();
  const id = idProp ?? reactId;
  const errorId = `${id}-error`;

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  useEffect(() => {
    const node = inputRef.current;
    const errorNode = errorMessageRef.current;
    if (!node) return;

    if (errorMessage && errorNode) {
      const width = errorNode.offsetWidth;
      node.style.paddingRight = `${width + TEXT_INPUT_ERROR_MSG_PADDING}px`;
    } else {
      node.style.paddingRight = '';
    }
  }, [ errorMessage ]);

  return (
    <div className={clsx(styles.container, containerClassName)}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={clsx(styles.input_container, { [styles.container_error]: !!errorMessage })}>
        {IconElement && <IconElement className={styles.icon} />}
        <input
          {...inputProps}
          id={id}
          ref={inputRef}
          className={clsx(styles.input, { [styles.input__with_icon]: !!IconElement }, className)}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? errorId : undefined}
        />
        {errorMessage && (
          <span aria-live="polite" id={errorId} className={styles.error_text} ref={errorMessageRef}>
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
});

export default TextInput;
