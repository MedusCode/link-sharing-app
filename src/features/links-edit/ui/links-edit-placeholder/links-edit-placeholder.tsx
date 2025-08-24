import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './links-edit-placeholder.module.css';
import { linksEditPlaceholderPreset } from './links-edit-placeholder.preset';


interface LinksEditPlaceholderProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const { IconElement, heading, description } = linksEditPlaceholderPreset;

export const LinksEditPlaceholder: FC<LinksEditPlaceholderProps> = ({
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
