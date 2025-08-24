import {
  forwardRef,
  HTMLAttributes,
  MouseEvent,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';
import clsx from 'clsx';
import { TextInputHintsConfig, useAppDispatch, useAppSelector, useTextInputsUtil } from 'shared/lib';

import { socialNetworksPreset } from '@entities/links';
import { SocialId } from '@entities/links/model/types';
import { InputHints } from '@shared/config';
import { isNotEmpty, isValidUrl } from '@shared/lib/text-inputs/validate-value.util';
import { DropDown, TextButton, TextInput } from '@shared/ui';
import { DropDownItem } from '@shared/ui/drop-down/drop-down.types';

import { createLinksEditSelectors } from '../../model/selectors';
import { linksEditActions } from '../../model/slice';
import { LinkItem } from '../../model/types';
import { ReactComponent as DragAndDropIcon } from './icons/icon-drag-and-drop.svg';
import styles from './links-edit-card.module.css';
import { linksEditCardPreset } from './links-edit-card.preset';
import { LinksEditCardRef } from './links-edit-card.types';


interface LinksEditCardProps {
  link: LinkItem
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

const { headingNumText, linkInput, removeButtonText, platformDropDown } = linksEditCardPreset;

const selectors = createLinksEditSelectors((s: RootState) => s.linksEdit);
const actions = linksEditActions;

export const LinksEditCard = forwardRef<LinksEditCardRef, LinksEditCardProps>(({
  link,
  hintsConfig,
  className = ''
}, ref) => {
  const { id: socialId, order, href } = link;
  const cardRef = useRef<HTMLLIElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const availableSocialIds = useAppSelector(selectors.selectAvailableSocialIds);
  const [ dropDownValue, setDropDownValue ] = useState<SocialId | null>(socialId);
  const {
    values,
    hints,
    onChange,
    onSubmit
  } = useTextInputsUtil({
    link: {
      initialValue: href,
      hints: hintsConfig || hintsDefaultConfig,
      validationFunc: {
        [InputHints.NOT_EMPTY]: isNotEmpty,
        [InputHints.VALID_URL]: isValidUrl,
      }
    }
  });

  const dropDownItems: Array<DropDownItem<SocialId>> = useMemo(() => {
    const ids = [ socialId, ...availableSocialIds ];
    return ids.map((id) => ({
      value: id,
      text: socialNetworksPreset[id].name,
      IconElement: socialNetworksPreset[id].IconElement,
    }));
  }, [ socialId, availableSocialIds ]);

  const removeLink = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(actions.linkRemoved({ id: socialId }))
  }

  useEffect(() => {
    dispatch(actions.linkHrefUpdated({ id: socialId, href: values.link }))
  }, [ values.link ])

  useEffect(() => {
    if (dropDownValue && socialId !== dropDownValue) {
      dispatch(actions.linkPlatformUpdated({ id: socialId, newId: dropDownValue }))
    }
  }, [ dropDownValue ])

  useImperativeHandle(ref, () => ({
    validate: () => onSubmit(),
    scrollIntoView: (options?: ScrollIntoViewOptions) => cardRef.current?.scrollIntoView(options),
    focusInput: (options?: FocusOptions) => inputRef.current?.focus(options)
  }), [ onSubmit ]);

  return (
    <li ref={cardRef} className={clsx(styles.container, className)} key={`${socialId}-${order}2`}>
      <div className={styles.header}>
        <div className={styles.heading}>
          <DragAndDropIcon />
          <span>{`${headingNumText}${order + 1}`}</span>
        </div>
        <TextButton type={'button'} onClick={removeLink}>{removeButtonText}</TextButton>
      </div>
      <DropDown
        items={dropDownItems}
        label={platformDropDown.label}
        value={dropDownValue}
        onChange={setDropDownValue}
      />
      <TextInput
        ref={inputRef}
        value={values.link}
        onChange={onChange.link}
        label={linkInput.label}
        name={`link${order}`}
        type={linkInput.type}
        IconElement={linkInput.IconElement}
        placeholder={`e.g. ${socialNetworksPreset[socialId]?.example || linkInput.placeholder}`}
        errorMessage={hints.link || undefined}
      />
    </li>
  );
});
