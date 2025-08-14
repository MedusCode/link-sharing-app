import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import AddLinksList from '@features/links-editor/components/add-links-list/add-links-list';
import LinksForm from '@features/links-editor/components/links-form/links-form';
import ListPlaceholder from '@features/links-editor/components/list-placeholder/list-placeholder';
import { LinksFormProvider } from '@features/links-editor/context/form-context';
import linksEditorButtonsPreset from '@features/links-editor/links-editor.preset';
import Button from '@shared/components/button/button';
import { ILinkItem } from '@shared/types/link-item.type';
import { TSocialId } from '@shared/types/social-id.type';

import styles from './links-editor.module.css';

interface ILinksEditorProps {
  links: ILinkItem[];
  availableSocialIds: TSocialId[];
  removeLink: (socialId: TSocialId) => void;
  changeLinkHref: (socialId: TSocialId, href: string) => void;
  changeLinkPlatform: (socialId: TSocialId, newSocialId: TSocialId) => void;
  addLink: () => void;
  className?: HTMLAttributes<HTMLElement>['className'];
}

const { addButtonText, saveButtonText } = linksEditorButtonsPreset;

const LinksEditor: FC<ILinksEditorProps> = ({
  links,
  availableSocialIds,
  removeLink,
  changeLinkHref,
  changeLinkPlatform,
  addLink,
  className = ''
}) => {
  const isListEmpty = links.length === 0;

  return (
    <LinksFormProvider>
      <LinksForm className={clsx(styles.form, className)}>
        <Button
          className={styles.add_button}
          appearance={'secondary'}
          onClick={addLink}
          disabled={availableSocialIds.length === 0}
        >{addButtonText}</Button>
        {
          isListEmpty
            ?
            <ListPlaceholder className={styles.list} />
            :
            <AddLinksList
              className={styles.list}
              links={links}
              availableSocialIds={availableSocialIds}
              removeLink={removeLink}
              changeLinkHref={changeLinkHref}
              changeLinkPlatform={changeLinkPlatform}
            />
        }
        <div className={styles.footer}>
          <Button className={styles.save_button} disabled={isListEmpty} type={'submit'}>{saveButtonText}</Button>
        </div>
      </LinksForm>
    </LinksFormProvider>
  );
}

export default LinksEditor;
