import { FC, useMemo } from 'react';
import styles from './navigation.module.css';
import Logo from '../../../../shared/components/logo/logo';
import Tabs from '../../../../shared/components/tabs/tabs';
import Button from '../../../../shared/components/button/button';
import { useLocation } from 'react-router-dom';
import ITabItem from '../../../../shared/types/tab-item.type';
import { editorNavigationPreset } from '../../presets/editor-navigation.preset';

const { tabs, button } = editorNavigationPreset;

const Navigation: FC = () => {
  const location = useLocation()

  const tabItems = useMemo(() => {
    return tabs.map((tabContent): ITabItem => ({
      content: tabContent,
      isActive: tabContent.to === location.pathname,
    }));
  }, [location.pathname]);

  return (
    <nav className={styles.navigation}>
      <Logo className={styles.logo} />
      <Tabs items={tabItems} />
      <Button appearance={'secondary'} to={button.to}>{button.text}</Button>
    </nav>
  );
}

export default Navigation;
