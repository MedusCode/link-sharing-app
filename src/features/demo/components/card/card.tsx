import { FC } from 'react';

import styles from '@features/demo/components/card/card.module.css';
import CardSocialLinks from '@features/demo/components/card-social-links/card-social-links';
import CardProfile from '@features/demo/components/profile-section/profile-section';
import { ILinkItem } from '@shared/types/link-item.type';

interface ICardProps {
  links: ILinkItem[]
}

const Card: FC<ICardProps> = ({
  links
}) => {

  return (
    <>
      <CardProfile className={styles.profile} />
      <CardSocialLinks links={links} />
    </>
  );
}

export default Card;
