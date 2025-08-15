import { FC, HTMLAttributes, useEffect, useId } from 'react';

import textInputsSectionPreset
  from '@features/profile-editor/components/text-inputs-section/text-inputs-section.preset';
import TextInput from '@shared/components/text-input/text-input';
import { InputHints } from '@shared/config/forms.constants';
import useTextInputs from '@shared/hooks/use-text-inputs';
import { TProfileDetails } from '@shared/types/profile.types';
import ITextInputHintsConfig from '@shared/types/text-input-hints-config.type';
import { isNotEmpty, isValidEmail } from '@shared/utils/validation';

import styles from './text-inputs-section.module.css';

interface ITextInputsSectionProps {
  fields: TProfileDetails;
  patchDetails: (updatedFields: TProfileDetails) => void;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const hintsConfig: ITextInputHintsConfig = {
  set: {
    onSubmit: true,
  },
  clear: {
    onChange: true,
  }
}

const { firstName: firstNamePreset, lastName: lastNamePreset, email: emailPreset } = textInputsSectionPreset;

const TextInputsSection: FC<ITextInputsSectionProps> = ({
  fields,
  patchDetails,
  className,
}) => {
  const {
    values,
    hints,
    onChange,
    // onSubmit
  } = useTextInputs({
    firstName: {
      initialValue: fields.firstName,
      hints: hintsConfig,
      validationFunc: {
        [InputHints.VALID_PASSWORD]: isNotEmpty,
      }
    },
    lastName: {
      initialValue: fields.lastName,
      hints: hintsConfig,
      validationFunc: {
        [InputHints.VALID_PASSWORD]: isNotEmpty,
      }
    },
    email: {
      initialValue: fields.email,
      hints: hintsConfig,
      validationFunc: {
        [InputHints.VALID_EMAIL]: isValidEmail,
      }
    }
  });
  const id = useId();

  useEffect(() => {
    patchDetails({ ...values })
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

export default TextInputsSection;
