import { FC } from 'react';

import { LinksEditDemo } from '@features/links-edit';
import { ProfileEditDemo } from '@features/profile-edit';
import { AnimatedOutlet, AnimatedSlideContainer } from '@shared/animations';
import { Button, HeaderContainer, Logo, SectionContainer, Tabs } from '@shared/ui';

import {
  editorDemoAnimationConfig,
  editorHeaderAnimationConfig,
  editorOutletAnimationConfig,
  editorSectionAnimationConfig
} from './editor-layout.config';
import styles from './editor-layout.module.css';
import { editorLayoutPreset } from './editor-layout.preset';


const { navigation: { tabs, button } } = editorLayoutPreset;

export const EditorLayout: FC = () => {

  return (
    <div className={styles.layout}>
      <AnimatedSlideContainer animation={editorHeaderAnimationConfig} className={styles.header_container}>
        <Header />
      </AnimatedSlideContainer>
      <main className={styles.main}>
        <AnimatedSlideContainer animation={editorDemoAnimationConfig} className={styles.demo_container}>
          <DemoSection />
        </AnimatedSlideContainer>
        <AnimatedSlideContainer animation={editorSectionAnimationConfig} className={styles.section_container}>
          <AnimatedOutlet animation={editorOutletAnimationConfig} />
        </AnimatedSlideContainer>
      </main>
    </div>
  );
}

const Header: FC = () => {

  return (
    <HeaderContainer>
      <nav className={styles.navigation}>
        <Logo className={styles.logo} />
        <Tabs items={tabs} />
        <Button className={styles.navigation_button} appearance={'secondary'} to={button.to}>{button.text}</Button>
      </nav>
    </HeaderContainer>
  );
}

const DemoSection: FC = () => {

  return (
    <SectionContainer className={styles.demo_section}>
      <div className={styles.phone}>
        <ProfileEditDemo className={styles.profile} />
        <div className={styles.links_container}>
          <LinksEditDemo className={styles.links_list} />
        </div>
      </div>
    </SectionContainer>
  );
}
