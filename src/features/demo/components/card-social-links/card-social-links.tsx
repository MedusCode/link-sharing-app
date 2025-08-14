import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import styles from '@features/demo/components/card-social-links/card-social-links.module.css';
import Placeholder from '@shared/components/placeholder/placeholder';
import SocialLink from '@shared/components/social-link/social-link';
import socialNetworksPreset from '@shared/config/social-networks.preset';
import { ILinkItem } from '@shared/types/link-item.type';


interface ICardSocialLinksProps {
  links: ILinkItem[];
  className?: HTMLAttributes<HTMLElement>['className'];
}

const CardSocialLinks: FC<ICardSocialLinksProps> = ({
  links,
  className = ''
}) => {

  return (
    <ul className={clsx(styles.list, className)}>
      {links.map((link) => {
        const { name, IconElement, color, isColorLight } = socialNetworksPreset[link.id];
        return (
          <li className={styles.listElement} key={`${link.id}-${link.order}`}>
            <SocialLink
              href={link.href}
              IconElement={IconElement}
              color={color}
              isLight={isColorLight}
            >
              {name}
            </SocialLink>
          </li>
        )
      })}

      {Array.from({ length: Math.max(0, 5 - links.length) }).map((_, idx) => (
        <li className={styles.listElement} key={`placeholder-${idx}`}>
          <Placeholder className={styles.link_placeholder} />
        </li>
      ))}
    </ul>
  );
}

export default CardSocialLinks;
