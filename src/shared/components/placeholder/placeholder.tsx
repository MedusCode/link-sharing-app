import { FC, HTMLAttributes } from 'react';
import styles from './placeholder.module.css';
import clsx from 'clsx';

interface IPlaceholderProps {
  animation?: boolean;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const Placeholder: FC<IPlaceholderProps> = ({
  animation = true,
  className = '',
}) => {

  return (
    <div className={clsx(styles.placeholder, className, { [styles.placeholder_animated]: animation })} />
  );
}

export default Placeholder;
