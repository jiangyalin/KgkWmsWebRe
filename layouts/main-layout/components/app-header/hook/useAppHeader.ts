import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import privateLocalStorage from '@shared/utils/privateLocalStorage';

export const useAppHeader = () => {
  const [appsData, setAppsData] = useState<AppDataType>([]);

  const location = useLocation();

  useEffect(() => {
    const data: AppDataType = JSON.parse(privateLocalStorage.getItem('AppsData') || '[]');
    setAppsData(data.filter((item) => !['dashboard', 'PDA'].includes(item.code)));
  }, [location.pathname]);

  return {
    appsData,
  };
};
