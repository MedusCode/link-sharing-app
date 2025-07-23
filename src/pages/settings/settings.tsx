import { FC } from 'react';
import styles from './settings.module.css';
import SettingsNavigation from '../../components/settings-navigation/settings-navigation';
import SettingsDemo from '../../components/settings-demo/settings-demo';
import Header from '../../components/header/header';
import AnimatedOutlet from '../../animations/animated-outlet/animated-outlet';

const Settings: FC = () => {

  return (
    <div className={styles.layout}>
      <Header className={styles.header}>
        <SettingsNavigation />
      </Header>
      <main className={styles.main}>
        <SettingsDemo className={styles.demo} />
        <AnimatedOutlet mode={'wait'} initial={false} />
      </main>
    </div>
  );
}

export default Settings;
