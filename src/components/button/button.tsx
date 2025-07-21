import { FC, HTMLAttributes } from 'react';
import styles from './button.module.css';

interface IButtonProps {
  appearance?: 'primary' | 'secondary';
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  className?: HTMLAttributes<HTMLElement>['className'];
  children: string;
}

const appearanceStyles = {
  primary: styles.button_primary,
  secondary: styles.button_secondary
}

const Button: FC<IButtonProps> = ({
  children,
  appearance = 'primary',
  type = 'button',
  className = '',
  disabled = false
}) => {
  const typeStyle = appearanceStyles[appearance];

  return (
    <button type={type} className={`${styles.button} ${typeStyle} ${className}`} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
