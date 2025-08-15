import { FC, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import AnimatedOutlet from '@animations/components/animated-outlet/animated-outlet';
import AnimatedSlideContainer from '@animations/components/animated-slide-container/animated-slide-container';
import { useAppSelector } from '@app/store/hooks';
import { RootState } from '@app/store/types';
import Demo from '@features/demo/demo';
import { createLinksEditorSelectors } from '@features/links-editor/model/selectors';
import { createProfileEditorSelectors } from '@features/profile-editor/model/selectors';
import Button from '@shared/components/button/button';
import HeaderContainer from '@shared/components/header-container/header-container';
import Logo from '@shared/components/logo/logo';
import Tabs from '@shared/components/tabs/tabs';
import ITabItem from '@shared/types/tab-item.type';

import styles from './editor.page.module.css';
import {
  editorDemoAnimationPreset,
  editorHeaderAnimationPreset,
  editorNavigationPreset,
  editorOutletAnimationPreset,
  editorSectionAnimationPreset
} from './editor.page.presets';

const linksEditorSelectors = createLinksEditorSelectors(
  (s: RootState) => s.linksEditor
);
const profileEditorSelectors = createProfileEditorSelectors(
  (s: RootState) => s.profileEditor
);

const { tabs, button } = editorNavigationPreset;

const EditorPage: FC = () => {
  const location = useLocation()
  const links = useAppSelector(linksEditorSelectors.selectAll);
  const profile = useAppSelector(profileEditorSelectors.selectProfile);

  const tabItems = useMemo(() => {
    return tabs.map((tab): ITabItem => ({
      ...tab,
      isActive: tab.to === location.pathname,
    }));
  }, [ location.pathname ]);

  return (
    <div className={styles.layout}>
      <AnimatedSlideContainer animation={editorHeaderAnimationPreset} className={styles.header_container}>
        <HeaderContainer>
          <nav className={styles.navigation}>
            <Logo className={styles.logo} />
            <Tabs items={tabItems} />
            <Button className={styles.button} appearance={'secondary'} to={button.to}>{button.text}</Button>
          </nav>
        </HeaderContainer>
      </AnimatedSlideContainer>
      <main className={styles.main}>
        <AnimatedSlideContainer animation={editorDemoAnimationPreset} className={styles.demo_container}>
          <Demo className={styles.demo} profile={profile} links={links} />
        </AnimatedSlideContainer>
        <AnimatedSlideContainer animation={editorSectionAnimationPreset} className={styles.section_container}>
          <AnimatedOutlet animation={editorOutletAnimationPreset} />
        </AnimatedSlideContainer>
      </main>
    </div>
  );
}

export default EditorPage;
