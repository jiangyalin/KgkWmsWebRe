import { Outlet } from 'react-router-dom';
import { AppNavigate } from '@layouts/main-layout/components/app-navigate/AppNavigate';
import { AppHeader } from '@layouts/main-layout/components/app-header/AppHeader';
import { TabPage } from '@layouts/main-layout/components/tab-page/TabPage';
import { useMainLayout } from '@layouts/main-layout/hook/useMainLayout';
import styles from './styles/main-layout.module.scss';

export const MainLayout = () => {
  const {
    appCode,
    changeAppCode,
  } = useMainLayout();

  return (
    <div className={styles.gMainBox}>
      <AppNavigate />
      <div className={styles.uCon}>
        <AppHeader
          appCode={appCode}
          onChange={changeAppCode}
        />
        <TabPage />
        <div className={styles.uBox}>
          <div className={styles.uPage}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
