import { FC, HTMLAttributes } from 'react';
import styles from './editor-demo.module.css';
import Card from '../card/card';

interface IEditorDemoProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const EditorDemo: FC<IEditorDemoProps> = ({
  className = ''
}) => {

  return (
    <section className={`${styles.container} ${className}`}>
      <div className={styles.phone}>
        <Card />
      </div>
    </section>
  );
}

export default EditorDemo;
