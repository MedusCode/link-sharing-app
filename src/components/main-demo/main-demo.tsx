import { FC, HTMLAttributes } from 'react';
import styles from './main-demo.module.css';
import Card from '../card/card';

interface IMainDemoProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const MainDemo: FC<IMainDemoProps> = ({
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

export default MainDemo;
