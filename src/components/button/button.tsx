import { FC } from 'react';
import styles from './button.module.css';

interface IButtonProps {
  style?: 'primary' | 'secondary';
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  children: string;
}

const typeStyles = {
  primary: styles.button_primary,
  secondary: styles.button_secondary
}

const Button: FC<IButtonProps> = ({
  children,
  style= 'primary',
  type = 'button',
  disabled = false
}) => {
  const typeStyle = typeStyles[style];

  return (
    <button type={type} className={`${styles.button} ${typeStyle}`} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
