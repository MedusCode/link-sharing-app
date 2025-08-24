import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { useAppSelector } from 'shared/lib';

import { socialNetworksPreset } from '@entities/links';
import { SocialLink } from '@entities/links/ui/social-link/social-link';
import { Placeholder } from '@shared/ui';

import { createLinksEditSelectors } from '../../model/selectors';
import styles from './links-edit-demo.module.css';


interface LinksEditDemoProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const selectors = createLinksEditSelectors((s: RootState) => s.linksEdit);

export const LinksEditDemo: FC<LinksEditDemoProps> = ({
  className = ''
}) => {
  const links = useAppSelector(selectors.selectAll)

  return (
    <ul className={clsx(styles.list, className)}>
      {links.map((link) => {
        const { name, IconElement, color, isColorLight } = socialNetworksPreset[link.id];
        return (
          <li className={styles.list_element} key={`${link.id}-${link.order}`}>
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
        <li className={styles.list_element} key={`pc-${idx}`}>
          <Placeholder className={styles.link_placeholder} />
        </li>
      ))}
    </ul>
  );
}
