import { FC, ReactNode } from 'react';
import styles from './editor.layout.module.css';
import Navigation from '../../components/navigation/navigation';
import DemoSection from '../../components/demo-section/demo-section';
import Header from '../../../../shared/components/header/header';

interface IEditorLayoutProps {
  children: ReactNode;
}

const EditorLayout: FC<IEditorLayoutProps> = ({
  children
}) => {

  return (
    <div className={styles.layout}>
      <Header className={styles.header}>
        <Navigation />
      </Header>
      <main className={styles.main}>
        <DemoSection className={styles.demo} />
        { children }
      </main>
    </div>
  );
}

export default EditorLayout;
