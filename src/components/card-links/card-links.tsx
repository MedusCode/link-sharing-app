import { FC, HTMLAttributes, useState } from 'react';
import styles from './card-links.module.css';
import Placeholder from '../placeholder/placeholder';
import { nanoid } from 'nanoid';

interface ICardLinksProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const CardLinks: FC<ICardLinksProps> = ({
  className = ''
}) => {
  const [ links, setLinks ] = useState<any[]>([null, null, null, null, null]);

  return (
    <ul className={`${styles.list} ${className}`}>
      { links.length <= 5 ? links.map((link) =>
        <li className={styles.listElement} key={nanoid()}>
          <Placeholder className={styles.linkPlaceholder} />
        </li>
      ) :
        <></>
      }
    </ul>
  );
}

export default CardLinks;
