import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import listPlaceholderPreset from '@features/links-editor/components/list-placeholder/list-placeholder.preset';

import styles from './list-placeholder.module.css';

interface IListPlaceholderProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const { IconElement, heading, description } = listPlaceholderPreset;

const ListPlaceholder: FC<IListPlaceholderProps> = ({
  className = ''
}) => {

  return (
    <div className={clsx(styles.container, className)}>
      <IconElement className={styles.illustration} />
      <span className={styles.heading}>{heading}</span>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default ListPlaceholder;
