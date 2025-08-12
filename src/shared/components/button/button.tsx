import clsx from 'clsx';
import { ButtonHTMLAttributes, ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from 'react';
import { Link, To } from 'react-router-dom';


import safeRel from '@shared/utils/safe-rel';

import styles from './button.module.css';

type TAppearance = 'primary' | 'secondary';

interface IBaseProps {
  children: ReactNode;
  appearance?: TAppearance;
  className?: HTMLAttributes<HTMLElement>['className'];
}

interface ILinkButtonProps extends IBaseProps, Omit<ComponentPropsWithoutRef<typeof Link>, 'className' | 'children' | 'to'> {
  to: To;
}

interface INativeButtonProps extends IBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
}

type TButtonProps = ILinkButtonProps | INativeButtonProps;

const isLink = (p: TButtonProps): p is ILinkButtonProps => 'to' in p;

const appearanceStyles = {
  primary: styles.button__primary,
  secondary: styles.button__secondary,
} as const;

function Button(props: TButtonProps) {
  if (isLink(props)) {
    const { children, appearance = 'primary', className, rel, target, ...rest } = props;

    return (
      <Link
        {...rest}
        className={clsx(styles.button, styles.button__link, appearanceStyles[appearance], className)}
        rel={safeRel(rel, target)}
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

export default Button;
