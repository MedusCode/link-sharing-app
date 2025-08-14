import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react';

import styles from './text-button.module.css';

interface ITextButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  children: string;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const TextButton: FC<ITextButtonProps> = ( props ) => {
  const { children, className = '', ...restProps } = props;

  return (
    <button className={clsx(styles.button, className)} {...restProps} >
      {children}
    </button>
  );
}

export default TextButton;
