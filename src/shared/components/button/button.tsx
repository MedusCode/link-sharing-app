import { ButtonHTMLAttributes, FC, HTMLAttributes, MouseEvent } from 'react';
import styles from './button.module.css';
import { Link } from 'react-router-dom';
import TRoutePath from '../../types/route-path.type';
import TLinkTarget from '../../types/link-target.type';
import clsx from 'clsx';

type TAppearance = 'primary' | 'secondary';

interface IBaseButtonProps {
  children: string;
  appearance?: TAppearance;
  className?: HTMLAttributes<HTMLElement>['className'];
}

export interface ILinkButtonProps extends IBaseButtonProps {
  to: TRoutePath;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  target?: TLinkTarget;
}

export interface IButtonProps extends IBaseButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const isLinkButton = (
  props: ILinkButtonProps | IButtonProps
): props is ILinkButtonProps => {
  return 'to' in props;
};

const appearanceStyles = {
  primary: styles.button_primary,
  secondary: styles.button_secondary
}

const Button: FC<IButtonProps | ILinkButtonProps> = ( props ) => {
  const {
    children,
    appearance = 'primary',
    className = '',
  } = props;
  const typeStyle = appearanceStyles[appearance];

  if (isLinkButton(props)) {
    return (
      <Link
        className={clsx(styles.button, styles.button_link, typeStyle, className)}
        to={props.to}
        onClick={props.onClick}
        target={props.target}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={clsx(styles.button, typeStyle, className)}
      type={props.type ?? 'button'}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
}

export default Button;
