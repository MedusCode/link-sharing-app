import { FC, HTMLAttributes } from 'react';
import styles from './demo-section.module.css';
import Card from '../../../../shared/components/card/card';
import clsx from 'clsx';

interface IDemoSectionProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const DemoSection: FC<IDemoSectionProps> = ({
  className = ''
}) => {

  return (
    <section className={clsx(styles.container, className)}>
      <div className={styles.phone}>
        <Card />
      </div>
    </section>
  );
}

export default DemoSection;
