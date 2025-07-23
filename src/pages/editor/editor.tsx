import { FC } from 'react';
import styles from './editor.module.css';
import EditorNavigation from '../../components/editor-navigation/editor-navigation';
import EditorDemo from '../../components/editor-demo/editor-demo';
import Header from '../../components/header/header';
import AnimatedOutlet from '../../animations/animated-outlet/animated-outlet';

const Editor: FC = () => {

  return (
    <div className={styles.layout}>
      <Header className={styles.header}>
        <EditorNavigation />
      </Header>
      <main className={styles.main}>
        <EditorDemo className={styles.demo} />
        <AnimatedOutlet mode={'wait'} initial={false} />
      </main>
    </div>
  );
}

export default Editor;
