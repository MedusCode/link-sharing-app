import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './placeholder.module.css';


interface PlaceholderProps {
  isAnimated?: boolean;
  className?: HTMLAttributes<HTMLElement>['className'];
}

export const Placeholder: FC<PlaceholderProps> = ({
  isAnimated = true,
  className = '',
}) => {

  return (
    <div className={clsx(styles.placeholder, className, { [styles.placeholder__animated]: isAnimated })} />
  );
}
