import { FC, FormEventHandler, HTMLAttributes, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from 'shared/lib';

import { SocialId } from '@entities/links/model/types';
import { Button } from '@shared/ui';

import { createLinksEditSelectors } from '../../model/selectors';
import { linksEditActions } from '../../model/slice';
import { LinksEditCardRef } from '../links-edit-card/links-edit-card.types';
import { LinksEditList } from '../links-edit-list/links-edit-list';
import { LinksEditPlaceholder } from '../links-edit-placeholder/links-edit-placeholder';
import styles from './links-edit-form.module.css';
import { linksEditFormPreset } from './links-edit-form.preset';


interface LinksEditFormProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const { addButtonText, saveButtonText } = linksEditFormPreset;

const selectors = createLinksEditSelectors((s: RootState) => s.linksEdit);
const actions = linksEditActions;

export const LinksEditForm: FC<LinksEditFormProps> = ({
  className = ''
}) => {
  const cardRefs = useRef(new Map<SocialId, LinksEditCardRef>());
  const dispatch = useAppDispatch();
  const availableSocialIds = useAppSelector(selectors.selectAvailableSocialIds);
  const links = useAppSelector(selectors.selectAll)
  const isListEmpty = links.length === 0;

  const createNewLink = () => {
    dispatch(actions.linkAdded({ id: availableSocialIds[0] }))
  }

  const makeRef = useMemo(
    () => (id: SocialId) =>
      (inst: LinksEditCardRef | null) => {
        const map = cardRefs.current;
        if (inst) map.set(id, inst);
        else map.delete(id);
      },
    []
  );

  const validateForm = (): boolean => {
    let isAllValid = true;

    links.forEach(({ id }) => {
      const card = cardRefs.current.get(id);
      if (!card) return;

      const isCardValid = card.validate();
      if (!isCardValid && isAllValid) {
        isAllValid = false;
        card.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        card.focusInput?.({ preventScroll: true });
      }
    })

    return isAllValid;
  }

  const submitForm: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    if (!validateForm()) {
      return
    }

    console.log(
      links
    )
  };

  return (
      <form className={clsx(styles.form, className)} onSubmit={submitForm} noValidate>
        <Button
          className={styles.add_button}
          appearance={'secondary'}
          onClick={createNewLink}
          disabled={availableSocialIds.length === 0}
        >{addButtonText}</Button>
        {
          isListEmpty
            ?
            <LinksEditPlaceholder className={styles.list} />
            :
            <LinksEditList
              className={styles.list}
              getRef={makeRef}
            />
        }
        <div className={styles.footer}>
          <Button className={styles.save_button} disabled={isListEmpty} type={'submit'}>{saveButtonText}</Button>
        </div>
      </form>
  );
}
