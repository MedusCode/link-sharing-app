import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import AddLinkCard from '@features/links-editor/components/add-link-card/add-link-card';
import { ILinkItem } from '@shared/types/link-item.type';
import { TSocialId } from '@shared/types/social-id.type';

import styles from './add-links-list.module.css'

interface IAddLinkListModuleProps {
  links: ILinkItem[];
  availableSocialIds: TSocialId[];
  removeLink: (socialId: TSocialId) => void;
  changeLinkHref: (socialId: TSocialId, href: string) => void;
  changeLinkPlatform: (socialId: TSocialId, newSocialId: TSocialId) => void;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const AddLinksListModule: FC<IAddLinkListModuleProps> = ({
  links,
  availableSocialIds,
  removeLink,
  changeLinkHref,
  changeLinkPlatform,
  className = ''
}) => {

  return (
    <ul className={clsx(styles.list, className)}>
      {
        links.map((link) => (
          <AddLinkCard
            key={`${link.id}-${link.order}`}
            link={link}
            availableSocialIds={availableSocialIds}
            removeLink={removeLink}
            changeLinkHref={changeLinkHref}
            changeLinkPlatform={changeLinkPlatform}
          />
        ))
      }
    </ul>
  );
}

export default AddLinksListModule;
