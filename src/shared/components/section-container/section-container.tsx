import clsx from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';

import styles from '@shared/components/section-container/section-container.module.css';
import ISectionHeaderContent from '@shared/types/section-heading-content.type';


interface ISectionHeader extends ISectionHeaderContent {
  className?: HTMLAttributes<HTMLElement>['className'];
}

interface ISectionContainerProps {
  header?: ISectionHeader;
  children: ReactNode;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const SectionContainer: FC<ISectionContainerProps> = ({
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

export default SectionContainer;
