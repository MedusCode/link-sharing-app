import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import Card from '@features/demo-section/card/card';
import SectionContainer from '@shared/components/section-container/section-container';

import styles from './demo-section.module.css';

interface IDemoSectionProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const DemoSection: FC<IDemoSectionProps> = ({
  className = ''
}) => {

  return (
    <SectionContainer className={clsx(styles.container, className)}>
      <div className={styles.phone}>
        <Card />
      </div>
    </SectionContainer>
  );
}

export default DemoSection;
