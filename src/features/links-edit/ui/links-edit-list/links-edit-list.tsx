import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

import { SocialId } from '@entities/links/model/types';
import { useAppSelector } from '@shared/lib';

import { createLinksEditSelectors } from '../../model/selectors';
import { LinksEditCard } from '../links-edit-card/links-edit-card';
import { LinksEditCardRef } from '../links-edit-card/links-edit-card.types';
import styles from './links-edit-list.module.css'


interface LinksEditListProps {
  getRef?: (id: SocialId) => (inst: LinksEditCardRef | null) => void;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const selectors = createLinksEditSelectors((s: RootState) => s.linksEdit);

export const LinksEditList: FC<LinksEditListProps> = ({
  getRef,
  className = ''
}) => {
  const links = useAppSelector(selectors.selectAll)

  return (
    <ul className={clsx(styles.list, className)}>
      {
        links.map((link) => (
          <LinksEditCard
            key={`${link.id}`}
            className={styles.list_element}
            link={link}
            ref={getRef?.(link.id)}
          />
        ))
      }
    </ul>
  );
}
