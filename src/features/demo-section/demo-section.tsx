import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import Card from '@features/demo-section/components/card/card';
import SectionContainer from '@shared/components/section-container/section-container';
import { ILinkItem } from '@shared/types/link-item.type';

import styles from './demo-section.module.css';

interface IDemoSectionProps {
  links: ILinkItem[];
  className?: HTMLAttributes<HTMLElement>['className'];
}

const DemoSection: FC<IDemoSectionProps> = ({
  links,
  className = ''
}) => {

  return (
    <SectionContainer className={clsx(styles.container, className)}>
      <div className={styles.phone}>
        <Card links={links} />
      </div>
    </SectionContainer>
  );
}

export default DemoSection;
