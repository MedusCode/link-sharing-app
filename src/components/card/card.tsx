import { FC } from 'react';
import styles from './card.module.css';
import CardProfile from '../card-profile/card-profile';
import CardLinks from '../card-links/card-links';

const Card: FC = () => {

  return (
    <>
      <CardProfile className={styles.profile} />
      <CardLinks />
    </>
  );
}

export default Card;
