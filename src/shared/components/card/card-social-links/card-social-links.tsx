import clsx from 'clsx';
import { FC, HTMLAttributes, useState } from 'react';

import Placeholder from '@shared/components/placeholder/placeholder';

import styles from './card-social-links.module.css';

interface ICardSocialLinksProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const CardSocialLinks: FC<ICardSocialLinksProps> = ({
  className = ''
}) => {
  const [ links ] = useState<null[]>([ null, null, null, null, null ]);

  return (
    <ul className={clsx(styles.list, className)}>
      {links.length <= 5 ? links.map((link, index) =>
          <li className={styles.listElement} key={index}>
            <Placeholder className={styles.link_placeholder} />
          </li>
        ) :
        <></>
      }
    </ul>
  );
}

export default CardSocialLinks;
