import { FC, HTMLAttributes } from 'react';
import styles from './editor-links.module.css';
import Button from '../button/button';

interface IEditorLinksProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const EditorLinks: FC<IEditorLinksProps> = ({
  className = ''
}) => {

  return (
    <section className={`${styles.container} ${className}`}>
      <div className={styles.main}>
        <h1 className={styles.heading}>Customize your links</h1>
        <span className={styles.subheading}>
          Add/edit/remove links below and then share all your profiles with the world!
        </span>
        <Button appearance={'secondary'} className={styles.newLinkButton}>+ Add new link</Button>
        <div>here</div>
      </div>
      <div className={styles.footer}>
        <Button appearance={'primary'} type={'submit'} className={styles.saveButton} disabled>Save</Button>
      </div>
    </section>
  );
}

export default EditorLinks;
