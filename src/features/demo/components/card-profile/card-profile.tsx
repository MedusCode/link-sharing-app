import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import styles from '@features/demo/components/card-profile/card-profile.module.css';
import Placeholder from '@shared/components/placeholder/placeholder';
import { IProfile } from '@shared/types/profile.types';


interface ICardProfileProps {
  profile: IProfile;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const CardProfile: FC<ICardProfileProps> = ({
  profile,
  className = ''
}) => {
  const { img, firstName, lastName, email } = profile;

  return (
    <div className={clsx(styles.container, className)}>
      {img
        ? <img className={styles.image} src={img ? img : undefined} alt={'Profile Image Preview'} draggable={false} />
        : <Placeholder className={styles.image_placeholder} />
      }
      {firstName || lastName
        ? <span className={clsx(styles.text_field, styles.name)}>{`${firstName} ${lastName}`}</span>
        : <Placeholder className={styles.name_placeholder} />
      }
      {email
        ? <span className={clsx(styles.text_field, styles.email)}>{email}</span>
        : <Placeholder className={styles.email_placeholder} />
      }
    </div>
  );
}

export default CardProfile;
