import { FC, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '@shared/components/button/button';
import Logo from '@shared/components/logo/logo';
import Tabs from '@shared/components/tabs/tabs';
import ITabItem from '@shared/types/tab-item.type';

import styles from './editor-navigation.module.css';
import { editorNavigationPreset } from './editor-navigation.preset';

const { tabs, button } = editorNavigationPreset;

const EditorNavigation: FC = () => {
  const location = useLocation()

  const tabItems = useMemo(() => {
    return tabs.map((tab): ITabItem => ({
      ...tab,
      isActive: tab.to === location.pathname,
    }));
  }, [ location.pathname ]);

  return (
    <nav className={styles.navigation}>
      <Logo className={styles.logo} />
      <Tabs items={tabItems} />
      <Button appearance={'secondary'} to={button.to}>{button.text}</Button>
    </nav>
  );
}

export default EditorNavigation;
