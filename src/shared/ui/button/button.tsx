import { ButtonHTMLAttributes, ComponentPropsWithoutRef, FC, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { getSafeRelUtil } from '@shared/lib';
import { Path } from '@shared/router';

import styles from './button.module.css';


type Appearance = 'primary' | 'secondary';

interface BaseProps {
  children: ReactNode;
  appearance?: Appearance;
  className?: HTMLAttributes<HTMLElement>['className'];
}

interface LinkButtonProps extends BaseProps, Omit<ComponentPropsWithoutRef<typeof Link>, 'className' | 'children' | 'to'> {
  to: Path;
}

interface NativeButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

const isLink = (p: ButtonProps): p is LinkButtonProps => 'to' in p;

const appearanceStyles = {
  primary: styles.button__primary,
  secondary: styles.button__secondary,
} as const;

export const Button: FC<ButtonProps> = (props) => {
  if (isLink(props)) {
    const { children, appearance = 'primary', className, rel, target, ...rest } = props;

    return (
      <Link
        {...rest}
        className={clsx(styles.button, styles.button__link, appearanceStyles[appearance], className)}
        rel={getSafeRelUtil(rel, target)}
        target={target}
      >
        {children}
      </Link>
    );
  }

  const { children, appearance = 'primary', className, type, ...rest } = props;
  return (
    <button
      {...rest}
      type={type ?? 'button'}
      className={clsx(styles.button, appearanceStyles[appearance], className)}
    >
      {children}
    </button>
  );
}
