import { FC, HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './section-container.module.css';
import { SectionContainerContent } from './section-container.types';


interface SectionHeader extends SectionContainerContent {
  className?: HTMLAttributes<HTMLElement>['className'];
}

interface SectionContainerProps {
  header?: SectionHeader;
  children: ReactNode;
  className?: HTMLAttributes<HTMLElement>['className'];
}

export const SectionContainer: FC<SectionContainerProps> = ({
  header,
  children,
  className = ''
}) => {
  const headerClassName = header?.className || '';

  return (
    <section className={clsx(styles.section, className)}>
      {
        header &&
        <div className={clsx(styles.header, headerClassName)}>
          <h1 className={styles.heading}>{header.heading}</h1>
          {header.description && <span className={styles.description}>{header.description}</span>}
        </div>
      }
      {children}
    </section>
  );
}
