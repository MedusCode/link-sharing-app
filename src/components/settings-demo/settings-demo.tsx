import { FC, HTMLAttributes } from 'react';
import styles from './settings-demo.module.css';
import Card from '../card/card';

interface ISettingsDemoProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

const SettingsDemo: FC<ISettingsDemoProps> = ({
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

export default SettingsDemo;
