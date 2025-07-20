import { FC } from 'react';
import styles from './main-header.module.css';
import Logo from '../logo/logo';
import Tabs from '../tabs/tabs';
import tabItems from '../../constants/tabs';
import Button from '../button/button';
import ITabProps from '../../types/tabs-item.type';
import { useLocation, useNavigate } from 'react-router-dom';

interface IMainHeaderProps {
  className?: string;
}

const MainHeader: FC<IMainHeaderProps> = ({
  className = '',
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const tabs: ITabProps[] = Object.entries(tabItems).map(([path, tab]) => ({
    ...tab,
    active: path === pathname,
    onClick: () => navigate(path),
  }));

  return (
    <div className={`${styles.header} ${className}`}>
      <Logo className={styles.logo} />
      <Tabs items={tabs} />
      <Button style={'secondary'} className={styles.button}>Preview</Button>
    </div>
  );
}

export default MainHeader;
