import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import styles from 'features/demo/demo.module.css';

import Card from '@features/demo/components/card/card';
import SectionContainer from '@shared/components/section-container/section-container';
import { ILinkItem } from '@shared/types/link-item.type';
import { IProfile } from '@shared/types/profile.types';


interface IDemoSectionProps {
  profile: IProfile;
  links: ILinkItem[];
  className?: HTMLAttributes<HTMLElement>['className'];
}

const Demo: FC<IDemoSectionProps> = ({
  profile,
  links,
  className = ''
}) => {

  return (
    <SectionContainer className={clsx(styles.container, className)}>
      <div className={styles.phone}>
        <Card profile={profile} links={links} />
      </div>
    </SectionContainer>
  );
}

export default Demo;
