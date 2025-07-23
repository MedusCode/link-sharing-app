import { FC } from 'react';
import styles from './links.module.css';
import EditorLinks from '../../components/editor-links/editor-links';
import AnimatedSection from '../../animations/animated-section/animated-section';

const Links: FC = () => {

  return (
    <AnimatedSection side={'left'} className={styles.container}>
      <EditorLinks />
    </AnimatedSection>
  );
}

export default Links;
