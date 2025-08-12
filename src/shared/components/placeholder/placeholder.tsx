import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import styles from './placeholder.module.css';

interface IPlaceholderProps {
  isAnimated?: boolean;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const Placeholder: FC<IPlaceholderProps> = ({
  isAnimated = true,
  className = '',
}) => {

  return (
    <div className={clsx(styles.placeholder, className, { [styles.placeholder__animated]: isAnimated })} />
  );
}

export default Placeholder;
