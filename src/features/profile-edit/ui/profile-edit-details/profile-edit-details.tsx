import { FC, HTMLAttributes, useEffect, useId } from 'react';

import { InputHints } from '@shared/config/forms.config';
import { TextInputHintsConfig, useAppDispatch, useAppSelector, useTextInputsUtil } from '@shared/lib';
import { isNotEmpty, isValidEmail } from '@shared/lib/text-inputs/validate-value.util';
import { TextInput } from '@shared/ui';

import { createProfileEditSelectors } from '../../model/selectors';
import { profileEditActions } from '../../model/slice';
import styles from './profile-edit-details.module.css';
import { profileEditDetailsPreset } from './profile-edit-details.preset';


interface IProfileEditDetailsProps {
  hintsConfig?: TextInputHintsConfig;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const hintsDefaultConfig = {
  set: {
    onSubmit: true,
  },
  clear: {
    onChange: true,
  }
} as Required<TextInputHintsConfig>;

const { firstName: firstNamePreset, lastName: lastNamePreset, email: emailPreset } = profileEditDetailsPreset;

const selectors = createProfileEditSelectors((s: RootState) => s.profileEdit);
const actions = profileEditActions;

export const ProfileEditDetails: FC<IProfileEditDetailsProps> = ({
  hintsConfig,
  className,
}) => {
  const fields = useAppSelector(selectors.selectDetails);
  const dispatch = useAppDispatch();
  const {
    values,
    hints,
    onChange,
    // onSubmit
  } = useTextInputsUtil({
    firstName: {
      initialValue: fields.firstName,
      hints: hintsConfig || hintsDefaultConfig,
      validationFunc: {
        [InputHints.VALID_PASSWORD]: isNotEmpty,
      }
    },
    lastName: {
      initialValue: fields.lastName,
      hints: hintsConfig || hintsDefaultConfig,
      validationFunc: {
        [InputHints.VALID_PASSWORD]: isNotEmpty,
      }
    },
    email: {
      initialValue: fields.email,
      hints: hintsConfig || hintsDefaultConfig,
      validationFunc: {
        [InputHints.VALID_EMAIL]: isValidEmail,
      }
    }
  });
  const id = useId();

  useEffect(() => {
    dispatch(actions.detailPatched({ ...values }))
  }, [ values ])

  return (
    <div className={className}>
      <label className={styles.label} htmlFor={`${id}-first-name`}>{firstNamePreset.label}</label>
      <TextInput
        value={values.firstName}
        name={'first-name'}
        id={`${id}-first-name`}
        placeholder={firstNamePreset.placeholder}
        type={firstNamePreset.type}
        errorMessage={hints.firstName || undefined}
        onChange={onChange.firstName}
      />
      <label className={styles.label} htmlFor={`${id}-last-name`}>{lastNamePreset.label}</label>
      <TextInput
        value={values.lastName}
        name={'last-name'}
        id={`${id}-last-name`}
        placeholder={lastNamePreset.placeholder}
        type={lastNamePreset.type}
        errorMessage={hints.lastName || undefined}
        onChange={onChange.lastName}
      />
      <label className={styles.label} htmlFor={`${id}-email`}>{emailPreset.label}</label>
      <TextInput
        value={values.email}
        name={'email'}
        id={`${id}-email`}
        placeholder={emailPreset.placeholder}
        type={emailPreset.type}
        errorMessage={hints.email || undefined}
        onChange={onChange.email}
      />
    </div>
  );
}
