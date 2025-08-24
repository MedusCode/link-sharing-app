import { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './text-button.module.css';


interface TextButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  children: string;
  className?: HTMLAttributes<HTMLElement>['className'];
}

export const TextButton: FC<TextButtonProps> = ( props ) => {
  const { children, className = '', ...restProps } = props;

  return (
    <button className={clsx(styles.button, className)} {...restProps} >
      {children}
    </button>
  );
}
