import React, { FC } from 'react';
import Login from '../../pages/login/login';
import styles from './app.module.css';

const App:FC = () => {

  return (
    <div className={styles.app}>
      <Login />
    </div>
  );
}

export default App;
