import { Menu } from '@arco-design/web-react';
import { IconMenuFold } from '@arco-design/web-react/icon';
import { useAppHeader } from '@layouts/main-layout/components/app-header/hook/useAppHeader';
import styles from './styles/app-header.module.scss';

const MenuItem = Menu.Item;

type AppHeaderProps = {
  appCode: string;
  onChange: (appid: string) => void;
};

export const AppHeader = ({ appCode, onChange }: AppHeaderProps) => {
  const { appsData } = useAppHeader();
  return (
    <div className={styles.gHeadBox}>
      <IconMenuFold />
      <Menu
        className={styles.appMenu}
        mode="horizontal"
        selectedKeys={[appCode]}
        onClickMenuItem={(key) => onChange(key)}
      >
        {
          appsData.map((app) => (
            <MenuItem key={app.code}>{app.name}</MenuItem>
          ))
        }
      </Menu>
    </div>
  );
};
