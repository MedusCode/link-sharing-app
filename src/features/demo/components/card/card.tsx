import { FC } from 'react';

import styles from '@features/demo/components/card/card.module.css';
import CardProfile from '@features/demo/components/card-profile/card-profile';
import CardSocialLinks from '@features/demo/components/card-social-links/card-social-links';
import { ILinkItem } from '@shared/types/link-item.type';
import { IProfile } from '@shared/types/profile.types';

interface ICardProps {
  profile: IProfile;
  links: ILinkItem[]
}

const Card: FC<ICardProps> = ({
  profile,
  links
}) => {

  return (
    <>
      <CardProfile className={styles.profile} profile={profile} />
      <CardSocialLinks links={links} />
    </>
  );
}

export default Card;
