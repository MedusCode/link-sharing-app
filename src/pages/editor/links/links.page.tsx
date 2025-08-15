import { FC } from 'react';

import styles from 'pages/editor/links/links.page.module.css';
import { linksAnimationPreset, linksSectionHeaderPreset } from 'pages/editor/links/links.page.presets';

import SectionAnimation from '@animations/components/animated-slide-container/animated-slide-container';
import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { RootState } from '@app/store/types';
import LinksEditor from '@features/links-editor/links-editor';
import { createLinksEditorSelectors } from '@features/links-editor/model/selectors';
import { linksEditorActions } from '@features/links-editor/model/slice';
import SectionContainer from '@shared/components/section-container/section-container';
import { TSocialId } from '@shared/types/social-id.type';


const selectors = createLinksEditorSelectors((s: RootState) => s.linksEditor);
const actions = linksEditorActions;

const LinksPage: FC = () => {
  const dispatch = useAppDispatch();
  const links = useAppSelector(selectors.selectAll);
  const availableSocialIds = useAppSelector(selectors.selectAvailableSocialIds);

  const addLink = () =>
    dispatch(actions.linkAdded({ id: availableSocialIds[0] }));

  const removeLink = (socialId: TSocialId) =>
    dispatch(actions.linkRemoved({ id: socialId }));

  const changeLinkHref = (socialId: TSocialId, href: string) =>
    dispatch(actions.linkHrefUpdated({ id: socialId, href: href }));

  const changeLinkPlatform = (socialId: TSocialId, newSocialId: TSocialId) =>
    dispatch(actions.linkPlatformUpdated({ id: socialId, newId: newSocialId }));

  return (
    <SectionAnimation className={styles.container} animation={linksAnimationPreset}>
      <SectionContainer
        header={{ className: styles.section_header, ...linksSectionHeaderPreset }}
        className={styles.section}
      >
        <LinksEditor
          links={links}
          availableSocialIds={availableSocialIds}
          addLink={addLink}
          removeLink={removeLink}
          changeLinkHref={changeLinkHref}
          changeLinkPlatform={changeLinkPlatform}
          className={styles.editor}
        />
      </SectionContainer>
    </SectionAnimation>
  );
}

export default LinksPage;
