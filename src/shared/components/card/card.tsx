import { FC } from 'react';

import CardProfile from './card-profile/card-profile';
import CardSocialLinks from './card-social-links/card-social-links';
import styles from './card.module.css';

const Card: FC = () => {

  return (
    <>
      <CardProfile className={styles.profile} />
      <CardSocialLinks />
    </>
  );
}

export default Card;
