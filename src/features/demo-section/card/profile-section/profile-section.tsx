import { FC, HTMLAttributes } from 'react';

import styles from '@features/demo-section/card/profile-section/card-profile.module.css';
import Placeholder from '@shared/components/placeholder/placeholder';


interface ICardProfileProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const CardProfile: FC<ICardProfileProps> = ({
  className = ''
}) => {

  return (
    <div className={className}>
      <Placeholder className={styles.image_placeholder} />
      <Placeholder className={styles.name_placeholder} />
      <Placeholder className={styles.email_placeholder} />
    </div>
  );
}

export default CardProfile;
