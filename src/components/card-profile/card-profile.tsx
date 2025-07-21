import { FC, HTMLAttributes } from 'react';
import styles from './card-profile.module.css';
import Placeholder from '../placeholder/placeholder';

interface ICardProfileProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const CardProfile: FC<ICardProfileProps> = ({
  className = ''
}) => {

  return (
    <div className={className}>
      <Placeholder className={styles.imagePlaceholder} />
      <Placeholder className={styles.namePlaceholder} />
      <Placeholder className={styles.emailPlaceholder} />
    </div>
  );
}

export default CardProfile;
