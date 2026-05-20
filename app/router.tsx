import { Navigate, createBrowserRouter } from 'react-router-dom';

import { DefaultLayout } from '@layouts/default-layout';
import { HomePage } from '@pages/home/HomePage';
import { LoginPage } from '@pages/login/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <Navigate to="/login" replace />,
      },
    ],
  },
]);
