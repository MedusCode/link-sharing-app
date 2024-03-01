import { FC, ReactElement } from 'react';
import styles from './button.module.css';

interface IButtonProps {
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  children: string;
}

const typeStyles = {
  primary: styles.button_primary,
  secondary: styles.button_secondary
}

const Button: FC<IButtonProps> = ({ children, disabled = false, type= 'primary' }) => {
  const typeStyle = typeStyles[type];

  return (
    <button className={`${styles.button} ${typeStyle}`} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
