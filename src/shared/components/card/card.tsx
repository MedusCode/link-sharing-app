import { FC } from 'react';
import styles from './card.module.css';
import CardProfile from './card-profile/card-profile';
import CardSocialLinks from './card-social-links/card-social-links';

const Card: FC = () => {

  return (
    <>
      <CardProfile className={styles.profile} />
      <CardSocialLinks />
    </>
  );
}

export default Card;
