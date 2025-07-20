import { FC } from 'react';
import styles from './main.module.css';
import { Outlet } from 'react-router-dom';
import MainHeader from '../../components/main-header/main-header';

const Main: FC = () => {

  return (
    <div className={styles.layout}>
      <MainHeader className={styles.header} />
      <Outlet />
    </div>
  );
}

export default Main;
