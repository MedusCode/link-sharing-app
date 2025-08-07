import { FC, HTMLAttributes, useState } from 'react';
import styles from './card-social-links.module.css';
import Placeholder from '../../placeholder/placeholder';
import clsx from 'clsx';

interface ICardSocialLinksProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const CardSocialLinks: FC<ICardSocialLinksProps> = ({
  className = ''
}) => {
  const [ links, setLinks ] = useState<any[]>([null, null, null, null, null]);

  return (
    <ul className={clsx(styles.list, className)}>
      { links.length <= 5 ? links.map((link, index) =>
        <li className={styles.listElement} key={index}>
          <Placeholder className={styles.linkPlaceholder} />
        </li>
      ) :
        <></>
      }
    </ul>
  );
}

export default CardSocialLinks;
