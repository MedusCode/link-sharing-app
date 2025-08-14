import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import { ReactComponent as Illustration } from '@shared/assets/images/illustration-empty.svg';

import styles from './list-placeholder.module.css';

interface IListPlaceholderProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const ListPlaceholder: FC<IListPlaceholderProps> = ({
  className = ''
}) => {

  return (
    <div className={clsx(styles.container, className)}>
      <Illustration className={styles.illustration} />
      <span className={styles.heading}>Let’s get you started</span>
      <p className={styles.description}>Use the “Add new link” button to get started. Once you have more than one link,
        you can reorder and edit
        them. We’re here to help you share your profiles with everyone!</p>
    </div>
  );
}

export default ListPlaceholder;
