import { FC } from 'react';

import CardSocialLinks from 'features/demo-section/card/card-social-links/card-social-links';
import styles from 'features/demo-section/card/card.module.css';

import CardProfile from '@features/demo-section/card/profile-section/profile-section';

const Card: FC = () => {

  return (
    <>
      <CardProfile className={styles.profile} />
      <CardSocialLinks />
    </>
  );
}

export default Card;
