import { useState, useEffect } from 'react';
import { useMatches, useNavigate } from 'react-router-dom';
import privateLocalStorage from '@shared/utils/privateLocalStorage';
import traverseTree from '@shared/utils/traverseTree';

type RouteHandle = {
  name?: string;
};

export const useMainLayout = () => {
  const [appCode, setAppCode] = useState<string>('');
  const [loading] = useState<boolean>(true);

  const matches = useMatches();
  const currentRoute = matches[matches.length - 1];
  const routeName = (currentRoute?.handle as RouteHandle | undefined)?.name;

  const navigate = useNavigate();

  useEffect(() => {
    const menuData: MenuDataType = JSON.parse(privateLocalStorage.getItem('menuData') || '[]') || [];
    let id = '';
    traverseTree(menuData, (item) => {
      if (routeName === item.code) id = item.appId;
    });
    const appData: AppDataType = JSON.parse(privateLocalStorage.getItem('AppsData') || '[]') || [];
    const appInfo = appData.find((item) => item.id === id);
    setAppCode(appInfo?.code ?? '');
  }, [routeName]);

  const changeAppCode = (id: string) => {
    const menuData: MenuDataType = JSON.parse(privateLocalStorage.getItem('menuData') || '[]') || [];
    const appMenuData = menuData.filter((item) => item.appId === id);
    const path: string = appMenuData[0]?.children[0]?.path ?? '';
    if (!path) return;
    setAppCode(id);
    navigate(path);
  };

  return {
    appCode,
    changeAppCode,
    loading,
  };
};
