import { Navigate, createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@pages/home/HomePage';
import { LoginPage } from '@pages/login/LoginPage';
import { MainLayout } from '@layouts/main-layout/MainLayout';

const router = createBrowserRouter([
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: <HomePage />,
        handle: {
          name: 'momPlanIssue',
        },
      },
    ],
  },
]);

export default router;
