import { FC } from 'react';

import AnimatedOutlet from '@animations/components/animated-outlet/animated-outlet';
import DemoSection from '@features/demo-section/demo-section';
import EditorNavigation from '@pages/editor/components/editor-navigation/editor-navigation';
import HeaderContainer from '@shared/components/header-container/header-container';

import styles from './editor.page.module.css';
import { editorOutletAnimationPreset } from './editor.page.presets';

const EditorPage: FC = () => {

  return (
    <div className={styles.layout}>
      <HeaderContainer className={styles.header}>
        <EditorNavigation />
      </HeaderContainer>
      <main className={styles.main}>
        <DemoSection className={styles.demo} />
        <AnimatedOutlet animation={editorOutletAnimationPreset} />
      </main>
    </div>
  );
}

export default EditorPage;
