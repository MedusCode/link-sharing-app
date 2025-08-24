import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { useAppSelector } from 'shared/lib';

import { Placeholder } from '@shared/ui';

import { createProfileEditSelectors } from '../../model/selectors';
import styles from './profile-edit-demo.module.css';
import { profileEditDemoPreset } from './profile-edit-demo.preset';


interface ProfileEditDemoProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const { imgAlt } = profileEditDemoPreset;

const selectors = createProfileEditSelectors((s: RootState) => s.profileEdit);

export const ProfileEditDemo: FC<ProfileEditDemoProps> = ({
  className = ''
}) => {
  const { img, firstName, lastName, email } = useAppSelector(selectors.selectProfile)

  return (
    <div className={clsx(styles.container, className)}>
      {img
        ? <img className={styles.image} src={img ? img : undefined} alt={imgAlt} draggable={false} />
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
