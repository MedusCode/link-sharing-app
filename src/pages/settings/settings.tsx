import { FC } from 'react';
import styles from './settings.module.css';
import { Outlet } from 'react-router-dom';
import SettingsNavigation from '../../components/settings-navigation/settings-navigation';
import SettingsDemo from '../../components/settings-demo/settings-demo';
import Header from '../../components/header/header';

const Settings: FC = () => {

  return (
    <div className={styles.layout}>
      <Header className={styles.header}>
        <SettingsNavigation />
      </Header>
      <main className={styles.main}>
        <SettingsDemo className={styles.demo} />
        <Outlet />
      </main>
    </div>
  );
}

export default Settings;
