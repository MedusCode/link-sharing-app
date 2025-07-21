import { FC } from 'react';
import styles from './main.module.css';
import { Outlet } from 'react-router-dom';
import MainHeader from '../../components/main-header/main-header';
import MainDemo from '../../components/main-demo/main-demo';

const Main: FC = () => {

  return (
    <div className={styles.layout}>
      <MainHeader className={styles.header} />
      <main className={styles.main}>
        <MainDemo className={styles.demo} />
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
