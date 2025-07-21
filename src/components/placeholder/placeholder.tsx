import { FC, HTMLAttributes } from 'react';
import styles from './placeholder.module.css';

interface IPlaceholderProps {
  animation?: boolean;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const Placeholder: FC<IPlaceholderProps> = ({
  animation = true,
  className = '',
}) => {

  return (
    <div className={`${styles.placeholder} ${animation ? styles.placeholder_animated : ''} ${className}`} />
  );
}

export default Placeholder;
