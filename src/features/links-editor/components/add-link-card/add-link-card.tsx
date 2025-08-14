import clsx from 'clsx';
import React, { FC, HTMLAttributes, MouseEvent, useEffect, useMemo, useState } from 'react';

import addLinkCardPreset from '@features/links-editor/components/add-link-card/add-link-card.preset';
import { ILinkItem } from '@features/links-editor/model/types';
import { ReactComponent as DragAndDropIcon } from '@shared/assets/images/icon-drag-and-drop.svg';
import DropDown from '@shared/components/drop-down/drop-down';
import TextButton from '@shared/components/text-button/text-button';
import TextInput from '@shared/components/text-input/text-input';
import { InputHints } from '@shared/config/forms.constants';
import SocialNetworksPreset from '@shared/config/social-networks.preset';
import useTextInputs from '@shared/hooks/use-text-inputs';
import IDropDownItem from '@shared/types/drop-down-item.type';
import { TSocialId } from '@shared/types/social-id.type';
import ITextInputHintsConfig from '@shared/types/text-input-hints-config.type';
import { isNotEmpty, isValidEmail } from '@shared/utils/validation';

import styles from './add-link-card.module.css';

interface IAddLinkCardProps {
  link: ILinkItem
  availableSocialIds: TSocialId[];
  removeLink: (socialId: TSocialId) => void;
  changeLinkHref: (socialId: TSocialId, href: string) => void;
  changeLinkPlatform: (socialId: TSocialId, newSocialId: TSocialId) => void;
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

const { headingNumText, linkInput, removeButtonText, platformDropDown } = addLinkCardPreset;

const AddLinkCard: FC<IAddLinkCardProps> = ({
  link,
  availableSocialIds,
  removeLink,
  changeLinkHref,
  changeLinkPlatform,
  className = ''
}) => {
  const { id: socialId, order, href } = link;
  const {
    values,
    hints,
    onChange,
    // onSubmit
  } = useTextInputs({
    link: {
      initialValue: href,
      hints: hintsConfig,
      validationFunc: {
        [InputHints.NOT_EMPTY]: isNotEmpty,
        [InputHints.VALID_EMAIL]: isValidEmail,
      }
    }
  });
  const [ dropDownValue, setDropDownValue ] = useState<TSocialId | null>(socialId);

  const dropDownItems: Array<IDropDownItem<TSocialId>> = useMemo(() => {
    const ids = [socialId, ...availableSocialIds];
    return ids.map((id) => ({
      value: id,
      text: SocialNetworksPreset[id].name,
      IconElement: SocialNetworksPreset[id].IconElement,
    }));
  }, [socialId, availableSocialIds]);

  const onRemoveClick = (evt: MouseEvent<HTMLButtonElement>)=> {
    evt.preventDefault();
    removeLink(socialId);
  }

  useEffect(() => {
    changeLinkHref(socialId, values.link)
  }, [values.link])

  useEffect(() => {
    if (dropDownValue && socialId !== dropDownValue) {
      changeLinkPlatform(socialId, dropDownValue)
    }
  }, [dropDownValue])

  return (
    <li className={clsx(styles.container, className)} key={`${socialId}-${order}2`}>
      <div className={styles.header}>
        <div className={styles.heading}>
          <DragAndDropIcon />
          <span>{`${headingNumText}${order + 1}`}</span>
        </div>
        <TextButton type={'button'} onClick={onRemoveClick}>{removeButtonText}</TextButton>
      </div>
      <DropDown
        items={dropDownItems}
        label={platformDropDown.label}
        value={dropDownValue}
        onChange={setDropDownValue}
      />
      <TextInput
        value={values.link}
        onChange={onChange.link}
        label={linkInput.label}
        name={'link'}
        type={linkInput.type}
        IconElement={linkInput.IconElement}
        placeholder={`e.g. ${SocialNetworksPreset[socialId!]?.example || linkInput.placeholder}`}
        errorMessage={hints.link || undefined}
      />
    </li>
  );
}

export default AddLinkCard;
